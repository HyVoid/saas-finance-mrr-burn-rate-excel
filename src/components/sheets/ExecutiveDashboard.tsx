import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatCurrency, formatInteger, formatPercent } from '../../utils/calculations';
import { DataBar } from '../common/DataBar';
import { InsightCard } from '../common/InsightCard';
import { StatusPill } from '../common/StatusPill';

interface ExecutiveDashboardProps {
  onNavigateTab: (tab: any) => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({ onNavigateTab }) => {
  const { state, metrics } = useFinance();
  const { params, exceptionLogs, costActions } = state;
  const { financials, waterfall, saasKpis, moduleReadiness, costActionsSummary } = metrics;

  // Filter significant variances exceeding the threshold (5%)
  const majorVariances = exceptionLogs.filter(e => e.variancePct >= params.varianceThreshold);
  const activeCostActions = costActions.filter(a => a.status !== 'Realized');

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Top Banner: Executive Context & Baseline Period */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
              Sheet 01 • Executive Cockpit
            </span>
            <span className="text-[11px] text-gray-500 font-mono">
              Formula Execution: Real-time M365 Frontend Engine
            </span>
          </div>
          <h1
            className="text-2xl md:text-3xl font-semibold tracking-title"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Weekly SaaS Finance Control &amp; Variance Cockpit
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Serving Executive Committee &amp; CEO • Data Cutoff: Week Ending {params.reportDate} (EOD EST)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-blue-600" />
            <div>
              <div className="text-[10px] uppercase font-semibold text-gray-400">Cutoff Date</div>
              <div className="text-xs font-mono font-medium text-gray-800">{params.reportDate}</div>
            </div>
          </div>
          <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2.5">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <div>
              <div className="text-[10px] uppercase font-semibold text-gray-400">Model Currency</div>
              <div className="text-xs font-mono font-medium text-gray-800">{params.currencySymbol} (USD Base)</div>
            </div>
          </div>
          <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-emerald-600" />
            <div>
              <div className="text-[10px] uppercase font-semibold text-gray-400">Monday EOD Delivery</div>
              <div className="text-xs font-medium text-emerald-700">Ready for Review</div>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE A: Capital Lifeline & Monthly Burn Target Control */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2
              className="text-lg font-semibold tracking-title"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Zone A • Capital Lifeline &amp; Net Burn Control
            </h2>
            <p className="text-xs text-gray-500">
              Accrual Basis MTD Consumption vs. Board-Approved Burn Ceiling
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${
                financials.burnStatusFlag.includes('OFF')
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}
            >
              {financials.burnStatusFlag}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* MTD Cumulative Burn */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              MTD Cumulative Net Burn
            </div>
            <div
              className="text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatCurrency(financials.mtdCumulativeBurn, params.currencySymbol)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Current Week Burn:</span>
              <span className="font-mono font-medium text-gray-700">
                {formatCurrency(financials.currentWeekNetBurn, params.currencySymbol)}
              </span>
            </div>
          </div>

          {/* Monthly Burn Target */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Monthly Burn Target
            </div>
            <div
              className="text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatCurrency(params.burnTarget, params.currencySymbol)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Target Headroom Remaining:</span>
              <span className="font-mono font-medium text-gray-700">
                {formatCurrency(params.burnTarget - financials.mtdCumulativeBurn, params.currencySymbol)}
              </span>
            </div>
          </div>

          {/* Variance vs Target */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Variance vs. Budget Target
            </div>
            <div
              className={`text-3xl font-semibold tracking-kpi ${
                financials.burnTargetVariance > 0 ? 'text-red-700 font-bold' : 'text-gray-800'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {financials.burnTargetVariance > 0 ? '+' : ''}
              {formatCurrency(financials.burnTargetVariance, params.currencySymbol)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Deviation Status:</span>
              <span className="font-medium text-gray-700">
                {financials.burnTargetVariance > 0 ? 'Over Budget Ceiling' : 'Under Target Buffer'}
              </span>
            </div>
          </div>

          {/* Pace vs Time */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Burn Pace vs. Month Progress
            </div>
            <div
              className="text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatPercent(financials.burnPercentageOfTarget)}
            </div>
            <div className="mt-2">
              <DataBar
                value={financials.burnPercentageOfTarget}
                max={1.0}
                label={`${formatPercent(params.monthProgressPct)} Month Elapsed`}
              />
            </div>
          </div>
        </div>

        {/* Insight / Takeaway for Burn */}
        <div className="mt-4">
          <InsightCard
            title="CEO Capital Allocation Takeaway"
            actionText="View Full 05 KPI Analysis"
            onActionClick={() => onNavigateTab('kpis')}
          >
            Cumulative MTD Net Burn stands at{' '}
            <strong>{formatCurrency(financials.mtdCumulativeBurn, params.currencySymbol)}</strong>, representing{' '}
            <strong>{formatPercent(financials.burnPercentageOfTarget)}</strong> of the monthly ${formatInteger(params.burnTarget)} allocation, against{' '}
            <strong>{formatPercent(params.monthProgressPct)}</strong> of working days elapsed.{' '}
            {financials.burnPaceVsTimePct > 0.05
              ? 'Burn velocity is slightly accelerated due to compute auto-scaling commitments. Immediate focus on Zone E cost reduction milestones is recommended.'
              : 'Capital deployment remains disciplined and well within operating targets.'}
          </InsightCard>
        </div>
      </div>

      {/* ZONE B: Core SaaS Metrics (ARR, Ending MRR, NRR, GRR, Logo Churn) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2
            className="text-lg font-semibold tracking-title"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Zone B • Core SaaS Revenue &amp; Retention Health
          </h2>
          <span className="text-xs text-gray-400 font-mono">
            Annualized Valuation Base &amp; Defence Lines
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* ARR */}
          <div className="card-elevated p-4 border-0">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Annual Recurring Rev (ARR)
            </div>
            <div
              className="text-2xl lg:text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatCurrency(waterfall.arr, params.currencySymbol)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Weekly Pace Net New:</span>
              <span className="font-mono text-gray-700">
                {waterfall.netNewMrr >= 0 ? '+' : ''}
                {formatCurrency(waterfall.netNewMrr * 12, params.currencySymbol)}/yr
              </span>
            </div>
          </div>

          {/* Ending MRR */}
          <div className="card-elevated p-4 border-0">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Ending MRR (Cutoff)
            </div>
            <div
              className="text-2xl lg:text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatCurrency(waterfall.endingMrr, params.currencySymbol)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Starting MRR:</span>
              <span className="font-mono text-gray-700">
                {formatCurrency(waterfall.startingMrr, params.currencySymbol)}
              </span>
            </div>
          </div>

          {/* NRR */}
          <div className="card-elevated p-4 border-0">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Net Retention Rate (NRR)
            </div>
            <div
              className="text-2xl lg:text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatPercent(saasKpis.nrr)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Benchmark Target:</span>
              <span className="font-mono text-gray-700">
                {formatPercent(params.nrrBenchmark)}
              </span>
            </div>
          </div>

          {/* GRR */}
          <div className="card-elevated p-4 border-0">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Gross Retention (GRR)
            </div>
            <div
              className="text-2xl lg:text-3xl font-semibold tracking-kpi"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {formatPercent(saasKpis.grr)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Contract Moat:</span>
              <span className="text-emerald-700 font-medium">95%+ Resilient</span>
            </div>
          </div>

          {/* Logo Churn */}
          <div className="card-elevated p-4 border-0">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-500 mb-1">
              Logo Churn Rate
            </div>
            <div
              className={`text-2xl lg:text-3xl font-semibold tracking-kpi ${
                saasKpis.isLogoChurnAtRisk ? 'text-red-700' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {formatPercent(saasKpis.logoChurnRate)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 flex items-center justify-between">
              <span>Threshold Ceiling:</span>
              <span className="font-mono text-gray-700">
                &le; {formatPercent(params.logoChurnMax)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Zone C & Zone D */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ZONE C: 5 Core Modules Weekly Readiness Matrix (5 cols) */}
        <div className="lg:col-span-5 card-elevated p-6 border-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3
                className="text-base font-semibold tracking-title"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Zone C • Monday Update Readiness Matrix
              </h3>
              <p className="text-xs text-gray-500">
                Multi-system intake status across 5 operating modules
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('input')}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer inline-flex items-center gap-1"
            >
              Edit Raw Data &rarr;
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                  <th className="py-2.5 px-3 font-semibold uppercase tracking-header" style={{ color: 'var(--color-primary)' }}>
                    Module Scope
                  </th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right" style={{ color: 'var(--color-primary)' }}>
                    Rows
                  </th>
                  <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right" style={{ color: 'var(--color-primary)' }}>
                    Readiness
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {moduleReadiness.map((mod, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-gray-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{mod.name}</span>
                    </td>
                    <td className="py-2.5 px-2 text-right font-mono text-gray-600">
                      {mod.rowCount}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <StatusPill
                        label={mod.status}
                        variant={mod.isUpdated ? 'positive' : 'negative'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-3 italic">
            * All 5 systems synchronized for Week Ending {params.reportDate}.
          </p>
        </div>

        {/* ZONE D: Major Variance Dynamic Stream (>5% items) (7 cols) */}
        <div className="lg:col-span-7 card-elevated p-6 border-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3
                  className="text-base font-semibold tracking-title"
                  style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  Zone D • Material Variance Audit Stream
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 font-mono">
                  &gt; {formatPercent(params.varianceThreshold)} Threshold
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Compulsory written management explanations for review
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('costActions')}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
            >
              Full Log &rarr;
            </button>
          </div>

          <div className="space-y-3">
            {majorVariances.length === 0 ? (
              <div className="p-4 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No deviations exceeding the {formatPercent(params.varianceThreshold)} threshold this reporting cycle.</span>
              </div>
            ) : (
              majorVariances.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-lg border border-gray-100 bg-gray-50/60 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-gray-900">
                      {item.itemName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-red-700">
                        +{formatPercent(item.variancePct)}
                      </span>
                      <StatusPill
                        label={item.auditApproval}
                        variant={item.auditApproval === 'Approved' ? 'neutral' : 'negative'}
                      />
                    </div>
                  </div>
                  <div className="text-[11px] text-gray-600 line-clamp-2 italic">
                    &ldquo;{item.explanation}&rdquo;
                  </div>
                  <div className="mt-2 text-[10px] text-gray-400 font-mono flex items-center justify-between border-t border-gray-200/50 pt-1.5">
                    <span>Module: {item.moduleName}</span>
                    <span>
                      Observed: {formatCurrency(item.primaryAmount, params.currencySymbol)} vs Benchmark:{' '}
                      {formatCurrency(item.benchmarkAmount, params.currencySymbol)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ZONE E: In-Progress Cost Reduction Action Items Tracking */}
      <div className="card-elevated p-6 border-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3
                className="text-lg font-semibold tracking-title"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Zone E • Cost Reduction Execution &amp; Runway Protection
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700">
                Action-Oriented Governance
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Assigned owners, target closure dates, and tangible monthly savings commitments
            </p>
          </div>

          <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-4 py-2 flex items-center gap-3">
            <div>
              <div className="text-[10px] uppercase font-semibold text-blue-800">
                In-Progress Monthly Potential Savings
              </div>
              <div
                className="text-xl font-bold font-mono"
                style={{ color: 'var(--color-accent)' }}
              >
                {formatCurrency(costActionsSummary.inProgressSavings, params.currencySymbol)}/mo
              </div>
            </div>
            <div className="text-right border-l border-blue-200 pl-3">
              <div className="text-[10px] uppercase font-semibold text-emerald-800">
                Realized Cash Savings
              </div>
              <div className="text-sm font-bold font-mono text-emerald-700">
                {formatCurrency(costActionsSummary.realizedSavings, params.currencySymbol)}/mo
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header" style={{ color: 'var(--color-primary)' }}>
                  Action ID &amp; Target Item
                </th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header" style={{ color: 'var(--color-primary)' }}>
                  Proposed Reduction Action
                </th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right" style={{ color: 'var(--color-primary)' }}>
                  Est. Savings/mo
                </th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header" style={{ color: 'var(--color-primary)' }}>
                  Owner &amp; Deadline
                </th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right" style={{ color: 'var(--color-primary)' }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeCostActions.map(action => (
                <tr key={action.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-mono font-semibold text-gray-900">{action.actionId}</div>
                    <div className="text-[11px] text-gray-600 line-clamp-1">{action.issueDesc}</div>
                  </td>
                  <td className="py-3 px-3 text-gray-700">
                    <span className="line-clamp-2">{action.proposedReduction}</span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono font-semibold text-gray-900 whitespace-nowrap">
                    {formatCurrency(action.monthlySavingsEst, params.currencySymbol)}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{action.owner}</div>
                    <div className="text-[10px] text-gray-400 font-mono">Target: {action.targetCloseDate}</div>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <StatusPill
                      label={action.status}
                      variant={action.status === 'Realized' ? 'positive' : 'accent'}
                    />
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
