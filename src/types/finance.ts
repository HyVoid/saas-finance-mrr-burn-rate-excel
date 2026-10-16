export interface GlobalParams {
  currencySymbol: string;          // e.g. '$'
  varianceThreshold: number;       // e.g. 0.05 (5%)
  burnTarget: number;              // e.g. 150000.00
  reportDate: string;              // e.g. '2026-10-09'
  monthProgressPct: number;        // e.g. 0.45 (45%)
  nrrBenchmark: number;            // e.g. 1.05 (105%)
  logoChurnMax: number;            // e.g. 0.02 (2%)
  demoCloseBenchmark: number;      // e.g. 0.20 (20%)
}

export interface DimensionDictionaries {
  sourceSystems: string[];
  mrrMovementTypes: string[];
  departments: string[];
  actionStatuses: string[];
  expenseCategories: string[];
  moduleNames: string[];
}

export interface FinanceInputRow {
  id: string;
  reportWeekEnding: string;
  sourceSystem: string;
  batchTimestamp: string;
  glCategory: string;
  accrualRevEst: number;
  accrualExpEst: number;
}

export interface WaterfallInputRow {
  id: string;
  reportWeekEnding: string;
  sourceSystem: string;
  customerId: string;
  contractStartDate: string;
  startingMrr: number;
  newMrr: number;
  expansionMrr: number;
  contractionMrr: number;
  churnMrr: number;
}

export interface SalesInputRow {
  id: string;
  reportWeekEnding: string;
  sourceSystem: string;
  demosBookedCount: number;
  demosHeldCount: number;
  closedWonCount: number;
  forecastPipelineVal: number;
}

export interface HeadcountInputRow {
  id: string;
  reportWeekEnding: string;
  sourceSystem: string;
  employeeId: string;
  department: string;
  hireDate: string;
  terminationDate: string;
  baseSalaryPaid: number;
  taxesBenefitsPaid: number;
}

export interface ExceptionLogRow {
  id: string;
  reportWeekEnding: string;
  moduleName: string;
  itemName: string;
  primaryAmount: number;
  benchmarkAmount: number;
  variancePct: number;
  isFlagged: boolean;
  explanation: string;
  auditApproval: 'Approved' | 'Action Needed' | 'Pending Review';
}

export interface CostActionRow {
  id: string;
  actionId: string;
  issueDesc: string;
  category: string;
  proposedReduction: string;
  monthlySavingsEst: number;
  owner: string;
  targetCloseDate: string;
  status: 'Proposed' | 'Approved' | 'In Progress' | 'Realized';
  actualSavingsRealized: number;
}

export interface EstimateActualRow {
  id: string;
  fiscalPeriod: string;
  closedActualRev: number;
  modelEstRev: number;
  closedActualExp: number;
  modelEstExp: number;
  closedActualBurn: number;
  estimateAccuracyVariance: number;
  accuracyScore: number;
  rootCause: string;
  tuningAction: string;
}

export interface AppState {
  params: GlobalParams;
  dictionaries: DimensionDictionaries;
  financeInputs: FinanceInputRow[];
  waterfallInputs: WaterfallInputRow[];
  salesInputs: SalesInputRow[];
  headcountInputs: HeadcountInputRow[];
  exceptionLogs: ExceptionLogRow[];
  costActions: CostActionRow[];
  estimateActuals: EstimateActualRow[];
  lastSaved: string;
}
