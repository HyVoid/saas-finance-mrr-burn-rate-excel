import React, { useState } from 'react';
import { BatchQuoteRow, ParamConfig } from '../types';
import {
  calculateEngineQuote,
  formatCurrency,
  formatPct,
} from '../pricingEngine';

interface EngineCalcSheetProps {
  rows: BatchQuoteRow[];
  params: ParamConfig;
  onChange: (nextRows: BatchQuoteRow[]) => void;
  onOpenCsvModal: () => void;
}

export const EngineCalcSheet: React.FC<EngineCalcSheetProps> = ({
  rows,
  params,
  onChange,
  onOpenCsvModal,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const computedRows = rows.map((row) => ({
    ...row,
    calc: calculateEngineQuote(row.width, row.height, row.quantity, params),
  }));

  const filteredRows = computedRows.filter(
    (r) =>
      r.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.calc.tierLabel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPipelineRevenue = computedRows.reduce(
    (acc, r) => acc + r.calc.monotonicProtectedTotal,
    0
  );
  const totalEngineeringCost = computedRows.reduce(
    (acc, r) => acc + r.calc.engineeringCost,
    0
  );
  const totalBenchmarkValue = computedRows.reduce(
    (acc, r) => acc + r.calc.marketBenchmarkRef,
    0
  );
  const smoothedCount = computedRows.filter(
    (r) => r.calc.isSmoothedOrMin !== 'NORMAL'
  ).length;

  const maxRowTotal = Math.max(
    ...computedRows.map((r) => r.calc.monotonicProtectedTotal),
    1
  );

  const handleRowChange = (
    idx: number,
    field: keyof BatchQuoteRow,
    val: string | number
  ) => {
    const updated = [...rows];
    updated[idx] = {
      ...updated[idx],
      [field]: val,
    };
    onChange(updated);
  };

  const handleAddRow = () => {
    const nextNum = rows.length + 1;
    const newId = `Q2026-${String(nextNum).padStart(3, '0')}`;
    onChange([
      ...rows,
      { id: newId, width: 3.0, height: 4.0, quantity: 1000 },
    ]);
  };

  const handleDeleteRow = (id: string) => {
    onChange(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="animate-fade-up">
      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="kpi-label mb-1">Sheet 03 · Core Computation Pipeline (Engine_Calc)</div>
          <h1 className="page-title">Batch Quotation & Dynamic Array Calculation Pipeline</h1>
          <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
            Columns A5:D accept ERP/CRM batch imports; Columns E5#:O5# spill zero-maintenance dynamic array calculations with monotonic boundary smoothing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onOpenCsvModal}
            className="btn-action"
          >
            Bulk CSV Import
          </button>
          <button
            type="button"
            onClick={handleAddRow}
            className="btn-action btn-action-primary"
          >
            + Add Work Order Row
          </button>
        </div>
      </div>

      {/* Summary KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Active Batch Work Orders</div>
          <div className="kpi-value">{rows.length}</div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Dynamic array spill depth: Rows 5 to {4 + rows.length}
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Pipeline Protected Total (Sum L5#)</div>
          <div className="kpi-value kpi-value-accent">
            {formatCurrency(totalPipelineRevenue, params.currencySymbol, 2)}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Unadjusted Eng Cost: {formatCurrency(totalEngineeringCost, params.currencySymbol, 2)}
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Market Benchmark Equiv (Sum N5#)</div>
          <div className="kpi-value">
            {formatCurrency(totalBenchmarkValue, params.currencySymbol, 2)}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Aggregate Client Savings: {formatCurrency(totalBenchmarkValue - totalPipelineRevenue, params.currencySymbol, 2)}
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Boundary / Floor Guard Triggers</div>
          <div className="kpi-value">{smoothedCount}</div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Orders protected by MAX(min_fee, calc_p, prev_p)
          </div>
        </div>
      </div>

      {/* Insight Block on Monotonic Boundary Smoothing */}
      <div className="insight-block mb-8">
        <div className="kpi-label mb-1" style={{ color: 'var(--color-accent)' }}>
          Mathematical Guarantee · Monotonic Boundary Smoothing (Formula 5 · Column L5#)
        </div>
        <p className="text-xs leading-relaxed">
          Notice work orders <strong>Q2026-001 (100 pcs)</strong> vs <strong>Q2026-002 (105 pcs)</strong> and <strong>Q2026-003 (500 pcs)</strong> vs <strong>Q2026-004 (510 pcs)</strong>. When an order crosses a tier threshold (e.g. from Tier 1 0% discount to Tier 2 12% discount), raw calibrated total drops below the prior tier peak. Column <code>L5#</code> automatically enforces <code>MAX(min_fee, calc_price, prev_price)</code> so larger quantities never result in a lower total invoice.
        </p>
      </div>

      {/* Full 15-Column Pipeline Table (A5# to O5#) */}
      <div className="card-surface p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="section-title">15-Column Dynamic Array Pipeline (A5# : O5#)</h2>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Yellow inputs (Cols A–D) represent imported/editable specifications; Cols E–O are live formula spill outputs.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Filter by Quote ID or Tier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="editable-input w-56"
              style={{ background: 'var(--color-surface)' }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left">A · Quote ID</th>
                <th className="text-right">B · Width (in)</th>
                <th className="text-right">C · Height (in)</th>
                <th className="text-right">D · Qty (pcs)</th>
                <th className="text-right">E · Area (sq.in)</th>
                <th className="text-left">F · Quantity Tier</th>
                <th className="text-right">G · Tier Disc</th>
                <th className="text-right">H · Fixed Setup</th>
                <th className="text-right">I · Var Cost</th>
                <th className="text-right">J · Eng Cost</th>
                <th className="text-right">K · Calibrated</th>
                <th className="text-right">L · Final Protected</th>
                <th className="text-right">M · Unit Price</th>
                <th className="text-right">N · Market Ref</th>
                <th className="text-right">O · Comp Delta</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((item) => {
                const originalIndex = rows.findIndex((r) => r.id === item.id);
                const c = item.calc;
                const barPct = Math.min(
                  100,
                  Math.max(4, (c.monotonicProtectedTotal / maxRowTotal) * 100)
                );

                return (
                  <tr key={item.id}>
                    <td className="text-left">
                      <input
                        type="text"
                        value={item.id}
                        onChange={(e) =>
                          handleRowChange(originalIndex, 'id', e.target.value)
                        }
                        className="editable-input w-28 font-medium"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.25"
                        min="0.5"
                        max="24"
                        value={item.width}
                        onChange={(e) =>
                          handleRowChange(
                            originalIndex,
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
                        step="0.25"
                        min="0.5"
                        max="12"
                        value={item.height}
                        onChange={(e) =>
                          handleRowChange(
                            originalIndex,
                            'height',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="editable-input w-20 text-right"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="50"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleRowChange(
                            originalIndex,
                            'quantity',
                            parseInt(e.target.value, 10) || 0
                          )
                        }
                        className="editable-input w-24 text-right"
                      />
                    </td>
                    <td className="text-right tabular-num">{c.area.toFixed(2)}</td>
                    <td className="text-left">
                      <span className="status-pill">{c.tierLabel}</span>
                    </td>
                    <td className="text-right tabular-num">
                      {formatPct(c.discountRate, 1)}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(c.fixedCost, params.currencySymbol)}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(c.variableCost, params.currencySymbol)}
                    </td>
                    <td className="text-right tabular-num">
                      {formatCurrency(c.engineeringCost, params.currencySymbol)}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(c.calibratedTotal, params.currencySymbol)}
                    </td>
                    <td className="text-right">
                      <div className="databar-wrapper">
                        <span
                          className="tabular-num font-semibold"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {formatCurrency(
                            c.monotonicProtectedTotal,
                            params.currencySymbol
                          )}
                        </span>
                        <div className="databar-track">
                          <div
                            className="databar-fill"
                            style={{ transform: `scaleX(${barPct / 100})` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right tabular-num font-medium">
                      {formatCurrency(c.pricePerLabel, params.currencySymbol, 4)}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(
                        c.marketBenchmarkRef,
                        params.currencySymbol
                      )}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatPct(c.competitorDeltaPct, 1, true)}
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteRow(item.id)}
                        className="btn-action text-xs px-2 py-1"
                        title="Delete Row"
                      >
                        Remove
                      </button>
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
