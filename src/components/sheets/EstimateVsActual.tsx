import React from 'react';
import {
  CheckCircle,
  FileCheck2,
  History,
  Plus,
  Sparkles,
  Target,
  Trash2
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { EstimateActualRow } from '../../types/finance';
import { formatCurrency, formatPercent } from '../../utils/calculations';
import { DataBar } from '../common/DataBar';
import { InsightCard } from '../common/InsightCard';

export const EstimateVsActual: React.FC = () => {
  const { state, setEstimateActuals } = useFinance();
  const { params, estimateActuals } = state;

  const handleUpdateRow = (id: string, field: keyof EstimateActualRow, val: any) => {
    setEstimateActuals(
      estimateActuals.map(r => {
        if (r.id !== id) return r;
        const updated = { ...r, [field]: val };

        // Recalculate derived fields
        const actualRev = Number(updated.closedActualRev) || 0;
        const actualExp = Number(updated.closedActualExp) || 0;
        const modelRev = Number(updated.modelEstRev) || 0;
        const modelExp = Number(updated.modelEstExp) || 0;

        const actualBurn = actualExp - actualRev;
        const modelBurn = modelExp - modelRev;
        const burnVar = actualBurn - modelBurn;
        const score = actualBurn !== 0 ? Math.max(0, 1 - Math.abs(burnVar) / Math.abs(actualBurn)) : 1;

        return {
          ...updated,
          closedActualBurn: actualBurn,
          estimateAccuracyVariance: burnVar,
          accuracyScore: score
        };
      })
    );
  };

  const handleAddPeriod = () => {
    const newPeriod: EstimateActualRow = {
      id: `ea-new-${Date.now()}`,
      fiscalPeriod: '2026-10',
      closedActualRev: 215000,
      modelEstRev: 214200,
      closedActualExp: 362000,
      modelEstExp: 361000,
      closedActualBurn: 147000,
      estimateAccuracyVariance: 200,
      accuracyScore: 0.9986,
      rootCause: 'Merchant interchange fee lag and international contractor timing',
      tuningAction: 'Update Stripe transaction fee buffer parameter'
    };
    setEstimateActuals([...estimateActuals, newPeriod]);
  };

  const handleDeletePeriod = (id: string) => {
    setEstimateActuals(estimateActuals.filter(r => r.id !== id));
  };

  // Rolling average accuracy score
  const avgAccuracy = estimateActuals.length > 0
    ? estimateActuals.reduce((acc, curr) => acc + curr.accuracyScore, 0) / estimateActuals.length
    : 1;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 07 • Post-Close Accounting Calibration &amp; Retrospective Review
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            Bridging Weekly Operational Estimates &amp; Closed Financials
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl md:text-3xl font-semibold tracking-title"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Estimate vs. Actual Variance Calibration
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              External CPA books close on a 15–30 day lag. When formal statements arrive, calibrate weekly forecast accuracy and tune predictive formulas.
            </p>
          </div>

          <button
            onClick={handleAddPeriod}
            className="px-3.5 py-2 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer hover:opacity-90 self-start sm:self-auto"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Closed Period</span>
          </button>
        </div>
      </div>

      <InsightCard title="Governance Credibility &amp; Predictive Maturity">
        Maintaining high forecast calibration (&gt;98% accuracy) gives the CEO and board complete confidence to make weekly capital decisions without waiting weeks for external accountants to complete formal ledger closes.
      </InsightCard>

      {/* Accuracy KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="card-elevated p-5 border-0">
          <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
            Rolling Model Accuracy Score
          </div>
          <div
            className="text-3xl font-semibold tracking-kpi"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
          >
            {formatPercent(avgAccuracy, 2)}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Average fidelity over past {estimateActuals.length} closed monthly cycles
          </div>
          <div className="mt-3">
            <DataBar value={avgAccuracy} max={1.0} />
          </div>
        </div>

        <div className="card-elevated p-5 border-0">
          <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
            Latest Month Net Burn Variance
          </div>
          <div
            className="text-3xl font-semibold tracking-kpi text-emerald-800"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {estimateActuals.length > 0
              ? formatCurrency(estimateActuals[estimateActuals.length - 1].estimateAccuracyVariance, params.currencySymbol)
              : '$0'}
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Absolute delta between forecast and final audited cash burn
          </div>
        </div>

        <div className="card-elevated p-5 border-0">
          <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
            Calibration Status
          </div>
          <div className="text-2xl font-bold font-mono text-gray-900 mt-1 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>Calibrated &amp; Tuned</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Formula tuning feedback active for Stripe and Deel accruals
          </div>
        </div>
      </div>

      {/* Closed Accounting Calibration Table */}
      <div className="card-elevated p-6 border-0 space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
            Closed Financial Calibration Ledger (Table_Est_Actual)
          </h2>
          <p className="text-xs text-gray-500">
            Side-by-side reconciliation of historical best weekly estimates vs external CPA closed financials
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Period</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Closed Actual Rev</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Model Est. Rev</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Closed Actual Exp</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Model Est. Exp</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Closed Actual Burn</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Burn Variance (OUT-18)</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Accuracy %</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Root Cause Analysis</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Model Tuning Action</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono">
              {estimateActuals.map(row => (
                <tr key={row.id} className="hover:bg-gray-50/50">
                  <td className="py-3 px-2 font-sans font-semibold text-gray-800">
                    <input
                      type="text"
                      value={row.fiscalPeriod}
                      onChange={e => handleUpdateRow(row.id, 'fiscalPeriod', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-20 border border-yellow-200 font-mono"
                    />
                  </td>
                  <td className="py-3 px-2 text-right">
                    <input
                      type="number"
                      step="500"
                      value={row.closedActualRev}
                      onChange={e => handleUpdateRow(row.id, 'closedActualRev', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-emerald-800 font-semibold"
                    />
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    <input
                      type="number"
                      step="500"
                      value={row.modelEstRev}
                      onChange={e => handleUpdateRow(row.id, 'modelEstRev', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-2 text-right">
                    <input
                      type="number"
                      step="500"
                      value={row.closedActualExp}
                      onChange={e => handleUpdateRow(row.id, 'closedActualExp', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 font-semibold text-gray-900"
                    />
                  </td>
                  <td className="py-3 px-2 text-right text-gray-700">
                    <input
                      type="number"
                      step="500"
                      value={row.modelEstExp}
                      onChange={e => handleUpdateRow(row.id, 'modelEstExp', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-2 text-right font-bold text-gray-900">
                    {formatCurrency(row.closedActualBurn, params.currencySymbol)}
                  </td>
                  <td className="py-3 px-2 text-right font-bold text-blue-800">
                    {row.estimateAccuracyVariance >= 0 ? '+' : ''}
                    {formatCurrency(row.estimateAccuracyVariance, params.currencySymbol)}
                  </td>
                  <td className="py-3 px-2 text-right font-bold text-emerald-700">
                    {formatPercent(row.accuracyScore, 2)}
                  </td>
                  <td className="py-3 px-3 font-sans">
                    <textarea
                      rows={2}
                      value={row.rootCause}
                      onChange={e => handleUpdateRow(row.id, 'rootCause', e.target.value)}
                      className="editable-cell text-xs p-1.5 rounded w-52 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-3 font-sans">
                    <textarea
                      rows={2}
                      value={row.tuningAction}
                      onChange={e => handleUpdateRow(row.id, 'tuningAction', e.target.value)}
                      className="editable-cell text-xs p-1.5 rounded w-52 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-2 text-center">
                    <button
                      onClick={() => handleDeletePeriod(row.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
