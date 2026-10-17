[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# B2B SaaS Weekly Finance Control, Burn Rate & MRR Variance Excel Template (NRR, GRR & BvA Analyzer)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/42ffbf57-1f2d-4985-baf0-5556376a1749" />

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: SaaS FP&A & Variance Control](https://img.shields.io/badge/Tool-SaaS%20FP%26A%20%26%20Variance%20Control-0F766E)

**A weekly B2B SaaS financial control workbook, MTD cash burn rate tracker, and MRR/ARR waterfall variance analyzer. Built for venture-backed SaaS CEOs, Fractional CFOs, and FP&A analysts to audit Net Revenue Retention (NRR), Gross Revenue Retention (GRR), demo-to-close sales funnel conversion, and fully loaded payroll costs before month-end accounting close—available as a free browser-based simulator (no signup required) and a downloadable Microsoft Excel template.**

> **Access the Weekly SaaS FP&A & Variance Control Tools**
>
> - 🌐 **[Launch the Free Web-Based SaaS Burn & MRR Variance Simulator](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)** — Explore the weekly SaaS KPI dashboard, test MTD cash burn pacing alerts, and inspect MRR waterfall mechanics online with no installation or registration.
> - 📥 **[Download the Weekly SaaS Financial Control Excel Workbook (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** — Get the full spreadsheet template for recurring Monday finance reviews, offline multi-system data reconciliation (`QuickBooks`, `Stripe`, `Salesforce`, `Gusto`, `Deel`), and formal month-end Budget vs. Actual (BvA) close tracking.
>


---

## Core B2B SaaS Metrics & Pre-Close Financial Blind Spots Solved

Waiting 15–20 days after month-end for external bookkeepers to close the general ledger is too slow for venture-backed B2B SaaS execution. This decision-support engine unifies weekly billing, CRM, and payroll signals into an auditable operational ledger. Here is how the model maps **SaaS financial management pain points** to automated **FP&A and retention KPIs**:

| SaaS Financial Control Pain Point | Weekly Accrual & Variance Mechanism | Key SaaS & FP&A Metrics Tracked |
| :--- | :--- | :--- |
| **Mid-Month Cash Burn Overshoot** | Compares Month-to-Date (MTD) accrual spend against approved monthly budget and elapsed calendar time % to flag intra-month overspending. | MTD net cash burn ($), monthly burn target ($150k baseline), burn pacing vs. elapsed month (%), BvA dollar/percent variance |
| **Opaque Top-Line MRR & ARR Movements** | Decomposes aggregate recurring revenue into a 4-part MRR bridge so expansion spikes never mask underlying customer churn. | New Business MRR, Expansion MRR, Contraction (Downgrade) MRR, Churned MRR, Net New ARR |
| **Hidden Customer Cohort & Logo Deterioration** | Separates expansion-driven revenue growth from core base erosion using distinct institutional retention benchmarks. | Gross Revenue Retention (`GRR %`), Net Revenue Retention (`NRR %` vs. 105% target), monthly Customer Logo Churn (`%` vs. 2% ceiling) |
| **Disconnected CRM Pipeline & Revenue Forecasts** | Links top-of-funnel demo activity to closed-won ARR to pinpoint whether revenue misses stem from lead volume or sales execution. | Booked demos, completed demos, Closed-Won deals, Demo-to-Close conversion rate (`%` vs. 20% benchmark), forecast variance |
| **Unallocated Fully Burdened Headcount Costs** | Consolidates domestic and EOR contractor payroll alongside statutory employer taxes and benefits by department (`R&D`, `S&M`, `G&A`). | Fully loaded personnel cost by department, base salary vs. employer tax/benefit burden ratio |
| **Unowned Cross-System Variances & OpEx Leakage** | Routes material cross-system discrepancies (`>5%` threshold) into an accountable exception and cost-reduction ledger. | Cross-system reconciliation flags, assigned action owners, projected monthly OpEx savings ($), implementation status |

---

## Step-by-Step Tutorial: How to Run a Weekly SaaS Finance & KPI Audit

The workbook establishes a disciplined **weekly Monday FP&A operating cadence**: configure your board-approved SaaS benchmarks once, drop in weekly CSV exports from your billing/CRM/HR stack, resolve flagged exceptions, and reconcile against formal month-end actuals.

### Step 1: Configure SaaS Benchmarks, Burn Targets & Variance Thresholds
Open the `Settings & Benchmarks` tab to establish your reporting governance and alert thresholds:

- **Reporting & Liquidity Controls:** Define the weekly reporting cutoff date, base currency, approved monthly net burn target (reference default: `$150,000/month`), and materiality variance threshold (reference default: `5%`).
- **Institutional SaaS KPI Targets:** Set your target **Net Revenue Retention (NRR)** benchmark (default: `105%`), maximum **Monthly Logo Churn** ceiling (default: `2.0%`), and **Demo-to-Close Conversion** target (default: `20%`).

*(Note: Reference settings are illustrative operational defaults. Replace them with your board-approved annual operating plan [AOP] targets.)*

### Step 2: Import Weekly Snapshots from Billing, Accounting, CRM & Payroll
Export point-in-time CSV/XLSX tables from your existing B2B SaaS tech stack and paste them into the standardized input sheets (retaining extraction timestamps and cutoff dates):

- **Accounting & Subscription Billing (`QuickBooks` + `Stripe`):** General ledger expense snapshots, invoice runs, and subscription MRR movement logs.
- **CRM & Contract Management (`Salesforce` + `PandaDoc`):** Booked/completed sales demos, pipeline forecasts, and executed contract values.
- **HRIS & Global Payroll (`Gusto` + `Deel`):** Departmental headcount rosters, base salaries, employer payroll taxes, benefits, and international EOR contractor invoices.

### Step 3: Audit the Weekly Executive Dashboard & Exception Queue
Navigate to the `Executive Dashboard` and `KPI Variance` views to inspect operational health before Monday leadership standups:

1. **MTD Burn Pacing Check:** Verify whether cumulative monthly spend is outrunning elapsed calendar time (e.g., 60% of budget burned at 45% of the month elapsed).
2. **MRR Waterfall & Retention Audit:** Inspect New, Expansion, Contraction, and Churned MRR alongside `GRR` and `NRR` to verify core product stickiness.
3. **Exception & Cost-Action Routing:** Investigate any cross-system discrepancy exceeding your `5%` variance threshold before treating numbers as decision-ready, and assign department owners to documented OpEx reduction initiatives.

### Step 4: Reconcile Against Month-End Closed Actuals & Operationalize in Excel
Run Steps 2–3 every week. Once your external accounting firm or internal controller publishes the **formal monthly or quarterly GAAP/IFRS close**, input the closed figures into the `Reconciliation Workflow` tab to measure estimation accuracy and tighten future weekly accrual assumptions.

> 📊 **Ready to eliminate the 20-day month-end blind spot in your SaaS operations?** 
> After exploring the KPI layout in the **[Free Browser-Based SaaS Finance Control Simulator](https://hyvoid.github.io/saas-finance-mrr-burn-rate-excel/)**, download the **[Reusable Weekly SaaS Finance & Variance Excel Workbook (.xlsx)](https://theseusworkshop.com/l/ilgrvh?utm_source=github&utm_medium=GitHub%20README)** to connect your live Stripe, QuickBooks, Salesforce, and Gusto/Deel exports, track cost-saving owners, and maintain an auditable weekly board record.

---

## Why I Built This Weekly SaaS Financial Control Framework

A venture-backed B2B SaaS startup can receive clean, CPA-verified monthly financial statements and still make catastrophic weekly operating decisions.

The root cause is **information latency**: external bookkeepers and accounting teams typically close the books 15 to 25 days after month-end, whereas a SaaS CEO and executive team make hiring, marketing, and vendor commitments every Monday. A raw bank balance ignores accrued liabilities; a Stripe revenue chart ignores QuickBooks cash burn; and a Salesforce pipeline report ignores churn.

### 1. The "45% Elapsed Time vs. 60% Burned" Intra-Month Pacing Trap
Consider a Series A SaaS company operating against an approved **$150,000 monthly net burn target**.

On Day 14 of the month (**45% of the month elapsed**), the MTD spend sits at **$90,000**. Looked at as an isolated dollar figure, $90,000 is still $60,000 below the monthly cap—so a naive tracker shows green. In reality, the company has already consumed **60% of its monthly burn allowance** with more than half the month remaining. By flagging **burn pacing relative to elapsed time**, leadership can freeze discretionary cloud/marketing spend or pause non-critical requisitions *mid-month*, rather than discovering a $40,000 budget overrun three weeks after the month closes.

### 2. The "Net MRR Growth" Masking High Gross Churn Trap
The same visibility failure occurs in recurring revenue. Headline MRR might grow by $15,000 in a week because two enterprise accounts upgraded (`Expansion MRR`), concealing the fact that ten mid-market customers canceled (`Logo Churn` & `Contraction MRR`). Relying solely on Net New ARR masks product-market fit erosion until expansion inevitably slows.

I built this analyzer as a **productized FP&A reasoning workflow**—connecting multi-system data intake, statistical validation, MRR waterfall decomposition, cost-action accountability, and post-close accounting reconciliation in one repeatable model.

---

## Monthly Accounting Close vs. Weekly SaaS Finance Control Engine

| SaaS Finance & Operations Dimension | Waiting on Month-End Accounting Close & Siloed Dashboards | Weekly SaaS Finance Control & Variance Analyzer (This Tool) |
| :--- | :--- | :--- |
| **Financial Visibility Latency** | Leadership waits 2–3 weeks post-month-end for formal statements before spotting OpEx spikes or runway erosion. | Weekly accrual-based operating estimates surface early risk signals, backed by end-of-month reconciliation against closed actuals. |
| **Cash Burn Rate Pacing Control** | MTD spend is viewed as a flat dollar sum without measuring consumption speed against elapsed calendar days. | Benchmarks **MTD net burn against both the $150k budget target and elapsed month %** to catch pacing overshoots mid-month. |
| **Recurring Revenue (MRR/ARR) Attribution** | Top-line revenue dashboards blend new sales and upsells with downgrades, masking underlying cohort decay. | Splits recurring revenue into a strict **MRR Waterfall: New Business, Expansion, Contraction, and Churned MRR**. |
| **Customer Retention & Churn Quality** | Net revenue growth is mistaken for customer health, overlooking high logo churn among core cohorts. | Tracks **Gross Revenue Retention (GRR), Net Revenue Retention (NRR vs. 105%), and Logo Churn (vs. 2% ceiling)** side by side. |
| **Sales Funnel & Demo Conversion Auditing** | Booked demos, completed demos, signed PandaDoc contracts, and revenue forecasts sit in disconnected CRM views. | Connects **Booked Demos $\rightarrow$ Completed Demos $\rightarrow$ Closed-Won deals** to audit the `20%` demo-to-close conversion benchmark. |
| **Cross-System Variance & OpEx Accountability** | Discrepancies between Stripe, QuickBooks, and Gusto/Deel go unexplained, and cost-cutting pledges lack follow-through. | Enforces a **5% variance exception workflow** and assigns every cost-reduction action an accountable owner, dollar target, and status. |

---

## Who This SaaS FP&A Workbook Is Built For: Roles & Workflows

This dual-format (Browser + Excel) financial control toolkit is engineered for B2B SaaS operators and finance professionals managing distributed operational data:

- **Venture-Backed SaaS CEOs, Founders & COOs (Seed to Series B):** Establish a single source of truth for Monday leadership meetings. Use the **weekly SaaS executive dashboard** to monitor cash burn pacing, NRR/GRR health, and sales funnel velocity weeks before your external accountant delivers month-end financials.
- **Fractional CFOs, Heads of Finance & SaaS FP&A Analysts:** Standardize multi-client or internal weekly reporting without paying $30,000+/year for enterprise FP&A software. Use the **SaaS budget vs. actual (BvA) variance Excel template** to reconcile weekly operational estimates against closed GAAP/IFRS accounting actuals.
- **VP of Sales, RevOps & Customer Success Leaders:** Align GTM execution with financial targets. Use the **MRR bridge and funnel conversion tracker** to separate top-of-funnel demo slippage (`Booked vs. Completed Demos`) from downstream retention problems (`Contraction vs. Logo Churn`).
- **Engineering, Product & Department Budget Owners:** Gain clear visibility into **fully burdened headcount costs** (combining domestic payroll and international EOR contractors) and track assigned OpEx cost-reduction initiatives from proposal to realized monthly savings.
- **SaaS Investors, Operating Partners & Board Advisors:** Deploy a lightweight, repeatable **portfolio reporting template** across early-stage portfolio companies to instill financial discipline and audit cash runway assumptions.

---

## Industry Use Cases & Long-Tail SaaS Finance Scenarios

Whether you operate a product-led growth (PLG) software company or an enterprise sales-led B2B SaaS platform, this workbook solves high-friction multi-system reporting challenges:

### 1. Reconciling the Modern B2B SaaS Tech Stack (QuickBooks + Stripe + Salesforce + PandaDoc + Gusto + Deel)
Early-stage SaaS companies rarely run on a single monolithic ERP. Billing lives in **Stripe**, accounting lives in **QuickBooks**, pipeline lives in **Salesforce**, signed order forms live in **PandaDoc**, US payroll runs on **Gusto**, and global contractors run through **Deel**. This workbook provides standardized intake tables to join these six exact data streams into one coherent weekly P&L and KPI view—flagging unmapped records or cross-system discrepancies (`>5%`) before they corrupt executive decisions.

### 2. Mid-Month Cash Preservation & OpEx Cost-Reduction Tracking
During runway extension initiatives or board-mandated burn reductions, cutting expenses on paper is easy—realizing them in cash flow is hard. The built-in **Cost-Reduction Action Ledger** forces every proposed saving (e.g., cloud infrastructure rightsizing, SaaS license consolidation, hiring deferrals) to carry a named department owner, estimated monthly dollar impact, and execution status (`Proposed`, `In Progress`, `Realized`).

### 3. Bridging Weekly Flash Estimates to Outsourced Month-End Accounting Closes
Most Seed and Series A startups rely on outsourced bookkeeping firms that close the books on a 15-to-30-day lag. By pairing **weekly flash operating estimates** with a dedicated **Post-Close Actuals Reconciliation workflow**, finance teams can measure where weekly accruals drifted from formal accounting statements—continuously improving estimation accuracy over time.

---

### Operational Scope & Governance Disclaimer
*This tool is a weekly operational decision-support model and FP&A variance analyzer—not a statutory general ledger (GL), automated ETL data pipeline, GAAP/IFRS revenue recognition engine, or enterprise ERP replacement. It relies on periodic CSV/spreadsheet snapshots exported from source systems and requires users to verify field mappings, cutoff timestamps, and accrual assumptions. Calculated indicators must pass exception review before driving binding financial commitments.*

---

## About the Creator

I build lightweight, inspectable operational decision-support tools for high-stakes business workflows where critical signals get buried across disconnected SaaS platforms and spreadsheets. The central engineering question is simple: **What exact financial, revenue, and operational metrics must sit in one place on Monday morning to make the next management decision confidently?**

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
