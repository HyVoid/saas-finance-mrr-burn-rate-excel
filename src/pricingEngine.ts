import {
  ParamConfig,
  EngineResult,
  BatchQuoteRow,
  BenchmarkRow,
  ValidationRow,
  WorkbookState,
} from './types';

export const DEFAULT_PARAM_CONFIG: ParamConfig = {
  currencySymbol: '$',
  minOrderFee: 35.0,
  baseSetupFee: 28.0,
  areaCostRate: 0.0185,
  areaElasticity: 0.92,
  runCostRate: 12.5,
  compTargetFactor: 0.9,
  weightWizard: 0.6,
  weightConsolidated: 0.4,
  maxVarianceTol: 0.08,
  tier1Max: 100,
  tier1Disc: 0.0,
  tier2Max: 500,
  tier2Disc: 0.12,
  tier3Max: 1000,
  tier3Disc: 0.24,
  tier4Max: 5000,
  tier4Disc: 0.38,
  tier5Max: 10000,
  tier5Disc: 0.48,
  tier6Label: '10001+',
  tier6Disc: 0.56,
};

export const DEFAULT_BATCH_QUOTES: BatchQuoteRow[] = [
  { id: 'Q2026-001', width: 2.0, height: 3.0, quantity: 100 },
  { id: 'Q2026-002', width: 2.0, height: 3.0, quantity: 105 },
  { id: 'Q2026-003', width: 3.0, height: 4.0, quantity: 500 },
  { id: 'Q2026-004', width: 3.0, height: 4.0, quantity: 510 },
  { id: 'Q2026-005', width: 4.0, height: 6.0, quantity: 1000 },
  { id: 'Q2026-006', width: 4.0, height: 6.0, quantity: 2500 },
  { id: 'Q2026-007', width: 1.5, height: 1.5, quantity: 5000 },
  { id: 'Q2026-008', width: 5.0, height: 8.0, quantity: 5050 },
  { id: 'Q2026-009', width: 6.0, height: 9.0, quantity: 10000 },
  { id: 'Q2026-010', width: 8.0, height: 10.0, quantity: 15000 },
  { id: 'Q2026-011', width: 0.75, height: 1.25, quantity: 50 },
  { id: 'Q2026-012', width: 12.0, height: 12.0, quantity: 25000 },
];

export const DEFAULT_BENCHMARK_DATA: BenchmarkRow[] = [
  { id: 'BM-001', width: 2.0, height: 2.0, quantity: 100, compName: 'Wizard Labels', compPrice: 41.50 },
  { id: 'BM-002', width: 2.0, height: 2.0, quantity: 500, compName: 'Consolidated Label', compPrice: 68.00 },
  { id: 'BM-003', width: 2.0, height: 3.0, quantity: 1000, compName: 'Wizard Labels', compPrice: 118.50 },
  { id: 'BM-004', width: 3.0, height: 4.0, quantity: 1000, compName: 'Consolidated Label', compPrice: 192.00 },
  { id: 'BM-005', width: 3.0, height: 4.0, quantity: 2500, compName: 'Wizard Labels', compPrice: 365.00 },
  { id: 'BM-006', width: 4.0, height: 6.0, quantity: 500, compName: 'Wizard Labels', compPrice: 185.00 },
  { id: 'BM-007', width: 4.0, height: 6.0, quantity: 2500, compName: 'Consolidated Label', compPrice: 645.00 },
  { id: 'BM-008', width: 4.0, height: 6.0, quantity: 5000, compName: 'Wizard Labels', compPrice: 1210.00 },
  { id: 'BM-009', width: 1.0, height: 2.0, quantity: 5000, compName: 'Consolidated Label', compPrice: 195.00 },
  { id: 'BM-010', width: 5.0, height: 7.0, quantity: 10000, compName: 'Wizard Labels', compPrice: 2890.00 },
  { id: 'BM-011', width: 6.0, height: 8.0, quantity: 10000, compName: 'Consolidated Label', compPrice: 3520.00 },
  { id: 'BM-012', width: 8.0, height: 12.0, quantity: 15000, compName: 'Wizard Labels', compPrice: 9150.00 },
];

export function generateDefaultValidationCases(): ValidationRow[] {
  const dimensions = [
    { w: 0.5, h: 0.5 },
    { w: 1.0, h: 1.0 },
    { w: 2.0, h: 3.0 },
    { w: 3.0, h: 4.0 },
    { w: 4.0, h: 6.0 },
    { w: 12.0, h: 12.0 },
  ];
  const quantities = [100, 101, 500, 501, 1000, 5000];
  const rows: ValidationRow[] = [];
  let idx = 1;
  for (const dim of dimensions) {
    for (const q of quantities) {
      rows.push({
        id: `TC-${String(idx).padStart(2, '0')}`,
        width: dim.w,
        height: dim.h,
        quantity: q,
      });
      idx++;
    }
  }
  return rows;
}

export const DEFAULT_WORKBOOK_STATE: WorkbookState = {
  calcFront: {
    width: 4.0,
    height: 6.0,
    quantity: 2500,
  },
  paramConfig: DEFAULT_PARAM_CONFIG,
  batchQuotes: DEFAULT_BATCH_QUOTES,
  benchmarkData: DEFAULT_BENCHMARK_DATA,
  validationCases: generateDefaultValidationCases(),
  lastSaved: new Date().toISOString(),
};

/**
 * Core Parametric Competitive Pricing Engine Formula (Exact 1:1 implementation of Excel LET/XLOOKUP/MAP logic)
 */
export function calculateEngineQuote(
  width: number,
  height: number,
  quantity: number,
  params: ParamConfig
): EngineResult {
  const w = Math.max(0, Number(width) || 0);
  const h = Math.max(0, Number(height) || 0);
  const q = Math.max(0, Math.round(Number(quantity) || 0));

  if (w === 0 || h === 0 || q <= 0) {
    return {
      area: 0,
      tierLabel: 'Invalid Quantity',
      tierIndex: 0,
      discountRate: 0,
      fixedCost: 0,
      variableCost: 0,
      engineeringCost: 0,
      calibratedTotal: 0,
      prevMaxQty: 0,
      prevBoundaryPrice: 0,
      monotonicProtectedTotal: 0,
      pricePerLabel: 0,
      marketBenchmarkRef: 0,
      competitorDeltaPct: 0,
      isSmoothedOrMin: 'NORMAL',
    };
  }

  const area = Number((w * h).toFixed(4));

  // Tier matching (XLOOKUP match_mode = 1: exact or next larger item)
  const tierLimits = [
    params.tier1Max,
    params.tier2Max,
    params.tier3Max,
    params.tier4Max,
    params.tier5Max,
  ];
  const tierDiscounts = [
    params.tier1Disc,
    params.tier2Disc,
    params.tier3Disc,
    params.tier4Disc,
    params.tier5Disc,
    params.tier6Disc,
  ];
  const tierLabels = [
    `Tier 1 (1-${params.tier1Max.toLocaleString()})`,
    `Tier 2 (${(params.tier1Max + 1).toLocaleString()}-${params.tier2Max.toLocaleString()})`,
    `Tier 3 (${(params.tier2Max + 1).toLocaleString()}-${params.tier3Max.toLocaleString()})`,
    `Tier 4 (${(params.tier3Max + 1).toLocaleString()}-${params.tier4Max.toLocaleString()})`,
    `Tier 5 (${(params.tier4Max + 1).toLocaleString()}-${params.tier5Max.toLocaleString()})`,
    `Tier 6 (${params.tier6Label})`,
  ];

  let tierIdx = 5; // default Tier 6 (0-based 5)
  for (let i = 0; i < tierLimits.length; i++) {
    if (q <= tierLimits[i]) {
      tierIdx = i;
      break;
    }
  }

  const discountRate = tierDiscounts[tierIdx];
  const tierLabel = tierLabels[tierIdx];

  // Engineering Cost: setup_fee + (area_rate * (area ^ area_elast) + run_rate / 1000) * q
  const fixedCost = params.baseSetupFee;
  const unitVarCost =
    params.areaCostRate * Math.pow(area, params.areaElasticity) +
    params.runCostRate / 1000;
  const rawVariableCost = unitVarCost * q;
  const rawEngCost = fixedCost + rawVariableCost;
  const engineeringCost = Number(rawEngCost.toFixed(2));
  const variableCost = Number((engineeringCost - fixedCost).toFixed(2));

  // Calibrated Price before monotonic boundary smoothing
  const rawCalibrated =
    rawEngCost * (1 - discountRate) * params.compTargetFactor;
  const calibratedTotal = Number(rawCalibrated.toFixed(2));

  // Monotonic Boundary Smoothing (Iterative across all preceding tier boundaries)
  // Ensures for any Q2 > Q1, P_final(Q2) >= P_final(Q1)
  let prevMaxQty = 0;
  let prevBoundaryPrice = 0;
  if (tierIdx > 0) {
    prevMaxQty = tierLimits[tierIdx - 1];
    // Evaluate cumulative protected floor across preceding tier peaks
    let runningFloor = 0;
    for (let t = 0; t < tierIdx; t++) {
      const peakQ = tierLimits[t];
      const peakDisc = tierDiscounts[t];
      const peakEng = fixedCost + unitVarCost * peakQ;
      const peakCalib = peakEng * (1 - peakDisc) * params.compTargetFactor;
      runningFloor = Math.max(runningFloor, peakCalib);
    }
    prevBoundaryPrice = Number(runningFloor.toFixed(2));
  }

  const maxRaw = Math.max(params.minOrderFee, rawCalibrated, prevBoundaryPrice);
  const monotonicProtectedTotal = Number(maxRaw.toFixed(2));

  let isSmoothedOrMin: 'NORMAL' | 'MIN_PROTECTED' | 'BOUNDARY_SMOOTHED' = 'NORMAL';
  if (monotonicProtectedTotal > calibratedTotal) {
    if (params.minOrderFee >= prevBoundaryPrice && monotonicProtectedTotal === Number(params.minOrderFee.toFixed(2))) {
      isSmoothedOrMin = 'MIN_PROTECTED';
    } else {
      isSmoothedOrMin = 'BOUNDARY_SMOOTHED';
    }
  }

  const pricePerLabel = Number((monotonicProtectedTotal / q).toFixed(4));
  const marketBenchmarkRef =
    params.compTargetFactor === 0
      ? 0
      : Number((monotonicProtectedTotal / params.compTargetFactor).toFixed(2));
  const competitorDeltaPct =
    marketBenchmarkRef === 0
      ? 0
      : Number(
          (
            (monotonicProtectedTotal - marketBenchmarkRef) /
            marketBenchmarkRef
          ).toFixed(4)
        );

  return {
    area,
    tierLabel,
    tierIndex: tierIdx + 1,
    discountRate,
    fixedCost: Number(fixedCost.toFixed(2)),
    variableCost,
    engineeringCost,
    calibratedTotal,
    prevMaxQty,
    prevBoundaryPrice,
    monotonicProtectedTotal,
    pricePerLabel,
    marketBenchmarkRef,
    competitorDeltaPct,
    isSmoothedOrMin,
  };
}

export function formatCurrency(
  val: number,
  symbol: string,
  decimals = 2,
  showPlus = false
): string {
  const isNeg = val < 0;
  const absVal = Math.abs(val);
  const formatted = absVal.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  if (isNeg) return `-${symbol}${formatted}`;
  if (showPlus && val > 0) return `+${symbol}${formatted}`;
  return `${symbol}${formatted}`;
}

export function formatPct(val: number, decimals = 1, showPlus = false): string {
  const pct = val * 100;
  const isNeg = pct < -0.0001;
  const absVal = Math.abs(pct).toFixed(decimals);
  if (isNeg) return `-${absVal}%`;
  if (showPlus && pct > 0.0001) return `+${absVal}%`;
  return `${absVal}%`;
}
