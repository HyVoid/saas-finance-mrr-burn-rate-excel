import { AppState, DimensionDictionaries, GlobalParams } from '../types/finance';

export interface CalculatedFinancials {
  currentWeekRev: number;
  currentWeekExp: number;
  currentWeekNetBurn: number;
  mtdRev: number;
  mtdExp: number;
  mtdCumulativeBurn: number;
  burnTargetVariance: number;
  burnStatusFlag: 'ON TRACK 🟢' | 'OFF TRACK 🔴';
  burnPaceVsTimePct: number; // Burn % consumed minus time % passed
  burnPercentageOfTarget: number;
}

export interface CalculatedWaterfall {
  startingMrr: number;
  newMrr: number;
  expansionMrr: number;
  contractionMrr: number;
  churnMrr: number;
  netNewMrr: number;
  endingMrr: number;
  arr: number;
  identityCheckDiff: number; // Strict equality: start + new + exp - cont - churn - ending === 0
}

export interface CalculatedSaaSKpis {
  grr: number;
  nrr: number;
  logoChurnRate: number;
  startingLogos: number;
  churnedLogos: number;
  nrrVsBenchmark: number;
  logoChurnVsMax: number;
  isNrrAtRisk: boolean;
  isLogoChurnAtRisk: boolean;
}

export interface CalculatedFunnel {
  demosBooked: number;
  demosHeld: number;
  closedWon: number;
  forecastVal: number;
  demoHeldRate: number;
  heldToCloseRate: number;
  forecastVariancePct: number;
  isWinRateAtRisk: boolean;
}

export interface DeptCompSummary {
  department: string;
  headcount: number;
  baseSalary: number;
  taxesBenefits: number;
  totalComp: number;
  costPerHead: number;
  shareOfTotalCompPct: number;
}

export interface CalculatedHeadcount {
  departments: DeptCompSummary[];
  totalHeadcount: number;
  totalBaseSalary: number;
  totalTaxesBenefits: number;
  totalPayrollComp: number;
  avgCostPerHead: number;
}

export interface ModuleReadiness {
  name: string;
  rowCount: number;
  status: 'Updated ✅' | 'Pending ⏳';
  isUpdated: boolean;
}

export interface CostActionsSummary {
  inProgressSavings: number;
  realizedSavings: number;
  totalPotentialSavings: number;
  countInProgress: number;
  countRealized: number;
}

export interface EngineResults {
  financials: CalculatedFinancials;
  waterfall: CalculatedWaterfall;
  saasKpis: CalculatedSaaSKpis;
  funnel: CalculatedFunnel;
  headcount: CalculatedHeadcount;
  moduleReadiness: ModuleReadiness[];
  costActionsSummary: CostActionsSummary;
}

/**
 * Calculates all metrics strictly reflecting Excel workbook formulas and M365 dynamic arrays
 */
export function calculateAllMetrics(state: AppState): EngineResults {
  const { params, financeInputs, waterfallInputs, salesInputs, headcountInputs, costActions } = state;
  const currentWeek = params.reportDate;

  // Month extraction for MTD calculations: e.g. "2026-10"
  const currentMonthPrefix = currentWeek.slice(0, 7);

  // 1. ENGINE 1: Financials & Burn
  let currentWeekRev = 0;
  let currentWeekExp = 0;
  let mtdRev = 0;
  let mtdExp = 0;

  financeInputs.forEach(row => {
    // Current week match
    if (row.reportWeekEnding === currentWeek) {
      currentWeekRev += Number(row.accrualRevEst) || 0;
      currentWeekExp += Number(row.accrualExpEst) || 0;
    }
    // MTD match: same year-month and <= current week
    if (row.reportWeekEnding.startsWith(currentMonthPrefix) && row.reportWeekEnding <= currentWeek) {
      mtdRev += Number(row.accrualRevEst) || 0;
      mtdExp += Number(row.accrualExpEst) || 0;
    }
  });

  const currentWeekNetBurn = currentWeekExp - currentWeekRev;
  const mtdCumulativeBurn = mtdExp - mtdRev;
  const burnTargetVariance = mtdCumulativeBurn - params.burnTarget;
  const burnStatusFlag = mtdCumulativeBurn > params.burnTarget ? 'OFF TRACK 🔴' : 'ON TRACK 🟢';
  const burnPercentageOfTarget = params.burnTarget > 0 ? mtdCumulativeBurn / params.burnTarget : 0;
  const burnPaceVsTimePct = burnPercentageOfTarget - params.monthProgressPct;

  const financials: CalculatedFinancials = {
    currentWeekRev,
    currentWeekExp,
    currentWeekNetBurn,
    mtdRev,
    mtdExp,
    mtdCumulativeBurn,
    burnTargetVariance,
    burnStatusFlag,
    burnPaceVsTimePct,
    burnPercentageOfTarget
  };

  // 2. ENGINE 2: MRR Waterfall
  let startingMrr = 0;
  let newMrr = 0;
  let expansionMrr = 0;
  let contractionMrr = 0;
  let churnMrr = 0;
  let startingLogos = 0;
  let churnedLogos = 0;

  waterfallInputs.forEach(row => {
    if (row.reportWeekEnding === currentWeek) {
      const start = Number(row.startingMrr) || 0;
      const n = Number(row.newMrr) || 0;
      const exp = Number(row.expansionMrr) || 0;
      const cont = Number(row.contractionMrr) || 0;
      const ch = Number(row.churnMrr) || 0;

      startingMrr += start;
      newMrr += n;
      expansionMrr += exp;
      contractionMrr += cont;
      churnMrr += ch;

      if (start > 0) startingLogos++;
      if (ch > 0) churnedLogos++;
    }
  });

  const endingMrr = startingMrr + newMrr + expansionMrr - contractionMrr - churnMrr;
  const netNewMrr = endingMrr - startingMrr;
  const arr = endingMrr * 12;
  const identityCheckDiff = startingMrr + newMrr + expansionMrr - contractionMrr - churnMrr - endingMrr;

  const waterfall: CalculatedWaterfall = {
    startingMrr,
    newMrr,
    expansionMrr,
    contractionMrr,
    churnMrr,
    netNewMrr,
    endingMrr,
    arr,
    identityCheckDiff
  };

  // 3. ENGINE 3: SaaS KPIs
  const grr = startingMrr > 0 ? (startingMrr - contractionMrr - churnMrr) / startingMrr : 1.0;
  const nrr = startingMrr > 0 ? (startingMrr + expansionMrr - contractionMrr - churnMrr) / startingMrr : 1.0;
  const logoChurnRate = startingLogos > 0 ? churnedLogos / startingLogos : 0;
  const nrrVsBenchmark = nrr - params.nrrBenchmark;
  const logoChurnVsMax = logoChurnRate - params.logoChurnMax;
  const isNrrAtRisk = nrr < params.nrrBenchmark;
  const isLogoChurnAtRisk = logoChurnRate > params.logoChurnMax;

  const saasKpis: CalculatedSaaSKpis = {
    grr,
    nrr,
    logoChurnRate,
    startingLogos,
    churnedLogos,
    nrrVsBenchmark,
    logoChurnVsMax,
    isNrrAtRisk,
    isLogoChurnAtRisk
  };

  // 4. ENGINE 4: Funnel Efficiency
  let demosBooked = 0;
  let demosHeld = 0;
  let closedWon = 0;
  let forecastVal = 0;

  salesInputs.forEach(row => {
    if (row.reportWeekEnding === currentWeek) {
      demosBooked += Number(row.demosBookedCount) || 0;
      demosHeld += Number(row.demosHeldCount) || 0;
      closedWon += Number(row.closedWonCount) || 0;
      forecastVal += Number(row.forecastPipelineVal) || 0;
    }
  });

  const demoHeldRate = demosBooked > 0 ? demosHeld / demosBooked : 0;
  const heldToCloseRate = demosHeld > 0 ? closedWon / demosHeld : 0;
  const forecastVariancePct = forecastVal > 0 ? (closedWon - forecastVal) / forecastVal : 0;
  const isWinRateAtRisk = heldToCloseRate < params.demoCloseBenchmark;

  const funnel: CalculatedFunnel = {
    demosBooked,
    demosHeld,
    closedWon,
    forecastVal,
    demoHeldRate,
    heldToCloseRate,
    forecastVariancePct,
    isWinRateAtRisk
  };

  // 5. ENGINE 5: Dynamic Headcount & Department Compensation (SORT(UNIQUE))
  const currentWeekHeadcountRows = headcountInputs.filter(r => r.reportWeekEnding === currentWeek);
  const deptMap: Record<string, { count: number; base: number; taxes: number }> = {};

  currentWeekHeadcountRows.forEach(row => {
    const dept = row.department.trim() || 'General';
    if (!deptMap[dept]) {
      deptMap[dept] = { count: 0, base: 0, taxes: 0 };
    }
    deptMap[dept].count += 1;
    deptMap[dept].base += Number(row.baseSalaryPaid) || 0;
    deptMap[dept].taxes += Number(row.taxesBenefitsPaid) || 0;
  });

  const sortedDepts = Object.keys(deptMap).sort();
  let totalHeadcount = 0;
  let totalBaseSalary = 0;
  let totalTaxesBenefits = 0;

  sortedDepts.forEach(d => {
    totalHeadcount += deptMap[d].count;
    totalBaseSalary += deptMap[d].base;
    totalTaxesBenefits += deptMap[d].taxes;
  });

  const totalPayrollComp = totalBaseSalary + totalTaxesBenefits;
  const avgCostPerHead = totalHeadcount > 0 ? totalPayrollComp / totalHeadcount : 0;

  const departmentSummaries: DeptCompSummary[] = sortedDepts.map(d => {
    const data = deptMap[d];
    const deptTotal = data.base + data.taxes;
    return {
      department: d,
      headcount: data.count,
      baseSalary: data.base,
      taxesBenefits: data.taxes,
      totalComp: deptTotal,
      costPerHead: data.count > 0 ? deptTotal / data.count : 0,
      shareOfTotalCompPct: totalPayrollComp > 0 ? deptTotal / totalPayrollComp : 0
    };
  });

  const headcount: CalculatedHeadcount = {
    departments: departmentSummaries,
    totalHeadcount,
    totalBaseSalary,
    totalTaxesBenefits,
    totalPayrollComp,
    avgCostPerHead
  };

  // 6. Readiness of 5 core modules for weekly update checking
  const finCount = financeInputs.filter(r => r.reportWeekEnding === currentWeek).length;
  const wfCount = waterfallInputs.filter(r => r.reportWeekEnding === currentWeek).length;
  const salesCount = salesInputs.filter(r => r.reportWeekEnding === currentWeek).length;
  const hcCount = headcountInputs.filter(r => r.reportWeekEnding === currentWeek).length;
  const actionsCount = costActions.length;

  const moduleReadiness: ModuleReadiness[] = [
    {
      name: 'Financial Burn & Accrual (QuickBooks/Stripe)',
      rowCount: finCount,
      status: finCount > 0 ? 'Updated ✅' : 'Pending ⏳',
      isUpdated: finCount > 0
    },
    {
      name: 'Customer MRR Waterfall (PandaDoc/Stripe)',
      rowCount: wfCount,
      status: wfCount > 0 ? 'Updated ✅' : 'Pending ⏳',
      isUpdated: wfCount > 0
    },
    {
      name: 'SaaS Retention & Churn Health (Stripe/CRM)',
      rowCount: wfCount, // derived from customer waterfall accounts
      status: wfCount > 0 ? 'Updated ✅' : 'Pending ⏳',
      isUpdated: wfCount > 0
    },
    {
      name: 'Sales Pipeline & Conversion (Salesforce)',
      rowCount: salesCount,
      status: salesCount > 0 ? 'Updated ✅' : 'Pending ⏳',
      isUpdated: salesCount > 0
    },
    {
      name: 'Headcount & Payroll Package (Gusto/Deel)',
      rowCount: hcCount,
      status: hcCount > 0 ? 'Updated ✅' : 'Pending ⏳',
      isUpdated: hcCount > 0
    }
  ];

  // 7. Cost Actions summary
  let inProgressSavings = 0;
  let realizedSavings = 0;
  let totalPotentialSavings = 0;
  let countInProgress = 0;
  let countRealized = 0;

  costActions.forEach(act => {
    const est = Number(act.monthlySavingsEst) || 0;
    const real = Number(act.actualSavingsRealized) || 0;
    totalPotentialSavings += est;
    if (act.status === 'Realized') {
      realizedSavings += real || est;
      countRealized++;
    } else {
      inProgressSavings += est;
      countInProgress++;
    }
  });

  const costActionsSummary: CostActionsSummary = {
    inProgressSavings,
    realizedSavings,
    totalPotentialSavings,
    countInProgress,
    countRealized
  };

  return {
    financials,
    waterfall,
    saasKpis,
    funnel,
    headcount,
    moduleReadiness,
    costActionsSummary
  };
}

/**
 * Format helpers
 */
export function formatCurrency(amount: number, symbol: string = '$', decimals: number = 0): string {
  const isNegative = amount < 0;
  const absVal = Math.abs(amount);
  const formatted = absVal.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return isNegative ? `-${symbol}${formatted}` : `${symbol}${formatted}`;
}

export function formatPercent(rate: number, decimals: number = 1, showSign: boolean = false): string {
  const pct = rate * 100;
  const formatted = pct.toFixed(decimals) + '%';
  if (showSign && pct > 0) {
    return '+' + formatted;
  }
  return formatted;
}

export function formatInteger(val: number): string {
  return Math.round(val).toLocaleString('en-US');
}
