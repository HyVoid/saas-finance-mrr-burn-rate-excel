import { AppState } from '../types/finance';

export const INITIAL_STATE: AppState = {
  params: {
    currencySymbol: '$',
    varianceThreshold: 0.05, // 5%
    burnTarget: 150000.0,    // $150,000 monthly burn target
    reportDate: '2026-10-09',
    monthProgressPct: 0.45,  // 45% of working month elapsed
    nrrBenchmark: 1.05,      // 105% benchmark
    logoChurnMax: 0.02,      // 2.0% logo churn max ceiling
    demoCloseBenchmark: 0.20 // 20.0% win rate benchmark
  },
  dictionaries: {
    sourceSystems: ['QuickBooks', 'Salesforce', 'Stripe', 'PandaDoc', 'Gusto', 'Deel'],
    mrrMovementTypes: ['New', 'Expansion', 'Contraction', 'Churn', 'Existing'],
    departments: ['R&D', 'Sales', 'Marketing', 'Customer Success', 'G&A', 'Executive'],
    actionStatuses: ['Proposed', 'Approved', 'In Progress', 'Realized'],
    expenseCategories: [
      'Cloud Infrastructure & Compute',
      'Software & SaaS Licenses',
      'Marketing & Paid Acquisition',
      'Professional & Legal Fees',
      'Salaries & Benefits',
      'Office & Travel'
    ],
    moduleNames: [
      'Financial Burn & Accrual',
      'Customer MRR Waterfall',
      'SaaS Retention & Churn',
      'Sales Pipeline & Funnel',
      'Headcount & Compensation'
    ]
  },
  financeInputs: [
    // Week Ending 2026-10-09 (Current Week)
    {
      id: 'fin-01',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Subscription Revenue',
      accrualRevEst: 54200,
      accrualExpEst: 0
    },
    {
      id: 'fin-02',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Cloud Infrastructure & Compute',
      accrualRevEst: 0,
      accrualExpEst: 28400
    },
    {
      id: 'fin-03',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Software & SaaS Licenses',
      accrualRevEst: 0,
      accrualExpEst: 11800
    },
    {
      id: 'fin-04',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Marketing & Paid Acquisition',
      accrualRevEst: 0,
      accrualExpEst: 16500
    },
    {
      id: 'fin-05',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Professional & Legal Fees',
      accrualRevEst: 0,
      accrualExpEst: 6200
    },
    {
      id: 'fin-06',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Salaries & Benefits',
      accrualRevEst: 0,
      accrualExpEst: 43500
    },
    {
      id: 'fin-07',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-09 17:30',
      glCategory: 'Office & Travel',
      accrualRevEst: 0,
      accrualExpEst: 2900
    },
    // Week Ending 2026-10-02 (Prior Week of Current Month)
    {
      id: 'fin-08',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'Stripe',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Subscription Revenue',
      accrualRevEst: 51800,
      accrualExpEst: 0
    },
    {
      id: 'fin-09',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Cloud Infrastructure & Compute',
      accrualRevEst: 0,
      accrualExpEst: 22100
    },
    {
      id: 'fin-10',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Software & SaaS Licenses',
      accrualRevEst: 0,
      accrualExpEst: 10400
    },
    {
      id: 'fin-11',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Marketing & Paid Acquisition',
      accrualRevEst: 0,
      accrualExpEst: 15200
    },
    {
      id: 'fin-12',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Professional & Legal Fees',
      accrualRevEst: 0,
      accrualExpEst: 5000
    },
    {
      id: 'fin-13',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Salaries & Benefits',
      accrualRevEst: 0,
      accrualExpEst: 42000
    },
    {
      id: 'fin-14',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'QuickBooks',
      batchTimestamp: '2026-10-02 18:00',
      glCategory: 'Office & Travel',
      accrualRevEst: 0,
      accrualExpEst: 2400
    }
  ],
  waterfallInputs: [
    {
      id: 'wf-01',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'PandaDoc',
      customerId: 'CUST-8401 Summit Risk Partners',
      contractStartDate: '2026-10-05',
      startingMrr: 0,
      newMrr: 5200,
      expansionMrr: 0,
      contractionMrr: 0,
      churnMrr: 0
    },
    {
      id: 'wf-02',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'PandaDoc',
      customerId: 'CUST-8402 Apex InsurTech Agency',
      contractStartDate: '2026-10-06',
      startingMrr: 0,
      newMrr: 4100,
      expansionMrr: 0,
      contractionMrr: 0,
      churnMrr: 0
    },
    {
      id: 'wf-03',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      customerId: 'CUST-8109 Harbor Mutual Brokers',
      contractStartDate: '2025-06-15',
      startingMrr: 8500,
      newMrr: 0,
      expansionMrr: 2800,
      contractionMrr: 0,
      churnMrr: 0
    },
    {
      id: 'wf-04',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      customerId: 'CUST-8214 Vanguard Life Associates',
      contractStartDate: '2025-11-01',
      startingMrr: 6200,
      newMrr: 0,
      expansionMrr: 1400,
      contractionMrr: 0,
      churnMrr: 0
    },
    {
      id: 'wf-05',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      customerId: 'CUST-8302 Coastal Shield Agencies',
      contractStartDate: '2026-02-10',
      startingMrr: 4800,
      newMrr: 0,
      expansionMrr: 0,
      contractionMrr: 1200,
      churnMrr: 0
    },
    {
      id: 'wf-06',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      customerId: 'CUST-8045 Liberty Horizon Underwriters',
      contractStartDate: '2025-03-20',
      startingMrr: 2400,
      newMrr: 0,
      expansionMrr: 0,
      contractionMrr: 0,
      churnMrr: 2400
    },
    {
      id: 'wf-07',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Stripe',
      customerId: 'CUST-POOL Existing Core Portfolio (124 Agencies)',
      contractStartDate: '2025-01-01',
      startingMrr: 188100,
      newMrr: 0,
      expansionMrr: 0,
      contractionMrr: 0,
      churnMrr: 0
    }
  ],
  salesInputs: [
    {
      id: 'sal-01',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Salesforce',
      demosBookedCount: 38,
      demosHeldCount: 31,
      closedWonCount: 7,
      forecastPipelineVal: 8
    },
    {
      id: 'sal-02',
      reportWeekEnding: '2026-10-02',
      sourceSystem: 'Salesforce',
      demosBookedCount: 35,
      demosHeldCount: 29,
      closedWonCount: 6,
      forecastPipelineVal: 6
    }
  ],
  headcountInputs: [
    {
      id: 'hc-01',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-101 (Elena Rostova)',
      department: 'R&D',
      hireDate: '2024-03-01',
      terminationDate: '',
      baseSalaryPaid: 3200,
      taxesBenefitsPaid: 650
    },
    {
      id: 'hc-02',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-102 (Marcus Thorne)',
      department: 'R&D',
      hireDate: '2024-05-15',
      terminationDate: '',
      baseSalaryPaid: 3000,
      taxesBenefitsPaid: 600
    },
    {
      id: 'hc-03',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Deel',
      employeeId: 'EMP-103 (Chen Wei)',
      department: 'R&D',
      hireDate: '2024-09-01',
      terminationDate: '',
      baseSalaryPaid: 2800,
      taxesBenefitsPaid: 200
    },
    {
      id: 'hc-04',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-201 (Sarah Jenkins)',
      department: 'Sales',
      hireDate: '2024-02-10',
      terminationDate: '',
      baseSalaryPaid: 2900,
      taxesBenefitsPaid: 580
    },
    {
      id: 'hc-05',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-202 (David Kim)',
      department: 'Sales',
      hireDate: '2025-01-15',
      terminationDate: '',
      baseSalaryPaid: 2600,
      taxesBenefitsPaid: 520
    },
    {
      id: 'hc-06',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-301 (Rachel Adams)',
      department: 'Marketing',
      hireDate: '2024-06-01',
      terminationDate: '',
      baseSalaryPaid: 2500,
      taxesBenefitsPaid: 500
    },
    {
      id: 'hc-07',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-401 (James O Connor)',
      department: 'Customer Success',
      hireDate: '2024-04-18',
      terminationDate: '',
      baseSalaryPaid: 2400,
      taxesBenefitsPaid: 480
    },
    {
      id: 'hc-08',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-402 (Maya Patel)',
      department: 'Customer Success',
      hireDate: '2025-08-01',
      terminationDate: '',
      baseSalaryPaid: 2200,
      taxesBenefitsPaid: 440
    },
    {
      id: 'hc-09',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-501 (Robert Taylor)',
      department: 'G&A',
      hireDate: '2024-01-10',
      terminationDate: '',
      baseSalaryPaid: 2600,
      taxesBenefitsPaid: 520
    },
    {
      id: 'hc-10',
      reportWeekEnding: '2026-10-09',
      sourceSystem: 'Gusto',
      employeeId: 'EMP-601 (Jonathan Vance - CEO)',
      department: 'Executive',
      hireDate: '2023-11-01',
      terminationDate: '',
      baseSalaryPaid: 4200,
      taxesBenefitsPaid: 840
    }
  ],
  exceptionLogs: [
    {
      id: 'exp-01',
      reportWeekEnding: '2026-10-09',
      moduleName: 'Financial Burn & Accrual',
      itemName: 'Cloud Infrastructure & Compute Spike',
      primaryAmount: 28400,
      benchmarkAmount: 22000,
      variancePct: 0.2909, // 29.1%
      isFlagged: true,
      explanation: 'Quarterly AWS OpenSearch and vector embedding instance auto-scaling spike due to batch policy document sync for 2 newly onboarded enterprise brokerages.',
      auditApproval: 'Action Needed'
    },
    {
      id: 'exp-02',
      reportWeekEnding: '2026-10-09',
      moduleName: 'Sales Pipeline & Funnel',
      itemName: 'Closed Won Deals vs Forecast Pace',
      primaryAmount: 7,
      benchmarkAmount: 8,
      variancePct: 0.125, // 12.5%
      isFlagged: true,
      explanation: '1 enterprise policy agency contract slipped past Friday 5pm cutoff due to mutual NDA addendum review; signed on following Monday morning.',
      auditApproval: 'Approved'
    },
    {
      id: 'exp-03',
      reportWeekEnding: '2026-10-09',
      moduleName: 'Customer MRR Waterfall',
      itemName: 'Contraction in Coastal Shield Tier',
      primaryAmount: 1200,
      benchmarkAmount: 500,
      variancePct: 1.40, // 140%
      isFlagged: true,
      explanation: 'Coastal Shield merged two regional branch operations, reducing 15 active advisor seats while retaining core agency license.',
      auditApproval: 'Approved'
    }
  ],
  costActions: [
    {
      id: 'act-01',
      actionId: 'ACT-001',
      issueDesc: 'Over-provisioned AWS m6i.4xlarge compute instances & idle dev database clusters',
      category: 'Cloud Infrastructure & Compute',
      proposedReduction: 'Purchase 1-yr Compute Savings Plan and downscale non-prod Kubernetes clusters during weekends',
      monthlySavingsEst: 5400,
      owner: 'Elena Rostova (VP R&D)',
      targetCloseDate: '2026-10-23',
      status: 'In Progress',
      actualSavingsRealized: 0
    },
    {
      id: 'act-02',
      actionId: 'ACT-002',
      issueDesc: 'Redundant standalone Zoom enterprise licenses alongside Google Meet suite',
      category: 'Software & SaaS Licenses',
      proposedReduction: 'Standardize company-wide on Google Workspace Meet; retire 35 legacy Zoom Pro add-ons',
      monthlySavingsEst: 1200,
      owner: 'Robert Taylor (Head of G&A)',
      targetCloseDate: '2026-10-05',
      status: 'Realized',
      actualSavingsRealized: 1200
    },
    {
      id: 'act-03',
      actionId: 'ACT-003',
      issueDesc: 'Dual B2B data enrichment subscription overlap (Apollo.io vs ZoomInfo seats)',
      category: 'Marketing & Paid Acquisition',
      proposedReduction: 'Consolidate onto single preferred vendor API contract upon month-end renewal',
      monthlySavingsEst: 3800,
      owner: 'Rachel Adams (Marketing Dir)',
      targetCloseDate: '2026-10-31',
      status: 'In Progress',
      actualSavingsRealized: 0
    },
    {
      id: 'act-04',
      actionId: 'ACT-004',
      issueDesc: 'High CAC offline insurance conference private dinner sponsorships',
      category: 'Marketing & Paid Acquisition',
      proposedReduction: 'Replace luxury hospitality suite with targeted executive breakfast roundtables',
      monthlySavingsEst: 4500,
      owner: 'Sarah Jenkins (VP Sales)',
      targetCloseDate: '2026-11-15',
      status: 'Approved',
      actualSavingsRealized: 0
    }
  ],
  estimateActuals: [
    {
      id: 'ea-01',
      fiscalPeriod: '2026-08',
      closedActualRev: 198400,
      modelEstRev: 197200,
      closedActualExp: 342100,
      modelEstExp: 340500,
      closedActualBurn: 143700,
      estimateAccuracyVariance: 400,
      accuracyScore: 0.9972,
      rootCause: 'Stripe merchant interchange rate float variation and late vendor invoice for SOC2 audit installment',
      tuningAction: 'Incorporate 1.5% merchant transaction fee accrual reserve into weekly Stripe revenue'
    },
    {
      id: 'ea-02',
      fiscalPeriod: '2026-09',
      closedActualRev: 209800,
      modelEstRev: 208500,
      closedActualExp: 356400,
      modelEstExp: 354800,
      closedActualBurn: 146600,
      estimateAccuracyVariance: 300,
      accuracyScore: 0.9980,
      rootCause: 'Minor timing difference on international contractor currency conversions via Deel',
      tuningAction: 'Applied dynamic FX buffer based on Friday closing rates for Deel payroll batch'
    }
  ],
  lastSaved: '2026-10-11T18:56:23Z'
};
