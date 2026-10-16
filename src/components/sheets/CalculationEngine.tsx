import React from 'react';
import {
  Calculator,
  CheckCircle2,
  Cpu,
  Layers,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatCurrency, formatInteger, formatPercent } from '../../utils/calculations';
import { DataBar } from '../common/DataBar';
import { InsightCard } from '../common/InsightCard';
import { StatusPill } from '../common/StatusPill';

export const CalculationEngine: React.FC = () => {
  const { state, metrics } = useFinance();
  const { params, exceptionLogs } = state;
  const { financials, waterfall, saasKpis, funnel, headcount } = metrics;

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 04 • Backend Calculation &amp; Reconciliation Engine
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            Zero-Maintenance M365 Formula Execution View
          </span>
        </div>
        <h1
          className="text-2xl md:text-3xl font-semibold tracking-title"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
        >
          Calculation Engines &amp; Identity Reconciliation
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Normally locked/protected in production. Displays real-time intermediate aggregations, mathematical identity proofs,
          and multi-source variance checks without downward formula dragging.
        </p>
      </div>

      <InsightCard title="Formula Transparency &amp; Audit Trail">
        This sheet proves the exact mathematical formulation specified in Section 9 of the system architecture design.
        Every calculation executes dynamically in client JS with zero roundtrips, mirroring Excel&apos;s <code>LET</code>,
        <code>FILTER</code>, <code>UNIQUE</code>, and <code>SUMIFS</code> functions.
      </InsightCard>

      {/* Grid: Engine 1 & Engine 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ENGINE 1: Financial & Burn Aggregation Engine */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Engine 1 • Accrual Financials &amp; Net Burn
                </h3>
                <span className="text-[10px] text-gray-400 font-mono">
                  Cells $C$4, $C$5 • MTD SUMIFS with Date Slicing
                </span>
              </div>
            </div>
            <StatusPill
              label={financials.burnStatusFlag}
              variant={financials.burnStatusFlag.includes('OFF') ? 'negative' : 'positive'}
            />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-gray-50 flex items-center justify-between font-mono">
              <span className="text-gray-600 font-sans">Current Week Accrual Revenue:</span>
              <span className="font-semibold text-emerald-800">
                {formatCurrency(financials.currentWeekRev, params.currencySymbol)}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 flex items-center justify-between font-mono">
              <span className="text-gray-600 font-sans">Current Week Accrual Expenses:</span>
              <span className="font-semibold text-gray-900">
                {formatCurrency(financials.currentWeekExp, params.currencySymbol)}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center justify-between font-mono">
              <span className="text-blue-900 font-sans font-medium">Calculated Current Week Net Burn (Exp - Rev):</span>
              <span className="font-bold text-blue-900">
                {formatCurrency(financials.currentWeekNetBurn, params.currencySymbol)}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 flex items-center justify-between font-mono">
              <span className="text-gray-600 font-sans">MTD Cumulative Revenue:</span>
              <span className="font-semibold text-emerald-800">
                {formatCurrency(financials.mtdRev, params.currencySymbol)}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 flex items-center justify-between font-mono">
              <span className="text-gray-600 font-sans">MTD Cumulative Expenses:</span>
              <span className="font-semibold text-gray-900">
                {formatCurrency(financials.mtdExp, params.currencySymbol)}
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-900 text-white flex items-center justify-between font-mono">
              <span className="font-sans font-semibold">MTD Net Burn (OUT-02):</span>
              <span className="text-base font-bold text-white">
                {formatCurrency(financials.mtdCumulativeBurn, params.currencySymbol)}
              </span>
            </div>
          </div>
        </div>

        {/* ENGINE 2: MRR Waterfall Identity Check Engine */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Engine 2 • MRR Waterfall Identity Verification
                </h3>
                <span className="text-[10px] text-gray-400 font-mono">
                  Ending = Start + New + Exp - Cont - Churn
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
              Identity Proof: {Math.abs(waterfall.identityCheckDiff) < 0.01 ? 'BALANCED ✅' : 'DISCREPANCY ⚠️'}
            </span>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
              <span className="font-sans text-gray-600">Starting MRR:</span>
              <span className="font-semibold text-gray-900">{formatCurrency(waterfall.startingMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
              <span className="font-sans text-blue-700 font-medium">(+) New MRR (New logos signed):</span>
              <span className="font-semibold text-blue-700">+{formatCurrency(waterfall.newMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
              <span className="font-sans text-emerald-700 font-medium">(+) Expansion MRR (Seat upgrades):</span>
              <span className="font-semibold text-emerald-700">+{formatCurrency(waterfall.expansionMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
              <span className="font-sans text-red-700 font-medium">(-) Contraction MRR (Seat reductions):</span>
              <span className="font-semibold text-red-700">-{formatCurrency(waterfall.contractionMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
              <span className="font-sans text-red-700 font-medium">(-) Churn MRR (Terminated contracts):</span>
              <span className="font-semibold text-red-700">-{formatCurrency(waterfall.churnMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-blue-50/70 text-blue-900 font-bold border border-blue-100">
              <span className="font-sans">Calculated Ending MRR (OUT-05):</span>
              <span className="text-sm">{formatCurrency(waterfall.endingMrr, params.currencySymbol)}</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-900 text-white font-bold">
              <span className="font-sans">Annualized ARR Base (Ending MRR &times; 12):</span>
              <span className="text-sm">{formatCurrency(waterfall.arr, params.currencySymbol)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Engine 3 & Engine 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ENGINE 3: SaaS Retention Metrics Engine */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Engine 3 • SaaS Retention Metrics (GRR / NRR / Churn)
                </h3>
                <span className="text-[10px] text-gray-400 font-mono">
                  Cells $F$11, $F$12, $F$13 • Defense &amp; Expansion Metrics
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Gross Retention Rate (GRR):</span>
                <span className="font-mono font-bold text-gray-900">{formatPercent(saasKpis.grr)}</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                Formula: (Starting - Contraction - Churn) / Starting
              </div>
              <DataBar value={saasKpis.grr} max={1.0} label="Resilient Base" />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Net Retention Rate (NRR):</span>
                <span className="font-mono font-bold text-blue-700">{formatPercent(saasKpis.nrr)}</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                Formula: (Starting + Expansion - Contraction - Churn) / Starting
              </div>
              <DataBar value={saasKpis.nrr} max={1.2} label={`Benchmark: ${formatPercent(params.nrrBenchmark)}`} />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Logo Count Churn Rate:</span>
                <span className="font-mono font-bold text-gray-900">{formatPercent(saasKpis.logoChurnRate)}</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                Formula: Churned Logos ({saasKpis.churnedLogos}) / Starting Logos ({saasKpis.startingLogos})
              </div>
              <DataBar
                value={saasKpis.logoChurnRate}
                max={0.05}
                isNegative={saasKpis.isLogoChurnAtRisk}
                label={`Max Ceiling: ${formatPercent(params.logoChurnMax)}`}
              />
            </div>
          </div>
        </div>

        {/* ENGINE 4: Sales Funnel Efficiency Engine */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Engine 4 • Sales Funnel Conversion &amp; Forecast Variance
                </h3>
                <span className="text-[10px] text-gray-400 font-mono">
                  Cells $I$4, $I$5, $I$6 • 3-Stage Pipeline Analysis
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Demo Show Rate (Held / Booked):</span>
                <span className="font-mono font-bold text-gray-900">{formatPercent(funnel.demoHeldRate)}</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                {funnel.demosHeld} Held out of {funnel.demosBooked} Booked
              </div>
              <DataBar value={funnel.demoHeldRate} max={1.0} />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Demo-to-Won Win Rate (Won / Held):</span>
                <span className="font-mono font-bold text-emerald-800">{formatPercent(funnel.heldToCloseRate)}</span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                {funnel.closedWon} Won out of {funnel.demosHeld} Held (Benchmark: {formatPercent(params.demoCloseBenchmark)})
              </div>
              <DataBar value={funnel.heldToCloseRate} max={0.4} />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold text-gray-800">Closed-Won vs Forecast Deviation:</span>
                <span className="font-mono font-bold text-gray-700">
                  {formatPercent(funnel.forecastVariancePct, 1, true)}
                </span>
              </div>
              <div className="text-[11px] text-gray-500 mb-1.5 font-mono">
                Formula: (Closed Won {funnel.closedWon} - Forecast {funnel.forecastVal}) / Forecast {funnel.forecastVal}
              </div>
              <DataBar
                value={Math.abs(funnel.forecastVariancePct)}
                max={0.5}
                isNegative={funnel.forecastVariancePct < -0.1}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ENGINE 5: Dynamic Department Compensation Spill Table (M365 SORT(UNIQUE)) */}
      <div className="card-elevated p-6 border-0">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Engine 5 • Dynamic Department Roster &amp; Comp Package Allocation
              </h3>
              <span className="text-[10px] text-gray-400 font-mono">
                Formula: =SORT(UNIQUE(Table_Inp_Headcount[Department])) Spill Array
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-gray-700">Total Payroll Package: </span>
            <span className="text-xs font-mono font-bold text-gray-900">
              {formatCurrency(headcount.totalPayrollComp, params.currencySymbol)}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Department Dimension</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Headcount</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Base Salary</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Taxes &amp; Benefits</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Total Dept Comp</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Cost Per Head</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header text-right">Package Share %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono">
              {headcount.departments.map(dept => (
                <tr key={dept.department} className="hover:bg-gray-50/50">
                  <td className="py-3 px-3 font-sans font-semibold text-gray-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{dept.department}</span>
                  </td>
                  <td className="py-3 px-3 text-right">{dept.headcount}</td>
                  <td className="py-3 px-3 text-right">{formatCurrency(dept.baseSalary, params.currencySymbol)}</td>
                  <td className="py-3 px-3 text-right text-gray-600">{formatCurrency(dept.taxesBenefits, params.currencySymbol)}</td>
                  <td className="py-3 px-3 text-right font-bold text-gray-900">{formatCurrency(dept.totalComp, params.currencySymbol)}</td>
                  <td className="py-3 px-3 text-right text-blue-700">{formatCurrency(dept.costPerHead, params.currencySymbol)}</td>
                  <td className="py-3 px-3 text-right font-sans">
                    <div className="w-24 ml-auto">
                      <DataBar value={dept.shareOfTotalCompPct} max={0.5} label={formatPercent(dept.shareOfTotalCompPct)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 font-mono font-bold bg-gray-50/80" style={{ borderColor: 'var(--color-primary)' }}>
                <td className="py-3 px-3 font-sans">Company Total (All Departments)</td>
                <td className="py-3 px-3 text-right">{headcount.totalHeadcount}</td>
                <td className="py-3 px-3 text-right">{formatCurrency(headcount.totalBaseSalary, params.currencySymbol)}</td>
                <td className="py-3 px-3 text-right">{formatCurrency(headcount.totalTaxesBenefits, params.currencySymbol)}</td>
                <td className="py-3 px-3 text-right text-blue-900">{formatCurrency(headcount.totalPayrollComp, params.currencySymbol)}</td>
                <td className="py-3 px-3 text-right text-blue-900">{formatCurrency(headcount.avgCostPerHead, params.currencySymbol)} (Avg)</td>
                <td className="py-3 px-3 text-right font-sans">100.0%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
