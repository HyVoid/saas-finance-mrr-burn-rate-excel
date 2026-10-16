# Weekly SaaS Finance Control & Variance Analyzer

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: Decision Support](https://img.shields.io/badge/Tool-Decision%20Support-0F766E)

**Monitor SaaS cash burn, recurring revenue, customer retention, sales conversion, and personnel costs before month-end close — using a free browser version or an Excel-based financial control workbook, with no installation required for the browser experience.**

> **Start with the free browser version.**
>
> No signup. No installation. Free to use.
>
> - [🌐 Open in Browser](#quick-start-workflow) — use the browser-based version when a live demo URL is not yet configured.
> - [📥 Get the Excel Version](#who-this-is-for) — use the workbook for recurring weekly reviews, offline analysis, and retained financial records. Commercial download and purchase links should be added when published.
>
> The Excel version is designed for repeatable operational use. If it is sold commercially, the applicable product listing should clearly state its price and refund terms.

## What It Helps You Track

A monthly accounting close is too slow to serve as the only source of management information for a venture-backed B2B SaaS company. Weekly decisions require a consistent view of financial performance, recurring revenue, customer behavior, sales execution, and staffing costs.

This tool brings those operating signals into one decision-support workflow.

- **Cash burn against budget:** See month-to-date net burn, the approved monthly target, the absolute variance, and whether spending is running ahead of the reporting period.
- **MRR and ARR movement:** Separate new business, customer expansion, contraction, and churn to understand what is driving recurring revenue.
- **Customer retention quality:** Review gross revenue retention (GRR), net revenue retention (NRR), and customer logo churn to distinguish expansion-led growth from deterioration in the existing customer base.
- **Sales funnel execution:** Compare booked demonstrations, completed demonstrations, closed-won customers, and forecast performance to identify where conversion is breaking down.
- **Fully loaded personnel costs:** Compare salary and employer taxes or benefits across departments to make staffing-related spending visible.
- **Data exceptions and cost-reduction actions:** Surface material discrepancies, document explanations, assign owners, and track proposed savings through implementation.

The objective is not to produce another dashboard full of numbers. It is to make the next management decision easier to justify, investigate, and execute.

## Quick Start Workflow

The operating model follows a simple cycle: configure the reporting period, import existing data, review the results, and refresh the workbook on a recurring schedule.

### 1. Set the reporting parameters

Open the dedicated settings area and establish the reporting cutoff date, reporting currency, monthly burn target, variance threshold, and relevant SaaS performance benchmarks.

The reference configuration uses a 5% variance threshold, a monthly net burn target of $150,000, an NRR benchmark of 105%, a monthly logo churn ceiling of 2%, and a demonstration-to-close benchmark of 20%. These are example starting assumptions from the implementation design, not universal industry standards. Replace them with approved company targets.

### 2. Import the existing operating data

Export the relevant snapshots from the systems already in use, or copy and paste data from existing spreadsheets into the designated input tables.

The reference workflow covers:

- QuickBooks and Stripe for financial and billing information.
- Salesforce and PandaDoc for customer, contract, and sales information.
- Gusto and Deel for employee and compensation information.

Keep the reporting cutoff date, source-system identity, and extraction timestamp associated with each batch. The workbook is designed around standardized input tables, but source exports must still match the documented field structure. Unmapped data should not be treated as automatically compatible.

### 3. Review the results

Open the executive dashboard and KPI analysis view. Review the burn position, MRR movements, retention indicators, sales funnel, personnel costs, data exceptions, and outstanding cost-reduction actions.

Investigate flagged discrepancies before treating the resulting figures as decision-ready. A calculated result is not automatically a verified result.

### 4. Refresh on a recurring schedule

Repeat the import and review process every week. After the external accounting team publishes the official monthly or quarterly figures, enter the closed actuals into the reconciliation workflow and compare them with the earlier operating estimates.

The purpose of this recurring process is to preserve continuity between weekly management decisions and formal accounting results, rather than rebuilding a new analysis every reporting cycle.

**Set the reporting parameters. Import the existing data. Review the analysis. Refresh when needed.**

## Why I Built This

A venture-backed SaaS company can have accurate financial statements and still make poor weekly operating decisions.

The problem is often a mismatch between the timing of accounting information and the timing of management decisions. An external accounting team may close the books monthly or quarterly, while the CEO needs to know every Monday whether spending is accelerating, whether customer retention is deteriorating, and whether the current sales pipeline can support the operating plan.

A bank balance alone cannot answer those questions. Neither can a revenue dashboard, a payroll report, or an isolated sales forecast.

Consider a company with a monthly net burn target of $150,000. If 45% of the month has elapsed but the operating estimate already indicates that 60% of the monthly target has been consumed, a simple month-to-date total does not communicate the full operational risk. The spending trajectory is running ahead of time. Management may need to review discretionary expenses, hiring plans, or infrastructure commitments before the formal close confirms the result.

A similar problem appears in recurring revenue. An increase in total MRR can conceal substantial churn if expansion from a few existing customers offsets losses elsewhere. Looking only at net growth can therefore produce a misleading assessment of customer health.

I designed this tool as a **productized reasoning framework**, not a one-off spreadsheet. It standardizes the sequence from source-data intake to validation, performance analysis, exception review, cost action, and eventual reconciliation with official accounting results.

The framework does not replace accounting judgment or management accountability. It makes assumptions, discrepancies, and operational consequences easier to see before decisions become more expensive to reverse.

## Common SaaS Finance Problems This Solves

| Problem | Without This Tool | With This Tool |
|---|---|---|
| Delayed financial close | Management waits for formal statements before investigating spending deterioration. | Weekly accrual-based estimates provide an earlier operating signal, with later reconciliation against closed actuals. |
| Burn-rate overshoot | A monthly total is reviewed without considering how quickly the budget is being consumed. | Month-to-date burn is compared with the budget target and elapsed-month progress. |
| Misleading recurring-revenue growth | New sales and expansion obscure contraction or churn in the existing customer base. | MRR movements are separated into new, expansion, contraction, and churn components. |
| Hidden retention deterioration | Net revenue growth is interpreted as proof that the customer base is healthy. | GRR, NRR, and logo churn provide distinct views of revenue retention and customer losses. |
| Sales forecast uncertainty | Booked demos, completed demos, closed-won results, and forecasts are reviewed in separate reports. | Funnel conversion and forecast variance help identify where execution diverges from expectations. |
| Unowned cost discrepancies | Differences between systems remain unexplained, while potential savings lack accountable owners. | Material variances enter an exception workflow; cost actions carry an owner, estimated monthly savings, and execution status. |

These controls are intended to reduce decision delays and prevent inconsistent source data from being mistaken for a reliable operating picture. They do not guarantee that an estimate is correct; they make its assumptions and limitations easier to inspect.

## Who This Is For

This tool is designed for venture-backed B2B SaaS companies that need a repeatable weekly finance review before formal accounting close, particularly companies with financial and operational data distributed across billing, accounting, CRM, contract, and payroll systems.

Typical users include:

- **CEOs and executive teams** who need an early warning on burn, recurring revenue, and operating performance.
- **Finance analysts and fractional CFOs** who consolidate weekly data, investigate variances, and reconcile estimates with official results.
- **Sales and customer-success leaders** who need to distinguish acquisition performance from retention deterioration.
- **Department owners** who must explain material cost changes and take responsibility for approved cost-reduction actions.

It is not designed to replace a general ledger, perform statutory accounting, guarantee real-time synchronization with source systems, or substitute for a full enterprise planning platform. The reference implementation uses periodic data snapshots and requires users to review source mappings and assumptions.

**No spreadsheet expertise is needed to start with the browser version.** Open the published web version and begin reviewing the available workflow. The Excel version is better suited to users who need a retained workbook, repeatable reporting, and direct control over their working data.

## About

I build lightweight trackers and decision-support tools for situations where too many moving parts make it difficult to hold the whole problem in view. The central question is simple: **What information needs to be in one place to make the next decision confidently?**

The Weekly SaaS Finance Control & Variance Analyzer applies that approach to recurring financial and operational reviews. It connects the weekly operating estimate to the management decision, the resulting action, and the later check against formal accounting results.

The goal is not to automate judgment away. It is to give judgment a more consistent, inspectable basis.
## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The workbook follows a controlled data flow:

**Configuration → Standardized inputs → Calculation and reconciliation → KPI analysis → Executive dashboard and corrective actions → Closed-actual calibration.**

The reference design contains seven worksheets.

| Worksheet | Responsibility | Primary outputs |
|---|---|---|
| `01_Executive_Dashboard` | Executive decision view | Burn status, ARR, MRR, retention, data readiness, material exceptions, and cost actions |
| `02_Settings_Params` | Central configuration | Reporting date, currency, burn target, variance threshold, performance benchmarks, and dimension dictionaries |
| `03_Weekly_Data_Input` | Source-data intake | Four standardized input tables for financials, MRR movements, sales activity, and headcount |
| `04_Calculation_Engine` | Calculation and reconciliation | Burn, MRR, ARR, retention, funnel metrics, departmental compensation, and exception flags |
| `05_KPI_Analysis` | Operational analysis | Five analytical views covering financials, recurring revenue, retention, sales, and personnel costs |
| `06_Exceptions_CostActions` | Exception governance | Variance explanations, review status, cost-reduction owners, expected savings, and action status |
| `07_Estimate_vs_Actual` | Post-close calibration | Estimated versus closed revenue, expense, net burn, and historical estimation accuracy |

#### Input tables

The four principal input tables are:

- `Table_Inp_Finance`: `Report_Week_Ending`, `Source_System_Name`, `Batch_Timestamp`, `GL_Category`, `Accrual_Rev_Est`, and `Accrual_Exp_Est`.
- `Table_Inp_Waterfall`: `Customer_ID`, `Contract_Start_Date`, `Starting_MRR`, `New_MRR_Amount`, `Expansion_MRR_Amount`, `Contraction_MRR_Amount`, and `Churn_MRR_Amount`, alongside reporting-period and source metadata.
- `Table_Inp_Sales`: `Demos_Booked_Count`, `Demos_Held_Count`, `Closed_Won_Count`, and `Forecast_Pipeline_Val`, alongside reporting-period and source metadata.
- `Table_Inp_Headcount`: `Employee_ID`, `Department_Name`, `Hire_Date`, `Termination_Date`, `Base_Salary_Paid`, and `Taxes_Benefits_Paid`, alongside reporting-period and source metadata.

The design also references `Table_Exceptions_Log`, `Table_Cost_Actions`, and a reconciliation table named `Table_Reconcile`.

Excel Tables are used so that newly appended records can be included in structured-reference calculations without manually copying formulas down each column.

#### Data flow and control boundaries

| Stage | Input or dependency | Required control |
|---|---|---|
| Configuration | Reporting date, currency, targets, thresholds | Centralized parameters and validated dimension values |
| Data intake | Periodic exports from source systems | Source identity, extraction timestamp, consistent reporting cutoff |
| Calculation | Standardized tables and named parameters | Period alignment, arithmetic checks, guarded ratios, cross-source reconciliation |
| Analysis | Calculated operating metrics | Actual-versus-target comparisons and explicit exception flags |
| Action management | Exceptions and management decisions | Written explanations, named owners, estimated savings, execution status |
| Calibration | Official closed financial results | Period-aligned comparison with earlier estimates and documented adjustments |

The executive dashboard is a presentation layer, not an input surface. The calculation engine is intended to be protected and hidden during routine use. Configuration, raw input, analytical output, and management actions remain separate so that a reviewer can distinguish what was imported, what was calculated, and what was decided.

### Three Traps That Catch Even Experienced SaaS Finance Teams

#### Trap 1: Treating month-to-date burn as a static number

**Decision:** Continue spending at the current pace because month-to-date burn remains below the monthly limit.

**Faulty assumption:** Being below the monthly budget means spending is under control.

Suppose the monthly net burn target is $150,000. At 45% of the month elapsed, estimated net burn has already reached $90,000.

| Measure | Value |
|---|---:|
| Monthly burn target | $150,000 |
| Elapsed-month progress | 45% |
| Month-to-date estimated net burn | $90,000 |
| Budget consumed | 60% |
| Burn progress less time progress | +15 percentage points |

The estimate has consumed 60% of the monthly allowance while only 45% of the month has elapsed.

The mistake is confusing **remaining budget** with **spending trajectory**. The company has not necessarily breached its monthly target, but it is consuming the allowance faster than the calendar progresses.

**Corrected approach:** Review both absolute budget variance and burn progress relative to elapsed-month progress. Investigate unusual expenses, hiring commitments, infrastructure usage, and other material spending changes before deciding whether to intervene.

<details>
<summary>Formula reference: burn trajectory and budget variance</summary>

```excel
=MTD_Cumulative_Burn / Param_Burn_Target
```

```excel
=MTD_Cumulative_Burn - Param_Burn_Target
```

```excel
=(MTD_Cumulative_Burn / Param_Burn_Target)
 - Param_Month_Progress_Pct
```

Interpretation:

- A positive budget variance indicates burn above the target.
- A positive trajectory variance indicates that the proportion of budget consumed exceeds the configured elapsed-month proportion.
- The trajectory comparison is an early-warning signal, not a complete cash forecast. It assumes the configured progress percentage is a reasonable comparison basis.

</details>

#### Trap 2: Mistaking MRR growth for healthy retention

**Decision:** Report strong customer health because ending MRR is higher than starting MRR.

**Faulty assumption:** Net recurring-revenue growth means the existing customer base is stable.

Consider an illustrative reporting period with the following movements:

| MRR component | Amount |
|---|---:|
| Starting MRR | $100,000 |
| New MRR | $12,000 |
| Expansion MRR | $8,000 |
| Contraction MRR | $5,000 |
| Churn MRR | $10,000 |
| Ending MRR | $105,000 |

Ending MRR increases by $5,000, or 5%. That appears positive when viewed in isolation.

However, contraction and churn together remove $15,000 from the starting base. The resulting gross revenue retention is 85%, while net revenue retention is 93% under the movement assumptions above.

The distinction matters because new customer acquisition can compensate for losses without repairing the underlying retention problem.

**Corrected approach:** Examine GRR and NRR alongside the MRR waterfall. GRR isolates contraction and churn in the starting customer base. NRR additionally accounts for expansion within that base. New MRR should be reported separately rather than used to disguise retention deterioration.

<details>
<summary>Formula reference: MRR waterfall and retention</summary>

```excel
Ending_MRR =
    Starting_MRR
    + New_MRR_Amount
    + Expansion_MRR_Amount
    - Contraction_MRR_Amount
    - Churn_MRR_Amount
```

```excel
GRR =
    (Starting_MRR - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

```excel
NRR =
    (Starting_MRR + Expansion_MRR_Amount
     - Contraction_MRR_Amount - Churn_MRR_Amount)
    / Starting_MRR
```

For the illustrative example:

- GRR = ($100,000 − $5,000 − $10,000) / $100,000 = 85%.
- NRR = ($100,000 + $8,000 − $5,000 − $10,000) / $100,000 = 93%.

These are simplified period-level illustrations. The implementation must define consistent customer cohorts, movement timing, and reporting periods before these rates are used for formal performance reporting.

</details>

#### Trap 3: Treating a cross-system discrepancy as a harmless reporting difference

**Decision:** Accept a reported revenue figure because it appears plausible and the dashboard calculates without errors.

**Faulty assumption:** A successful calculation proves that the source data agrees.

Suppose the billing system reports $100,000 while the accounting estimate reports $94,000 for the same comparison basis. The difference is $6,000, equivalent to approximately 6.38% of the $94,000 comparison amount.

That discrepancy exceeds a 5% threshold. It may reflect timing, refunds, classification, incomplete imports, duplicate records, or an incorrect mapping. The percentage alone does not establish the cause.

**Corrected approach:** Confirm that both figures cover the same reporting period, currency, transaction population, and accounting basis. Then document the explanation, review the result, and escalate unresolved differences before the figures are used for management decisions.

<details>
<summary>Formula reference: cross-source variance</summary>

```excel
=IFERROR(
    ABS([@Primary_Amount]-[@Crosscheck_Amount])
    / ABS([@Crosscheck_Amount]),
    0
)
```

```excel
=IF(
    [@Variance_Pct] > Param_Variance_Threshold,
    "FLAGGED",
    "PASS"
)
```

The comparison denominator must be defined consistently. If the cross-check amount is zero or missing, the result should not silently become a verified zero variance. Production implementations should distinguish zero-denominator and missing-reference cases from a genuine pass.

</details>

### Example Scenario

The following worked example illustrates how a weekly management review can combine the reference metrics. The figures are illustrative, not company results.

Assume a B2B SaaS company serving insurance agencies has a monthly net burn target of $150,000. At the reporting cutoff, the workbook shows:

| Indicator | Illustrative result | Initial interpretation |
|---|---:|---|
| Month-to-date net burn | $90,000 | 60% of the monthly target consumed |
| Elapsed-month progress | 45% | Burn is running ahead of elapsed time |
| Starting MRR | $100,000 | Reference recurring-revenue base |
| New MRR | $12,000 | New customer contribution |
| Expansion MRR | $8,000 | Existing-customer growth |
| Contraction MRR | $5,000 | Downgrade-related loss |
| Churn MRR | $10,000 | Lost recurring revenue |
| Ending MRR | $105,000 | Net increase of $5,000 |
| GRR | 85% | Significant contraction and churn |
| NRR | 93% | Existing-customer revenue declined net of expansion |
| Demo bookings | 100 | Funnel entry volume |
| Demos held | 70 | 70% held rate |
| Closed-won customers | 14 | 20% held-to-close rate |

The first management question is whether the current burn trajectory is consistent with the approved spending plan. The second is whether the MRR increase is supported by healthy retention or depends heavily on new business. The third is whether the sales funnel is converting enough completed demonstrations into customers to support future growth.

These metrics do not automatically establish a cause. They identify where management should investigate. The analyst should validate the source snapshots, check for material discrepancies, and determine whether the observed changes reflect timing, operational performance, or data-quality issues.

The resulting decision may involve a targeted spending review, a customer-retention investigation, a sales-conversion review, or a combination of these actions. Each material issue should have an owner and a documented follow-up rather than ending at a dashboard observation.

### Formula Reference

The formulas below represent the principal calculations in the reference design. They assume the named parameters and structured tables have been created, the reporting period is consistent, and the source data has passed the relevant checks.

<details>
<summary>Financial calculations: weekly and month-to-date net burn</summary>

**Purpose:** Estimate the operating burn position before formal accounting close.

Current reporting-period net burn:

```excel
=LET(
    current_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],
            Param_Report_Date
        ),
    current_exp-current_rev
)
```

Month-to-date net burn:

```excel
=LET(
    month_start,
        EOMONTH(Param_Report_Date,-1)+1,
    mtd_rev,
        SUMIFS(
            Table_Inp_Finance[Accrual_Rev_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp,
        SUMIFS(
            Table_Inp_Finance[Accrual_Exp_Est],
            Table_Inp_Finance[Report_Week_Ending],">="&month_start,
            Table_Inp_Finance[Report_Week_Ending],"<="&Param_Report_Date
        ),
    mtd_exp-mtd_rev
)
```

**Implementation note:** The month-to-date expression assumes each included reporting-period amount represents an additive amount for that period. If source exports contain cumulative snapshots, they must be transformed or deduplicated before aggregation to avoid double counting.

</details>

<details>
<summary>Recurring revenue: ending MRR and ARR</summary>

**Purpose:** Reconcile recurring-revenue movements and derive an annualized run-rate indicator.

```excel
=LET(
    start_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Starting_MRR],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    new_mrr,
        SUMIFS(
            Table_Inp_Waterfall[New_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    exp_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Expansion_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    con_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Contraction_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    churn_mrr,
        SUMIFS(
            Table_Inp_Waterfall[Churn_MRR_Amount],
            Table_Inp_Waterfall[Report_Week_Ending],
            Param_Report_Date
        ),
    start_mrr+new_mrr+exp_mrr-con_mrr-churn_mrr
)
```

```excel
=Ending_MRR*12
```

ARR here is an annualized MRR run rate, not recognized annual revenue or a revenue forecast.

</details>

<details>
<summary>Retention and customer churn</summary>

**Purpose:** Separate revenue retention from customer-count attrition.

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR+Expansion_MRR_Amount
     -Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Starting_MRR=0,
    NA(),
    (Starting_MRR-Contraction_MRR_Amount-Churn_MRR_Amount)
    /Starting_MRR
)
```

```excel
=IF(
    Opening_Customer_Count=0,
    NA(),
    Churned_Customer_Count/Opening_Customer_Count
)
```

The reference design sometimes uses zero as the fallback when a denominator is zero. For management reporting, an explicit unavailable state is generally safer because zero can be mistaken for a measured result. The production workbook should apply one consistent policy and display it clearly.

</details>

<details>
<summary>Sales funnel and forecast variance</summary>

**Purpose:** Identify conversion loss between demonstration booking, attendance, and closed-won outcomes.

```excel
=IF(
    Demos_Booked_Count=0,
    NA(),
    Demos_Held_Count/Demos_Booked_Count
)
```

```excel
=IF(
    Demos_Held_Count=0,
    NA(),
    Closed_Won_Count/Demos_Held_Count
)
```

```excel
=IF(
    Forecast_Pipeline_Val=0,
    NA(),
    (Closed_Won_Count-Forecast_Pipeline_Val)
    /Forecast_Pipeline_Val
)
```

The final expression is appropriate only when the forecast field and actual field use the same unit. If the forecast represents monetary pipeline value but actuals represent customer counts, they must not be compared directly. The source design should resolve whether `Forecast_Pipeline_Val` represents expected wins or a monetary value before implementation.

</details>

<details>
<summary>Personnel costs and departmental analysis</summary>

**Purpose:** Aggregate salary and employer costs by department, then calculate the department's share of total compensation.

```excel
=SUMIFS(
    Table_Inp_Headcount[Base_Salary_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
+
SUMIFS(
    Table_Inp_Headcount[Taxes_Benefits_Paid],
    Table_Inp_Headcount[Department_Name],
    [@Department_Name],
    Table_Inp_Headcount[Report_Week_Ending],
    Param_Report_Date
)
```

Dynamic department list:

```excel
=SORT(
    UNIQUE(
        FILTER(
            Table_Inp_Headcount[Department_Name],
            Table_Inp_Headcount[Department_Name]<>""
        )
    )
)
```

Department compensation share:

```excel
=IF(
    Total_Compensation=0,
    NA(),
    Department_Total_Comp/Total_Compensation
)
```

Compensation cost and headcount should use compatible period definitions. Dividing a partial-period payroll amount by a point-in-time headcount may produce a misleading average unless the reporting basis is documented.

</details>

<details>
<summary>Dynamic exception lists and cost-action summaries</summary>

**Purpose:** Keep material discrepancies and unresolved cost actions visible without manually filtering each reporting cycle.

Filter records above the configured threshold:

```excel
=FILTER(
    Table_Exceptions_Log,
    Table_Exceptions_Log[Variance_Pct]>Param_Variance_Threshold,
    "No material exceptions"
)
```

Summarize estimated monthly savings for actions not yet marked realized:

```excel
=SUMIFS(
    Table_Cost_Actions[Monthly_Savings_Est],
    Table_Cost_Actions[Action_Status],
    "<>Realized"
)
```

The savings total is a pipeline estimate, not realized savings. Reports should distinguish proposed, approved, in-progress, and realized actions, and should avoid treating an unverified estimate as a confirmed cash benefit.

</details>

### Validation Rules

The workbook is only as reliable as the data and definitions feeding it. The following controls describe the expected production behavior.

| Field or control | Validation rule | Expected error behavior |
|---|---|---|
| Reporting cutoff date | Use a valid date consistent with the intended reporting period | Flag missing or mismatched periods |
| Source system | Select a recognized source-system name | Reject or flag unmapped values |
| Extraction timestamp | Preserve the source snapshot's extraction time | Flag missing lineage metadata |
| Currency and amounts | Use a consistent currency and numeric representation within each comparison | Flag incompatible currencies or malformed values |
| Finance records | Distinguish period activity from cumulative snapshots | Prevent duplicate period aggregation |
| MRR movements | Enter contraction and churn as non-negative loss magnitudes under the documented convention | Flag negative or inconsistent movement inputs |
| MRR reconciliation | Check starting MRR plus new and expansion less contraction and churn against ending MRR | Flag unexplained reconciliation differences |
| Retention ratios | Require a valid, positive opening MRR denominator | Show unavailable rather than implying a verified zero |
| Sales funnel | Held demonstrations should not exceed bookings for comparable cohorts; closed-won counts need a consistent attribution basis | Flag impossible counts and inconsistent periods |
| Forecast comparison | Forecast and actual must use the same unit and measurement basis | Block or flag incompatible comparisons |
| Employee records | Validate identifiers, department mappings, hire dates, and termination dates | Flag duplicate identities and invalid lifecycle dates |
| Compensation | Validate numeric amounts, period alignment, and consistent currency | Flag missing or inconsistent cost data |
| Cross-source variance | Compare like-for-like periods, populations, and measurement bases | Route material differences for explanation |
| Variance threshold | Reference the configured threshold instead of embedding a fixed percentage in formulas | Recalculate dependent flags when the parameter changes |
| Cost-action ownership | Require a named owner and documented status for tracked actions | Flag incomplete action records |
| Savings reporting | Separate expected savings from realized savings | Prevent pipeline estimates from being reported as confirmed results |
| Closed-actual reconciliation | Compare official results with estimates for the same period and accounting basis | Record absolute and relative differences for review |
| Dynamic arrays | Keep spill ranges clear and preserve expected table structure | Resolve `#SPILL!` conditions before relying on affected outputs |
| Source lineage | Retain source identity, reporting period, and batch timestamp | Treat missing lineage as a review exception |

</details>

## The Business Logic & Methodology

The tool is built around a practical management principle: **financial monitoring is useful only when it changes what management can see, investigate, and act on before the next formal accounting close.**

Instead of treating finance, customer retention, sales, and personnel costs as isolated reporting functions, the framework connects them into one recurring decision process. Each method addresses a specific failure in the way operating information is commonly reviewed.

- **Period-based financial monitoring:** Weekly accrual-based estimates provide an earlier view of net burn than a delayed month-end close. Comparing the amount consumed with both the monthly target and elapsed-month progress helps distinguish a manageable balance from an unsustainable spending trajectory.

- **Recurring-revenue movement analysis:** Separating new business, expansion, contraction, and churn prevents net MRR growth from concealing deterioration among existing customers. Management can distinguish acquisition performance from retention quality and prioritize the relevant corrective action.

- **Conversion and retention diagnostics:** GRR, NRR, logo churn, demonstration attendance, and held-to-close conversion measure different stages of business performance. Together, they help determine whether a weakness is concentrated in customer retention, lead quality, sales execution, or the underlying customer base.

- **Threshold-based exception management:** Material differences between comparable source records are flagged for investigation. The threshold is a review trigger, not proof of an error. Written explanations and approval status make unresolved discrepancies visible instead of allowing them to disappear inside aggregated totals.

- **Action ownership and post-close calibration:** Cost-reduction proposals are assigned owners, deadlines, estimated savings, and execution states. Once official financial results become available, earlier estimates are compared with closed actuals so that recurring estimation errors can be identified and future reporting improved.

The resulting workflow connects operating evidence to a decision, the decision to an accountable action, and the action to a later review. It does not eliminate uncertainty or replace professional judgment. It creates a repeatable way to manage uncertainty before delayed information becomes an operational liability.

## Operating Procedure

The reference operating schedule is designed to deliver the management review by Monday end of day, Eastern Time.

| Target deadline | Activity | Responsible role | Completion evidence |
|---|---|---|---|
| Monday, 10:00 AM | Update the reporting cutoff date and month-progress assumptions | Finance analyst | Correct reporting period and approved parameters |
| Monday, 11:30 AM | Import financial, customer, sales, and payroll snapshots | Finance analyst or data operator | Source records appended with appropriate dates and metadata |
| Monday, 2:00 PM | Check module readiness and investigate material discrepancies | Finance analyst | Missing inputs resolved and significant variances explained |
| Monday, 4:30 PM | Review KPIs and update cost-reduction actions | Finance analyst and department owners | Owners, savings estimates, deadlines, and statuses recorded |
| Monday, 6:00 PM | Review and distribute the executive dashboard | CEO, finance lead, or designated reporting owner | Final management view shared or exported |

These deadlines are reference operating targets, not automated scheduling guarantees. Organizations should adapt them to source-system availability, internal approval requirements, and the actual reporting calendar.

### Roles and Responsibilities

- **Finance analyst:** Maintains reporting parameters, imports data snapshots, investigates discrepancies, documents variance explanations, and records official closed actuals.
- **Department leaders:** Review relevant KPIs, explain material changes, and own approved cost-reduction actions.
- **CEO and executive committee:** Review the burn position, challenge material exceptions, and decide which corrective actions require intervention.
- **External accounting team:** Supplies the official monthly or quarterly results used to calibrate earlier operating estimates.

### Data Maintenance

- Enter source records only in the designated input tables.
- Preserve reporting dates, source identifiers, and extraction timestamps.
- Add records at the end of the relevant Excel Table so structured references can expand normally.
- Update dimension dictionaries before introducing new source systems or department names.
- Avoid manually editing protected calculation cells, table headers, named ranges, or dynamic-array spill areas.
- Reconcile estimates against official financial results using consistent reporting periods and accounting definitions.

## Compatibility and Operating Limits

| Area | Reference requirement | Operational consideration |
|---|---|---|
| Excel version | Microsoft 365 recommended; Excel 2021 or later as a reference minimum | Dynamic-array functions such as `LET`, `FILTER`, `UNIQUE`, `SORT`, `HSTACK`, and `VSTACK` may not work in older Excel versions. Confirm function availability in the target environment. |
| Data volume | Recommended limit of approximately 50,000 rows per input table | Larger tables may increase calculation latency. The reference design recommends archiving closed historical records when volumes grow substantially. |
| Collaboration | OneDrive for Business or SharePoint | Preserve table names, headers, named ranges, and calculation structures during collaborative editing. |
| Google Sheets | Migration is possible with formula adaptation | Excel structured references such as `Table[Field]` must be translated. Formula and dynamic-array behavior should be retested after migration. |
| Source integration | Periodic snapshots from existing business systems | Direct API synchronization is not established by this workbook design. Imported data requires source mapping and validation. |

The browser version and Excel version are distinct delivery formats. The availability of a published HTML application, live demo, downloadable workbook, or purchase page depends on the actual deployment and distribution links configured by the project owner.

## Troubleshooting

<details>
<summary>Dynamic arrays return #SPILL!</summary>

**Likely cause:** Existing values, merged cells, or other obstructions occupy the expected spill range.

**Resolution:**

1. Select the cell containing the error.
2. Inspect the spill range indicated by Excel.
3. Remove unintended content or resolve merged-cell conflicts within that range.
4. Recalculate and confirm that the resulting array covers the expected area.

Do not clear calculation cells indiscriminately. Verify that any content being removed is not a required input or formula.

</details>

<details>
<summary>New data does not change the dashboard</summary>

**Likely causes:** The reporting cutoff date was not updated, imported records use inconsistent dates, data was pasted outside the intended table, or Excel calculation is set to manual.

**Resolution:**

1. Check the reporting date in `02_Settings_Params`.
2. Confirm that the newly imported records belong to that reporting period.
3. Verify that the rows are inside the relevant Excel Table.
4. Check Excel's calculation mode and recalculate if necessary.
5. Confirm that the affected dashboard metrics reference the expected input table and period.

</details>

<details>
<summary>Changing the variance threshold has no expected effect</summary>

**Likely cause:** The percentage was entered using the wrong scale, or the relevant formula does not reference the intended named parameter.

For example, 8% should be entered as `8%` or `0.08`, not `8`.

**Resolution:** Check the stored parameter value, the named range `Param_Variance_Threshold`, and the formulas that drive the exception flags. Confirm that the comparison uses the intended threshold consistently.

</details>

<details>
<summary>Currency symbols are incorrect</summary>

**Likely cause:** The global currency display parameter has not been updated, or some output cells use a fixed currency format.

**Resolution:** Update `Param_Currency_Symbol` in the configuration area and inspect the relevant display formulas and number formats.

**Important:** Changing a currency symbol does not convert monetary amounts between currencies. Actual currency conversion requires exchange-rate data and an explicit conversion methodology.

</details>

<details>
<summary>Formulas return #N/A, #VALUE!, or unexpected zero values</summary>

**Likely causes:** Missing source matches, text in numeric columns, inconsistent identifiers, invalid dates, or zero denominators.

**Resolution:**

1. Check the source rows and confirm that numeric fields contain numbers rather than text.
2. Check that customer and employee identifiers match across relevant records.
3. Confirm that the reporting period and source mappings are consistent.
4. Inspect denominator guards and error-handling logic.
5. Distinguish a genuine zero from missing data or a calculation that cannot be performed.

An error-handling formula should not convert every invalid calculation into a plausible-looking zero. Where data is incomplete or a denominator is unavailable, the reporting layer should make that limitation visible.

</details>

## Implementation Scope and Roadmap

### Reference implementation deliverables

The design specifies:

1. Seven coordinated worksheets for configuration, data intake, calculations, analysis, management reporting, action tracking, and estimate calibration.
2. Four standardized source-input tables covering finance, MRR movements, sales activity, and personnel costs.
3. Centralized configuration parameters and dimension dictionaries.
4. A calculation framework for burn, MRR, ARR, retention, sales conversion, and compensation costs.
5. Material-variance review and cost-reduction action tracking.
6. A post-close process for comparing operating estimates with official accounting results.
7. A repeatable weekly operating procedure and troubleshooting guide.

These are implementation specifications. The actual completeness, correctness, and behavior of a delivered workbook or browser application should be verified against the corresponding artifacts and test cases before publication.

### Future development

- **Weeks 1–4:** Run the Excel workflow through repeated weekly reporting cycles. Validate KPI definitions, period alignment, source mappings, and management review procedures.
- **Months 2–3:** Evaluate online collaboration and AI-assisted source extraction. Consider migration to Google Sheets or another collaborative environment only after validating formula compatibility and governance requirements.
- **Month 6 onward:** If customer and transaction volumes outgrow the workbook, consider moving calculation-intensive processing to SQL or Python while retaining a compact executive reporting interface.

The migration path preserves the business logic and data definitions rather than treating the spreadsheet itself as the permanent system boundary.

## Other Tools in This Series

Explore related lightweight decision-support tools and analytical frameworks:

- [HyVoid on GitHub](https://github.com/HyVoid) — additional spreadsheet models and operational tools.
- [Theseus Workshop](https://github.com/HyVoid) — reusable analytical frameworks for business planning, financial control, and operational decision-making.

## License

This project is intended to be distributed under the **Apache License 2.0**.

See the [LICENSE](LICENSE) file for the complete license terms. Before publishing, ensure that the repository contains the correct Apache License 2.0 text and that the license designation matches the actual distribution terms of every included artifact.
