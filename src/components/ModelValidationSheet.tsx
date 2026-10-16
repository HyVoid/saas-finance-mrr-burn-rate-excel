import React, { useState } from 'react';
import { ParamConfig, ValidationRow } from '../types';
import {
  calculateEngineQuote,
  formatCurrency,
  formatPct,
  generateDefaultValidationCases,
} from '../pricingEngine';

interface ModelValidationSheetProps {
  rows: ValidationRow[];
  params: ParamConfig;
  onChange: (nextRows: ValidationRow[]) => void;
  onInspectScenario: (width: number, height: number, quantity: number) => void;
}

export const ModelValidationSheet: React.FC<ModelValidationSheetProps> = ({
  rows,
  params,
  onChange,
  onInspectScenario,
}) => {
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);

  // Step 1: Compute engine price and unit price for all 36 rows (F6# & G6#)
  const baseComputed = rows.map((r) => {
    const res = calculateEngineQuote(r.width, r.height, r.quantity, params);
    return {
      ...r,
      area: res.area,
      totalPrice: res.monotonicProtectedTotal,
      unitPrice: res.pricePerLabel,
      tierLabel: res.tierLabel,
      isSmoothedOrMin: res.isSmoothedOrMin,
    };
  });

  // Step 2: Vector scan for Total Monotonicity (H6#) & Unit Price Monotonicity (I6#)
  const auditedRows = baseComputed.map((curr, idx) => {
    if (idx === 0) {
      return {
        ...curr,
        totalCheck: 'PASS' as 'PASS' | 'FAIL (Boundary Reversal)',
        unitCheck: 'PASS' as 'PASS' | 'FAIL (Unit Inversion)',
      };
    }
    const prev = baseComputed[idx - 1];
    const sameDim =
      Math.abs(curr.width - prev.width) < 0.0001 &&
      Math.abs(curr.height - prev.height) < 0.0001;
    const qtyLarger = curr.quantity > prev.quantity;

    let totalCheck: 'PASS' | 'FAIL (Boundary Reversal)' = 'PASS';
    let unitCheck: 'PASS' | 'FAIL (Unit Inversion)' = 'PASS';

    if (sameDim && qtyLarger) {
      if (curr.totalPrice < prev.totalPrice - 0.0001) {
        totalCheck = 'FAIL (Boundary Reversal)';
      }
      if (curr.unitPrice > prev.unitPrice + 0.0001) {
        unitCheck = 'FAIL (Unit Inversion)';
      }
    }

    return {
      ...curr,
      totalCheck,
      unitCheck,
    };
  });

  // Step 3: Global Health Score (Cell C3)
  const totalAudits = auditedRows.length * 2;
  const passCount = auditedRows.reduce(
    (acc, r) =>
      acc +
      (r.totalCheck === 'PASS' ? 1 : 0) +
      (r.unitCheck === 'PASS' ? 1 : 0),
    0
  );
  const healthScore = totalAudits > 0 ? passCount / totalAudits : 1;
  const isHealthy = healthScore === 1;

  const maxTotalPrice = Math.max(...auditedRows.map((r) => r.totalPrice), 1);

  const handleRowEdit = (
    idx: number,
    field: keyof ValidationRow,
    val: string | number
  ) => {
    const next = [...rows];
    next[idx] = {
      ...next[idx],
      [field]: val,
    };
    onChange(next);
  };

  // Group into 6x6 Exposure Matrix for visual audit
  const uniqueDims = Array.from(
    new Set(auditedRows.map((r) => `${r.width.toFixed(2)}" × ${r.height.toFixed(2)}"`))
  );
  const uniqueQtys = Array.from(new Set(auditedRows.map((r) => r.quantity))).sort(
    (a, b) => a - b
  );

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="kpi-label mb-1">Sheet 05 · Pre-Release Audit Dashboard (Model_Validation)</div>
          <h1 className="page-title">36-Scenario Stress Test & Monotonic Boundary Validation</h1>
          <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
            Cartesian stress matrix testing micro labels (0.5"×0.5") to wide-format (12"×12") across critical tier boundary transitions (100 vs 101, 500 vs 501, 1,000, 5,000).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(generateDefaultValidationCases())}
            className="btn-action"
          >
            Restore Default 36 Boundary Cases
          </button>
        </div>
      </div>

      {/* Executive Health Scorecard (Cells B2:F3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
        <div className="lg:col-span-6 card-surface-lg p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="kpi-label">Global Model Health Score (Cell C3 · Val_Health_Score)</span>
            <span
              className={`status-pill ${
                isHealthy ? 'status-pill-positive' : 'status-pill-negative'
              }`}
            >
              {isHealthy ? '100.0% COMPLIANT' : 'ANOMALY DETECTED'}
            </span>
          </div>
          <div
            className="font-display text-2xl font-semibold mt-3"
            style={{
              color: isHealthy ? 'var(--color-primary)' : 'var(--color-negative)',
            }}
          >
            {isHealthy
              ? '100.0% Compliance Passed — Model Healthy & Ready for Production API'
              : `Risk Detected: Compliance Rate ${formatPct(healthScore, 1)} — Inspect Highlighted FAIL Rows`}
          </div>
          <div className="mt-3 text-xs" style={{ color: 'var(--color-muted)' }}>
            Audited {totalAudits} vector assertions ({auditedRows.length} Total Price Monotonicity + {auditedRows.length} Unit Price Economies of Scale checks).
          </div>
        </div>

        <div className="lg:col-span-3 card-surface-lg p-6">
          <div className="kpi-label mb-2">Total Price Monotonicity (H6#)</div>
          <div className="kpi-value">
            {auditedRows.filter((r) => r.totalCheck === 'PASS').length}/{auditedRows.length}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Ensures ∀ Q₂ &gt; Q₁ ⇒ P_total(Q₂) ≥ P_total(Q₁)
          </div>
        </div>

        <div className="lg:col-span-3 card-surface-lg p-6">
          <div className="kpi-label mb-2">Unit Price Monotonicity (I6#)</div>
          <div className="kpi-value">
            {auditedRows.filter((r) => r.unitCheck === 'PASS').length}/{auditedRows.length}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Ensures ∀ Q₂ &gt; Q₁ ⇒ P_unit(Q₂) ≤ P_unit(Q₁)
          </div>
        </div>
      </div>

      {/* Interactive Exposure Matrix (6 Dimensions x 6 Boundary Quantities) */}
      <div className="card-surface p-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="section-title">Interactive Stress Exposure Matrix (Dimension × Tier Boundary Grid)</h2>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Hover over any status cell for scale feedback; click any cell to load that specification directly into Sheet 01 Calculator or highlight below.
            </p>
          </div>
          <span className="status-pill">36 Cartesian Nodes</span>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left">Dimension (W × H)</th>
                {uniqueQtys.map((q) => (
                  <th key={q} className="text-right">
                    {q.toLocaleString()} pcs
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {uniqueDims.map((dimLabel) => {
                const dimRows = auditedRows.filter(
                  (r) => `${r.width.toFixed(2)}" × ${r.height.toFixed(2)}"` === dimLabel
                );
                return (
                  <tr key={dimLabel}>
                    <td className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                      {dimLabel}
                    </td>
                    {uniqueQtys.map((q) => {
                      const match = dimRows.find((r) => r.quantity === q);
                      if (!match) {
                        return (
                          <td key={q} className="text-right" style={{ color: 'var(--color-muted)' }}>
                            —
                          </td>
                        );
                      }
                      const passed =
                        match.totalCheck === 'PASS' && match.unitCheck === 'PASS';
                      const isSelected = selectedCellId === match.id;

                      return (
                        <td key={q} className="text-right">
                          <div
                            onClick={() => {
                              setSelectedCellId(match.id);
                              onInspectScenario(match.width, match.height, match.quantity);
                            }}
                            className="interactive-status-cell inline-flex flex-col items-end p-2 rounded"
                            style={{
                              background: !passed
                                ? 'var(--negative-bg)'
                                : isSelected
                                ? 'var(--insight-bg)'
                                : 'var(--neutral-badge-bg)',
                              border: isSelected
                                ? '1px solid var(--color-accent)'
                                : '1px solid transparent',
                            }}
                            title={`Click to send ${match.id} (${match.width}"×${match.height}", ${match.quantity} pcs) to Calculator`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold" style={{ color: 'var(--color-primary)' }}>
                                {formatCurrency(match.totalPrice, params.currencySymbol, 2)}
                              </span>
                              <span
                                className={`status-pill ${
                                  passed ? 'status-pill-positive' : 'status-pill-negative'
                                }`}
                                style={{ padding: '1px 6px', fontSize: '10px' }}
                              >
                                {passed ? 'PASS' : 'FAIL'}
                              </span>
                            </div>
                            <span className="text-xs tabular-num" style={{ color: 'var(--color-muted)' }}>
                              {formatCurrency(match.unitPrice, params.currencySymbol, 4)}/pc
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full 36-Row Validation Table (A6:I41) */}
      <div className="card-surface p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="section-title">Full 36-Scenario Stress Test Ledger (Cells A6:I41)</h2>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Editable test coordinates (Cols B, C, E) with live vector monotonicity audit formulas in Columns H6# and I6#.
            </p>
          </div>
          <span className="status-pill">Cells A6:I41</span>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left">A · Test ID</th>
                <th className="text-right">B · Test Width</th>
                <th className="text-right">C · Test Height</th>
                <th className="text-right">D · Surface Area</th>
                <th className="text-right">E · Test Quantity</th>
                <th className="text-right">F · Engine Total Price</th>
                <th className="text-right">G · Unit Price / Label</th>
                <th className="text-center">H · Total Monotonic Check</th>
                <th className="text-center">I · Unit Monotonic Check</th>
              </tr>
            </thead>
            <tbody>
              {auditedRows.map((row, idx) => {
                const isFail =
                  row.totalCheck !== 'PASS' || row.unitCheck !== 'PASS';
                const barPct = Math.min(
                  100,
                  Math.max(4, (row.totalPrice / maxTotalPrice) * 100)
                );

                return (
                  <tr
                    key={row.id}
                    className={isFail ? 'anomaly-row' : undefined}
                  >
                    <td className="font-medium" style={{ color: 'var(--color-primary)' }}>
                      {row.id}
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.5"
                        min="0.5"
                        max="24"
                        value={row.width}
                        onChange={(e) =>
                          handleRowEdit(
                            idx,
                            'width',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="editable-input w-20 text-right"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.5"
                        min="0.5"
                        max="12"
                        value={row.height}
                        onChange={(e) =>
                          handleRowEdit(
                            idx,
                            'height',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="editable-input w-20 text-right"
                      />
                    </td>
                    <td className="text-right tabular-num">
                      {row.area.toFixed(2)} sq.in
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="1"
                        min="1"
                        value={row.quantity}
                        onChange={(e) =>
                          handleRowEdit(
                            idx,
                            'quantity',
                            parseInt(e.target.value, 10) || 0
                          )
                        }
                        className="editable-input w-24 text-right"
                      />
                    </td>
                    <td className="text-right">
                      <div className="databar-wrapper">
                        <span
                          className="tabular-num font-semibold"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {formatCurrency(row.totalPrice, params.currencySymbol, 2)}
                        </span>
                        <div className="databar-track">
                          <div
                            className="databar-fill"
                            style={{ transform: `scaleX(${barPct / 100})` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right tabular-num">
                      {formatCurrency(row.unitPrice, params.currencySymbol, 4)}
                    </td>
                    <td className="text-center">
                      <span
                        className={`status-pill interactive-status-cell ${
                          row.totalCheck === 'PASS'
                            ? 'status-pill-positive'
                            : 'status-pill-negative'
                        }`}
                      >
                        {row.totalCheck}
                      </span>
                    </td>
                    <td className="text-center">
                      <span
                        className={`status-pill interactive-status-cell ${
                          row.unitCheck === 'PASS'
                            ? 'status-pill-positive'
                            : 'status-pill-negative'
                        }`}
                      >
                        {row.unitCheck}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
