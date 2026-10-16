export interface ParamConfig {
  currencySymbol: string;       // C4: '$'
  minOrderFee: number;          // C5: 35.00
  baseSetupFee: number;         // C6: 28.00
  areaCostRate: number;         // C7: 0.0185
  areaElasticity: number;       // C8: 0.9200
  runCostRate: number;          // C9: 12.50
  compTargetFactor: number;     // C12: 0.9000 (90.0%)
  weightWizard: number;         // C13: 0.6000 (60.0%)
  weightConsolidated: number;   // C14: 0.4000 (40.0%)
  maxVarianceTol: number;       // C15: 0.0800 (8.0%)
  tier1Max: number;             // B19: 100
  tier1Disc: number;            // C19: 0.00
  tier2Max: number;             // B20: 500
  tier2Disc: number;            // C20: 0.12
  tier3Max: number;             // B21: 1000
  tier3Disc: number;            // C21: 0.24
  tier4Max: number;             // B22: 5000
  tier4Disc: number;            // C22: 0.38
  tier5Max: number;             // B23: 10000
  tier5Disc: number;            // C23: 0.48
  tier6Label: string;           // B24: '10001+'
  tier6Disc: number;            // C24: 0.56
}

export interface CalcFrontInput {
  width: number;                // C5: 0.5 - 24.0 in
  height: number;               // C6: 0.5 - 12.0 in
  quantity: number;             // C7: 1 - 1,000,000 pcs
}

export interface BatchQuoteRow {
  id: string;                   // A5#: Batch_Quote_ID
  width: number;                // B5#: Input_Width
  height: number;               // C5#: Input_Height
  quantity: number;             // D5#: Input_Quantity
}

export interface BenchmarkRow {
  id: string;                   // A5#: Bench_Record_ID
  width: number;                // B5#: Bench_Width
  height: number;               // C5#: Bench_Height
  quantity: number;             // D5#: Bench_Qty
  compName: 'Wizard Labels' | 'Consolidated Label'; // E5#: Bench_Comp_Name
  compPrice: number;            // F5#: Bench_Comp_Price
}

export interface ValidationRow {
  id: string;                   // A6#: Val_Test_ID (TC-01 to TC-36)
  width: number;                // B6#: Val_Width
  height: number;               // C6#: Val_Height
  quantity: number;             // E6#: Val_Quantity
}

export interface EngineResult {
  area: number;                 // Calc_Label_Area
  tierLabel: string;            // Calc_Quantity_Tier
  tierIndex: number;            // 1 to 6
  discountRate: number;         // Calc_Tier_Discount_Applied
  fixedCost: number;            // Calc_Raw_Fixed_Cost
  variableCost: number;         // Calc_Raw_Variable_Cost
  engineeringCost: number;      // Calc_Engineering_Cost
  calibratedTotal: number;      // Calc_Comp_Calibrated_Total
  prevMaxQty: number;
  prevBoundaryPrice: number;
  monotonicProtectedTotal: number; // Calc_Monotonic_Protected_Total
  pricePerLabel: number;        // Calc_Price_Per_Label
  marketBenchmarkRef: number;   // Calc_Market_Benchmark_Ref
  competitorDeltaPct: number;   // Calc_Competitor_Delta_Pct
  isSmoothedOrMin: 'NORMAL' | 'MIN_PROTECTED' | 'BOUNDARY_SMOOTHED';
}

export interface WorkbookState {
  calcFront: CalcFrontInput;
  paramConfig: ParamConfig;
  batchQuotes: BatchQuoteRow[];
  benchmarkData: BenchmarkRow[];
  validationCases: ValidationRow[];
  lastSaved: string;
}
