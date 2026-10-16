import React from 'react';
import {
  AlertCircle,
  Briefcase,
  DollarSign,
  PieChart,
  Shield,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatCurrency, formatPercent } from '../../utils/calculations';
import { DataBar } from '../common/DataBar';
import { InsightCard } from '../common/InsightCard';
import { StatusPill } from '../common/StatusPill';

export const KpiAnalysis: React.FC = () => {
  const { state, metrics } = useFinance();
  const { params } = state;
  const { financials, waterfall, saasKpis, funnel, headcount } = metrics;

  // Waterfall drivers % relative to Starting MRR
  const startMrr = waterfall.startingMrr || 1;
  const newDriverPct = waterfall.newMrr / startMrr;
  const expDriverPct = waterfall.expansionMrr / startMrr;
  const contDriverPct = waterfall.contractionMrr / startMrr;
  const churnDriverPct = waterfall.churnMrr / startMrr;
  const netDriverPct = waterfall.netNewMrr / startMrr;

  // Funnel drop-off rates
  const showLossRate = 1 - funnel.demoHeldRate;
  const closeLossRate = 1 - funnel.heldToCloseRate;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 05 • Deep-Dive KPI &amp; Operational Attribution Analysis
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            5 Modular Business Analytical Views
          </span>
        </div>
        <h1
          className="text-2xl md:text-3xl font-semibold tracking-title"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
        >
          SaaS Operational Attribution &amp; Efficiency Matrix
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Granular diagnostic views answering business attribution questions: Why is burn accelerating? Where is pipeline leaking? Which department is driving compensation expansion?
        </p>
      </div>

      {/* BLOCK 1: Financial Burn & Velocity vs Time */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Block 1 • Financial Burn Consumption vs. Month Elapsed Ratio
              </h2>
              <p className="text-xs text-gray-500">
                Evaluating whether cash burn pace exceeds elapsed operational working days
              </p>
            </div>
          </div>
          <StatusPill
            label={financials.burnPaceVsTimePct > 0.05 ? 'Pace Accelerated ⚠️' : 'Pace Within Buffer ✅'}
            variant={financials.burnPaceVsTimePct > 0.05 ? 'negative' : 'positive'}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Burn Budget Consumed Ratio
            </div>
            <div className="text-3xl font-semibold tracking-kpi" style={{ fontFamily: 'var(--font-heading)' }}>
              {formatPercent(financials.burnPercentageOfTarget)}
            </div>
            <div className="mt-2 text-xs text-gray-600 font-mono">
              {formatCurrency(financials.mtdCumulativeBurn, params.currencySymbol)} of {formatCurrency(params.burnTarget, params.currencySymbol)}
            </div>
            <div className="mt-3">
              <DataBar value={financials.burnPercentageOfTarget} max={1.0} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Working Days Elapsed Ratio
            </div>
            <div className="text-3xl font-semibold tracking-kpi" style={{ fontFamily: 'var(--font-heading)' }}>
              {formatPercent(params.monthProgressPct)}
            </div>
            <div className="mt-2 text-xs text-gray-600 font-mono">
              Day {(params.monthProgressPct * 22).toFixed(0)} of ~22 Monthly Business Days
            </div>
            <div className="mt-3">
              <DataBar value={params.monthProgressPct} max={1.0} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Net Velocity Delta (Burn % - Time %)
            </div>
            <div
              className={`text-3xl font-semibold tracking-kpi ${
                financials.burnPaceVsTimePct > 0.05 ? 'text-red-700' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {financials.burnPaceVsTimePct > 0 ? '+' : ''}
              {formatPercent(financials.burnPaceVsTimePct)}
            </div>
            <div className="mt-2 text-xs text-gray-600 font-mono">
              {financials.burnPaceVsTimePct > 0 ? 'Burning Ahead of Calendar' : 'Spending Slower than Calendar'}
            </div>
            <div className="mt-3">
              <DataBar
                value={Math.abs(financials.burnPaceVsTimePct)}
                max={0.3}
                isNegative={financials.burnPaceVsTimePct > 0.05}
              />
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 2: MRR Waterfall Drivers & Expansion Breakdown */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Block 2 • MRR Waterfall Velocity &amp; Expansion Attribution
              </h2>
              <p className="text-xs text-gray-500">
                Deconstructing growth components as a percentage of Starting MRR baseline
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold text-gray-800">
            ARR Run-Rate: {formatCurrency(waterfall.arr, params.currencySymbol)}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-100">
            <div className="text-[10px] uppercase font-bold tracking-header text-blue-800 mb-0.5">
              New Customer MRR
            </div>
            <div className="text-xl font-bold font-mono text-blue-900">
              +{formatCurrency(waterfall.newMrr, params.currencySymbol)}
            </div>
            <div className="text-[11px] text-gray-600 mt-1 font-mono">
              +{formatPercent(newDriverPct)} of Base
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100">
            <div className="text-[10px] uppercase font-bold tracking-header text-emerald-800 mb-0.5">
              Account Expansion MRR
            </div>
            <div className="text-xl font-bold font-mono text-emerald-900">
              +{formatCurrency(waterfall.expansionMrr, params.currencySymbol)}
            </div>
            <div className="text-[11px] text-gray-600 mt-1 font-mono">
              +{formatPercent(expDriverPct)} of Base
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-red-50/50 border border-red-100">
            <div className="text-[10px] uppercase font-bold tracking-header text-red-800 mb-0.5">
              Contraction MRR
            </div>
            <div className="text-xl font-bold font-mono text-red-900">
              -{formatCurrency(waterfall.contractionMrr, params.currencySymbol)}
            </div>
            <div className="text-[11px] text-gray-600 mt-1 font-mono">
              -{formatPercent(contDriverPct)} of Base
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-red-50/50 border border-red-100">
            <div className="text-[10px] uppercase font-bold tracking-header text-red-800 mb-0.5">
              Full Churn MRR
            </div>
            <div className="text-xl font-bold font-mono text-red-900">
              -{formatCurrency(waterfall.churnMrr, params.currencySymbol)}
            </div>
            <div className="text-[11px] text-gray-600 mt-1 font-mono">
              -{formatPercent(churnDriverPct)} of Base
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-gray-900 text-white">
            <div className="text-[10px] uppercase font-bold tracking-header text-gray-300 mb-0.5">
              Net New MRR Growth
            </div>
            <div className="text-xl font-bold font-mono text-white">
              {waterfall.netNewMrr >= 0 ? '+' : ''}
              {formatCurrency(waterfall.netNewMrr, params.currencySymbol)}
            </div>
            <div className="text-[11px] text-gray-300 mt-1 font-mono">
              {netDriverPct >= 0 ? '+' : ''}
              {formatPercent(netDriverPct)} Net Pace
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3: SaaS Retention Benchmarks */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Block 3 • SaaS Retention Quality &amp; Defensibility Matrix
              </h2>
              <p className="text-xs text-gray-500">
                Gross vs Net Retention with benchmark delta tracking
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-800">Gross Retention Rate (GRR)</span>
              <span className="text-xs font-mono font-bold text-gray-900">{formatPercent(saasKpis.grr)}</span>
            </div>
            <p className="text-[11px] text-gray-500 mb-2">
              Measures customer durability excluding upsells. Strong defensibility indicator.
            </p>
            <DataBar value={saasKpis.grr} max={1.0} />
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-800">Net Retention Rate (NRR)</span>
              <span className="text-xs font-mono font-bold text-blue-700">{formatPercent(saasKpis.nrr)}</span>
            </div>
            <p className="text-[11px] text-gray-500 mb-2">
              Includes expansion. Benchmark delta:{' '}
              <strong className="font-mono text-gray-800">
                {saasKpis.nrrVsBenchmark >= 0 ? '+' : ''}
                {formatPercent(saasKpis.nrrVsBenchmark)}
              </strong>
            </p>
            <DataBar value={saasKpis.nrr} max={1.2} />
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-800">Logo Count Churn Rate</span>
              <span
                className={`text-xs font-mono font-bold ${
                  saasKpis.isLogoChurnAtRisk ? 'text-red-700' : 'text-gray-900'
                }`}
              >
                {formatPercent(saasKpis.logoChurnRate)}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 mb-2">
              Ceiling: {formatPercent(params.logoChurnMax)}. Accounts lost: {saasKpis.churnedLogos} / {saasKpis.startingLogos}.
            </p>
            <DataBar
              value={saasKpis.logoChurnRate}
              max={0.05}
              isNegative={saasKpis.isLogoChurnAtRisk}
            />
          </div>
        </div>
      </div>

      {/* BLOCK 4: Sales Funnel Efficiency & Pipeline Leakage */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Block 4 • Sales Pipeline Conversion &amp; Stage Leakage Analysis
              </h2>
              <p className="text-xs text-gray-500">
                Pinpointing attrition at SDR Show-Up and AE Win-Rate checkpoints
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Stage 1: Demos Booked &rarr; Held (Show Rate)
            </div>
            <div className="text-2xl font-bold font-mono text-gray-900">
              {formatPercent(funnel.demoHeldRate)}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Pipeline Leakage (No-Shows): <strong className="font-mono text-gray-700">{formatPercent(showLossRate)}</strong>
            </div>
            <div className="mt-2 text-[11px] text-gray-400 font-mono">
              {funnel.demosHeld} Held out of {funnel.demosBooked} Booked
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Stage 2: Held Demos &rarr; Closed Won (AE Win Rate)
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-800">
              {formatPercent(funnel.heldToCloseRate)}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Opportunity Loss: <strong className="font-mono text-gray-700">{formatPercent(closeLossRate)}</strong>
            </div>
            <div className="mt-2 text-[11px] text-gray-400 font-mono">
              {funnel.closedWon} Won out of {funnel.demosHeld} Held (Target: {formatPercent(params.demoCloseBenchmark)})
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <div className="text-[11px] uppercase tracking-header font-semibold text-gray-500 mb-1">
              Stage 3: Sales Forecast Accuracy Deviation
            </div>
            <div className="text-2xl font-bold font-mono text-gray-900">
              {formatPercent(funnel.forecastVariancePct, 1, true)}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Target Forecast: {funnel.forecastVal} | Actual Closed: {funnel.closedWon}
            </div>
            <div className="mt-2 text-[11px] text-gray-400 font-mono">
              {funnel.forecastVariancePct < -0.1 ? 'Pipeline Slipped to Next Week' : 'Forecast On Pace'}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 5: Headcount & Comp Allocation Structure */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Block 5 • Department Headcount &amp; Full Compensation Structure
              </h2>
              <p className="text-xs text-gray-500">
                Departmental payroll share, per-head load, and cost allocation
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {headcount.departments.map(dept => (
            <div key={dept.department} className="p-3.5 rounded-lg border border-gray-100 bg-gray-50/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900">{dept.department}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono font-medium">
                    {dept.headcount} Team Members
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span>
                    Avg Cost/Head: <strong className="text-gray-900">{formatCurrency(dept.costPerHead, params.currencySymbol)}</strong>
                  </span>
                  <span>
                    Total: <strong className="text-blue-900">{formatCurrency(dept.totalComp, params.currencySymbol)}</strong>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <DataBar value={dept.shareOfTotalCompPct} max={0.4} />
                </div>
                <span className="text-xs font-mono text-gray-600 w-16 text-right">
                  {formatPercent(dept.shareOfTotalCompPct)} share
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
