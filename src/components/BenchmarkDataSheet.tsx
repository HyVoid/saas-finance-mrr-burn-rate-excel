import React, { useState } from 'react';
import { BenchmarkRow, ParamConfig } from '../types';
import {
  calculateEngineQuote,
  formatCurrency,
  formatPct,
} from '../pricingEngine';

interface BenchmarkDataSheetProps {
  rows: BenchmarkRow[];
  params: ParamConfig;
  onChange: (nextRows: BenchmarkRow[]) => void;
  onOpenCsvModal: () => void;
}

export const BenchmarkDataSheet: React.FC<BenchmarkDataSheetProps> = ({
  rows,
  params,
  onChange,
  onOpenCsvModal,
}) => {
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ON_TARGET' | 'OVER_DISCOUNT' | 'PRICE_HIGH'>('ALL');

  const evaluatedRows = rows.map((row) => {
    const engineRes = calculateEngineQuote(row.width, row.height, row.quantity, params);
    const enginePrice = engineRes.monotonicProtectedTotal;
    const priceDiff = Number((enginePrice - row.compPrice).toFixed(2));
    const targetPrice = row.compPrice * params.compTargetFactor;
    const variancePct =
      targetPrice === 0
        ? 0
        : Number(((enginePrice - targetPrice) / targetPrice).toFixed(4));

    let statusCode: 'ON_TARGET' | 'OVER_DISCOUNT' | 'PRICE_HIGH' = 'ON_TARGET';
    let statusLabel = 'On Target';
    if (Math.abs(variancePct) <= params.maxVarianceTol) {
      statusCode = 'ON_TARGET';
      statusLabel = 'On Target';
    } else if (variancePct < -params.maxVarianceTol) {
      statusCode = 'OVER_DISCOUNT';
      statusLabel = 'Over-Discounted';
    } else {
      statusCode = 'PRICE_HIGH';
      statusLabel = 'Price Too High';
    }

    return {
      ...row,
      enginePrice,
      priceDiff,
      targetPrice,
      variancePct,
      statusCode,
      statusLabel,
    };
  });

  const filteredRows = evaluatedRows.filter((r) =>
    statusFilter === 'ALL' ? true : r.statusCode === statusFilter
  );

  const totalCount = evaluatedRows.length;
  const onTargetCount = evaluatedRows.filter((r) => r.statusCode === 'ON_TARGET').length;
  const complianceRate = totalCount > 0 ? onTargetCount / totalCount : 1;
  const avgVariance =
    totalCount > 0
      ? evaluatedRows.reduce((acc, r) => acc + r.variancePct, 0) / totalCount
      : 0;
  const maxPosVariance =
    totalCount > 0
      ? Math.max(...evaluatedRows.map((r) => r.variancePct))
      : 0;
  const maxNegVariance =
    totalCount > 0
      ? Math.min(...evaluatedRows.map((r) => r.variancePct))
      : 0;

  const maxEnginePrice = Math.max(...evaluatedRows.map((r) => r.enginePrice), 1);

  const handleRowChange = (
    idx: number,
    field: keyof BenchmarkRow,
    val: string | number
  ) => {
    const next = [...rows];
    next[idx] = {
      ...next[idx],
      [field]: val,
    };
    onChange(next);
  };

  const handleAddSample = () => {
    const nextId = `BM-${String(rows.length + 1).padStart(3, '0')}`;
    onChange([
      ...rows,
      {
        id: nextId,
        width: 3.0,
        height: 5.0,
        quantity: 1000,
        compName: 'Wizard Labels',
        compPrice: 175.0,
      },
    ]);
  };

  const handleDeleteSample = (id: string) => {
    onChange(rows.filter((r) => r.id !== id));
  };

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="kpi-label mb-1">Sheet 04 · Market Calibration Dataset (Benchmark_Data)</div>
          <h1 className="page-title">Competitor Benchmark Calibration & Variance Audit</h1>
          <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
            Empirical quotes collected from Wizard Labels and Consolidated Label. Evaluates model alignment against the strategic target factor ({formatPct(params.compTargetFactor, 1)} of competitor price ± {formatPct(params.maxVarianceTol, 1)} tolerance).
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
            onClick={handleAddSample}
            className="btn-action btn-action-primary"
          >
            + Add Benchmark Sample
          </button>
        </div>
      </div>

      {/* Top KPI Summary Board (B2:H3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Benchmark Sample Count</div>
          <div className="kpi-value">{totalCount}</div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Wizard Labels ({formatPct(params.weightWizard, 0)}) & Consolidated ({formatPct(params.weightConsolidated, 0)})
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Target Hit Rate (Within ±{formatPct(params.maxVarianceTol, 1)})</div>
          <div
            className="kpi-value"
            style={{
              color:
                complianceRate === 1
                  ? 'var(--color-primary)'
                  : 'var(--color-accent)',
            }}
          >
            {formatPct(complianceRate, 1)}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            {onTargetCount} of {totalCount} empirical samples within tolerance band
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Mean Strategic Variance</div>
          <div className="kpi-value">{formatPct(avgVariance, 2, true)}</div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Deviation from α × P_comp target trajectory
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Max Positive / Negative Drift</div>
          <div className="font-display text-2xl font-semibold mt-1 tabular-num" style={{ color: 'var(--color-primary)' }}>
            {formatPct(maxPosVariance, 1, true)} / {formatPct(maxNegVariance, 1, true)}
          </div>
          <div className="mt-3 text-xs" style={{ color: 'var(--color-muted)' }}>
            Click status pills in table to filter exposure matrix
          </div>
        </div>
      </div>

      {/* Exposure Matrix Filter Bar */}
      <div className="card-surface p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="section-title">Competitor Empirical Backtesting Table (A5# : J5#)</h2>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Columns A–F are empirical field observations; Columns G–J are dynamic array engine predictions and variance checks. Click any status badge to filter by exposure state.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'ALL', label: `All Samples (${totalCount})` },
                {
                  id: 'ON_TARGET',
                  label: `On Target (${evaluatedRows.filter((r) => r.statusCode === 'ON_TARGET').length})`,
                },
                {
                  id: 'OVER_DISCOUNT',
                  label: `Over-Discounted (${evaluatedRows.filter((r) => r.statusCode === 'OVER_DISCOUNT').length})`,
                },
                {
                  id: 'PRICE_HIGH',
                  label: `Price Too High (${evaluatedRows.filter((r) => r.statusCode === 'PRICE_HIGH').length})`,
                },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                className={`btn-action text-xs ${
                  statusFilter === tab.id ? 'btn-action-primary' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left">A · Record ID</th>
                <th className="text-right">B · Width (in)</th>
                <th className="text-right">C · Height (in)</th>
                <th className="text-right">D · Qty (pcs)</th>
                <th className="text-left">E · Competitor Name</th>
                <th className="text-right">F · Empirical Comp Price</th>
                <th className="text-right">G · Engine Predicted Price</th>
                <th className="text-right">H · Absolute Price Diff</th>
                <th className="text-right">I · Target Variance %</th>
                <th className="text-center">J · Competitiveness Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => {
                const origIdx = rows.findIndex((r) => r.id === row.id);
                const isAnomaly = row.statusCode !== 'ON_TARGET';
                const barPct = Math.min(
                  100,
                  Math.max(4, (row.enginePrice / maxEnginePrice) * 100)
                );

                return (
                  <tr
                    key={row.id}
                    className={isAnomaly ? 'anomaly-row' : undefined}
                  >
                    <td className="text-left">
                      <input
                        type="text"
                        value={row.id}
                        onChange={(e) =>
                          handleRowChange(origIdx, 'id', e.target.value)
                        }
                        className="editable-input w-24 font-medium"
                      />
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="0.25"
                        min="0.5"
                        max="24"
                        value={row.width}
                        onChange={(e) =>
                          handleRowChange(
                            origIdx,
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
                        value={row.height}
                        onChange={(e) =>
                          handleRowChange(
                            origIdx,
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
                        value={row.quantity}
                        onChange={(e) =>
                          handleRowChange(
                            origIdx,
                            'quantity',
                            parseInt(e.target.value, 10) || 0
                          )
                        }
                        className="editable-input w-24 text-right"
                      />
                    </td>
                    <td className="text-left">
                      <select
                        value={row.compName}
                        onChange={(e) =>
                          handleRowChange(
                            origIdx,
                            'compName',
                            e.target.value as BenchmarkRow['compName']
                          )
                        }
                        className="editable-input w-44"
                      >
                        <option value="Wizard Labels">Wizard Labels</option>
                        <option value="Consolidated Label">Consolidated Label</option>
                      </select>
                    </td>
                    <td className="text-right">
                      <input
                        type="number"
                        step="1"
                        min="1"
                        value={row.compPrice}
                        onChange={(e) =>
                          handleRowChange(
                            origIdx,
                            'compPrice',
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="editable-input w-28 text-right"
                      />
                    </td>
                    <td className="text-right">
                      <div className="databar-wrapper">
                        <span
                          className="tabular-num font-semibold"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {formatCurrency(row.enginePrice, params.currencySymbol)}
                        </span>
                        <div className="databar-track">
                          <div
                            className="databar-fill"
                            style={{ transform: `scaleX(${barPct / 100})` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(row.priceDiff, params.currencySymbol, 2, true)}
                    </td>
                    <td
                      className="text-right tabular-num"
                      style={{
                        color: isAnomaly
                          ? 'var(--color-negative)'
                          : 'var(--color-muted)',
                        fontWeight: isAnomaly ? 600 : 400,
                      }}
                    >
                      {formatPct(row.variancePct, 1, true)}
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() =>
                          setStatusFilter(
                            statusFilter === row.statusCode ? 'ALL' : row.statusCode
                          )
                        }
                        className={`status-pill interactive-status-cell ${
                          row.statusCode === 'ON_TARGET'
                            ? 'status-pill-positive'
                            : 'status-pill-negative'
                        }`}
                        title="Click to toggle filter on this status"
                      >
                        {row.statusLabel}
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteSample(row.id)}
                        className="btn-action text-xs px-2 py-1"
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
