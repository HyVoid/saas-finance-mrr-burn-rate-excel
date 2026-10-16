import React from 'react';
import { CalcFrontInput, ParamConfig } from '../types';
import {
  calculateEngineQuote,
  formatCurrency,
  formatPct,
} from '../pricingEngine';

interface CalcFrontSheetProps {
  input: CalcFrontInput;
  params: ParamConfig;
  onChange: (next: CalcFrontInput) => void;
  onPushToBatch: (width: number, height: number, quantity: number) => void;
}

const SIM_QUANTITIES = [100, 500, 1000, 2500, 5000, 10000];

export const CalcFrontSheet: React.FC<CalcFrontSheetProps> = ({
  input,
  params,
  onChange,
  onPushToBatch,
}) => {
  const quote = calculateEngineQuote(
    input.width,
    input.height,
    input.quantity,
    params
  );

  const widthInvalid = input.width < 0.5 || input.width > 24.0;
  const heightInvalid = input.height < 0.5 || input.height > 12.0;
  const qtyInvalid =
    input.quantity < 1 ||
    input.quantity > 1000000 ||
    !Number.isInteger(Number(input.quantity));

  const simMatrix = SIM_QUANTITIES.map((q) => {
    const res = calculateEngineQuote(input.width, input.height, q, params);
    return {
      qty: q,
      ...res,
    };
  });

  const maxSimTotal = Math.max(...simMatrix.map((r) => r.monotonicProtectedTotal), 1);
  const maxSimUnit = Math.max(...simMatrix.map((r) => r.pricePerLabel), 0.0001);

  // Upsell insight calculation (current quantity vs next tier step)
  const nextStep =
    SIM_QUANTITIES.find((q) => q > input.quantity) ||
    Math.max(input.quantity * 2, 10000);
  const nextQuote = calculateEngineQuote(
    input.width,
    input.height,
    nextStep,
    params
  );
  const unitSavingsPct =
    quote.pricePerLabel > 0
      ? (quote.pricePerLabel - nextQuote.pricePerLabel) / quote.pricePerLabel
      : 0;

  return (
    <div className="animate-fade-up">
      {/* Page Title & Subtitle */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="kpi-label mb-1">Sheet 01 · Interactive Terminal (Calc_Front)</div>
          <h1 className="page-title">Customer Quotation & Tier Sensitivity Calculator</h1>
          <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
            Enter physical label dimensions and order volume to compute monotonic-protected factory pricing and competitive positioning against market benchmarks.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn-action btn-action-primary"
            onClick={() => onPushToBatch(input.width, input.height, input.quantity)}
          >
            + Log Quote to Batch Pipeline (03_Engine_Calc)
          </button>
        </div>
      </div>

      {/* Hero KPI Row (F4, F5, F6, F11, F12) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Final Order Total (Cell F5)</div>
          <div className="kpi-value kpi-value-accent">
            {formatCurrency(quote.monotonicProtectedTotal, params.currencySymbol, 2)}
          </div>
          <div className="mt-2 flex items-center justify-between text-xs" style={{ color: 'var(--color-muted)' }}>
            <span>Calibrated Raw: {formatCurrency(quote.calibratedTotal, params.currencySymbol, 2)}</span>
            <span>
              {quote.isSmoothedOrMin === 'MIN_PROTECTED'
                ? 'Min Fee Floor Active'
                : quote.isSmoothedOrMin === 'BOUNDARY_SMOOTHED'
                ? 'Boundary Smoothed'
                : 'Standard Curve'}
            </span>
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Unit Price Per Label (Cell F6)</div>
          <div className="kpi-value">
            {formatCurrency(quote.pricePerLabel, params.currencySymbol, 4)}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Amortized across {input.quantity.toLocaleString()} pcs · {quote.area.toFixed(2)} sq.in/pc
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Matched Quantity Tier (Cell F4)</div>
          <div className="font-display text-2xl font-semibold mt-1" style={{ color: 'var(--color-primary)', letterSpacing: 'var(--tracking-heading)' }}>
            {quote.tierLabel}
          </div>
          <div className="mt-3 text-xs" style={{ color: 'var(--color-muted)' }}>
            Applied Tier Discount: <strong style={{ color: 'var(--color-primary)' }}>{formatPct(quote.discountRate, 1)}</strong>
          </div>
        </div>

        <div className="card-surface-lg p-6">
          <div className="kpi-label mb-2">Market Benchmark Ref (F11 / F12)</div>
          <div className="kpi-value">
            {formatCurrency(quote.marketBenchmarkRef, params.currencySymbol, 2)}
          </div>
          <div className="mt-2 text-xs" style={{ color: 'var(--color-muted)' }}>
            Customer Savings Delta: <strong style={{ color: 'var(--color-primary)' }}>{formatPct(quote.competitorDeltaPct, 1, true)}</strong> vs Weighted Market
          </div>
        </div>
      </div>

      {/* Main Split Zone: Input Card (B4:C8) + Engineering Breakdown & Benchmark Perspective (E10:H13) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Left: Manual Input Card (B4:C8) */}
        <div className="lg:col-span-5 card-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Manual Specification Input (Cells B4:C8)</h2>
            <span className="status-pill">Editable Cells</span>
          </div>
          <p className="text-xs mb-5" style={{ color: 'var(--color-muted)' }}>
            Yellow-tinted cells denote manual sales entry with automatic Excel Data Validation bounds.
          </p>

          <div className="space-y-4">
            {/* Width C5 */}
            <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <div className="font-medium" style={{ color: 'var(--color-primary)' }}>
                  Label Width (<code className="text-xs">Input_Width · C5</code>)
                </div>
                <div className="text-xs" style={{ color: widthInvalid ? 'var(--color-negative)' : 'var(--color-muted)' }}>
                  Valid range: 0.50 in – 24.00 in
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.25"
                  min="0.5"
                  max="24"
                  value={input.width}
                  onChange={(e) =>
                    onChange({
                      ...input,
                      width: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="editable-input w-28 text-right"
                  aria-label="Label Width in inches"
                />
                <span className="text-xs w-8" style={{ color: 'var(--color-muted)' }}>in</span>
              </div>
            </div>

            {/* Height C6 */}
            <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <div className="font-medium" style={{ color: 'var(--color-primary)' }}>
                  Label Height (<code className="text-xs">Input_Height · C6</code>)
                </div>
                <div className="text-xs" style={{ color: heightInvalid ? 'var(--color-negative)' : 'var(--color-muted)' }}>
                  Valid range: 0.50 in – 12.00 in
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.25"
                  min="0.5"
                  max="12"
                  value={input.height}
                  onChange={(e) =>
                    onChange({
                      ...input,
                      height: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="editable-input w-28 text-right"
                  aria-label="Label Height in inches"
                />
                <span className="text-xs w-8" style={{ color: 'var(--color-muted)' }}>in</span>
              </div>
            </div>

            {/* Quantity C7 */}
            <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <div className="font-medium" style={{ color: 'var(--color-primary)' }}>
                  Order Quantity (<code className="text-xs">Input_Quantity · C7</code>)
                </div>
                <div className="text-xs" style={{ color: qtyInvalid ? 'var(--color-negative)' : 'var(--color-muted)' }}>
                  Valid range: 1 – 1,000,000 pcs
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="50"
                  min="1"
                  max="1000000"
                  value={input.quantity}
                  onChange={(e) =>
                    onChange({
                      ...input,
                      quantity: parseInt(e.target.value, 10) || 0,
                    })
                  }
                  className="editable-input w-28 text-right"
                  aria-label="Order Quantity in pieces"
                />
                <span className="text-xs w-8" style={{ color: 'var(--color-muted)' }}>pcs</span>
              </div>
            </div>

            {/* Calculated Area C8 */}
            <div className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium" style={{ color: 'var(--color-primary)' }}>
                  Single Label Surface Area (<code className="text-xs">Calc_Label_Area · C8</code>)
                </div>
                <div className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  Formula: <code>=IF(OR(ISBLANK(C5),ISBLANK(C6)),0,C5*C6)</code>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="tabular-num font-semibold text-base" style={{ color: 'var(--color-primary)' }}>
                  {quote.area.toFixed(2)}
                </span>
                <span className="text-xs w-8" style={{ color: 'var(--color-muted)' }}>sq.in</span>
              </div>
            </div>
          </div>

          {(widthInvalid || heightInvalid || qtyInvalid) && (
            <div className="mt-4 p-3 rounded text-xs" style={{ background: 'var(--anomaly-bg)', color: 'var(--color-negative)', fontWeight: 500 }}>
              Data Validation Alert: Input parameters exceed standard press bed limits (Width 0.5–24.0 in, Height 0.5–12.0 in, Qty 1–1,000,000 pcs).
            </div>
          )}

          {/* Quick Preset Selector */}
          <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="kpi-label mb-2">Quick Specification Presets</div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '2" × 3" · 100 pcs', w: 2, h: 3, q: 100 },
                { label: '2" × 3" · 101 pcs (Boundary)', w: 2, h: 3, q: 101 },
                { label: '4" × 6" · 2,500 pcs', w: 4, h: 6, q: 2500 },
                { label: '3" × 4" · 5,000 pcs', w: 3, h: 4, q: 5000 },
                { label: '8" × 10" · 10,000 pcs', w: 8, h: 10, q: 10000 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() =>
                    onChange({ width: preset.w, height: preset.h, quantity: preset.q })
                  }
                  className="btn-action text-xs"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Engineering Cost Telemetry & Competitive Calibration (E4:H13) */}
        <div className="lg:col-span-7 card-surface p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="section-title">Underlying Engine Cost Decomposition & Calibration</h2>
              <span className="status-pill">SSOT Linked</span>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left">Engine Metric</th>
                  <th className="text-left">Variable Code / Excel Ref</th>
                  <th className="text-right">Computed Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Fixed Digital Press Setup Cost</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>Calc_Raw_Fixed_Cost</code> · Param C6</td>
                  <td className="text-right tabular-num">{formatCurrency(quote.fixedCost, params.currencySymbol)}</td>
                </tr>
                <tr>
                  <td className="font-medium">Variable Material & Press Run Cost</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>Calc_Raw_Variable_Cost</code> · Area^γ + Run</td>
                  <td className="text-right tabular-num">{formatCurrency(quote.variableCost, params.currencySymbol)}</td>
                </tr>
                <tr>
                  <td className="font-medium">Unadjusted Engineering Cost</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>Calc_Engineering_Cost</code> · P_eng(A,Q)</td>
                  <td className="text-right tabular-num font-semibold">{formatCurrency(quote.engineeringCost, params.currencySymbol)}</td>
                </tr>
                <tr>
                  <td className="font-medium">Competitor Calibrated Target Total</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>Calc_Comp_Calibrated_Total</code> · (1-D)×α</td>
                  <td className="text-right tabular-num">{formatCurrency(quote.calibratedTotal, params.currencySymbol)}</td>
                </tr>
                <tr>
                  <td className="font-medium">Preceding Tier Peak Floor ({quote.prevMaxQty.toLocaleString()} pcs)</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>prev_price</code> · Boundary Constraint</td>
                  <td className="text-right tabular-num">{formatCurrency(quote.prevBoundaryPrice, params.currencySymbol)}</td>
                </tr>
                <tr>
                  <td className="font-semibold" style={{ color: 'var(--color-primary)' }}>Final Monotonic Protected Total</td>
                  <td style={{ color: 'var(--color-muted)' }}><code>Calc_Monotonic_Protected_Total</code> · Cell F5</td>
                  <td className="text-right tabular-num font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {formatCurrency(quote.monotonicProtectedTotal, params.currencySymbol)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Actionable Sales Insight Block */}
          <div className="insight-block mt-6">
            <div className="kpi-label mb-1" style={{ color: 'var(--color-accent)' }}>
              Commercial Upsell Recommendation · Dynamic Tier Elasticity
            </div>
            <p className="text-xs leading-relaxed">
              Increasing order volume from <strong>{input.quantity.toLocaleString()} pcs</strong> to{' '}
              <strong>{nextStep.toLocaleString()} pcs</strong> reduces the per-label factory price from{' '}
              <strong>{formatCurrency(quote.pricePerLabel, params.currencySymbol, 4)}</strong> to{' '}
              <strong>{formatCurrency(nextQuote.pricePerLabel, params.currencySymbol, 4)}</strong> (a{' '}
              <strong>{formatPct(unitSavingsPct, 1)}</strong> unit cost reduction) while maintaining a{' '}
              <strong>{formatPct(Math.abs(quote.competitorDeltaPct), 1)}</strong> discount advantage below the weighted market benchmark ({formatCurrency(quote.marketBenchmarkRef, params.currencySymbol, 2)}).
            </p>
          </div>
        </div>
      </div>

      {/* Multi-Tier Sensitivity Matrix (Spill Array B13# -> B13:E18) */}
      <div className="card-surface p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="section-title">Multi-Tier Sensitivity Comparison Matrix (Dynamic Spill Array B13:E18)</h2>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Automatically spills all 6 standard production volume tiers for current dimensions ({input.width.toFixed(2)}" × {input.height.toFixed(2)}"). Click any row to apply its quantity.
            </p>
          </div>
          <span className="status-pill">Formula 7 · MAP + LAMBDA Spill</span>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-left">Tier Bracket</th>
                <th className="text-right">Recommended Volume</th>
                <th className="text-right">Tier Discount</th>
                <th className="text-right">Order Total Price</th>
                <th className="text-right">Unit Price / Label</th>
                <th className="text-right">Market Benchmark Ref</th>
                <th className="text-right">Unit Savings vs Tier 1</th>
              </tr>
            </thead>
            <tbody>
              {simMatrix.map((row) => {
                const tier1Unit = simMatrix[0].pricePerLabel;
                const savingsVsTier1 =
                  tier1Unit > 0 ? (tier1Unit - row.pricePerLabel) / tier1Unit : 0;
                const isSelected = row.qty === input.quantity;
                const totalBarPct = Math.min(100, Math.max(4, (row.monotonicProtectedTotal / maxSimTotal) * 100));
                const unitBarPct = Math.min(100, Math.max(4, (row.pricePerLabel / maxSimUnit) * 100));

                return (
                  <tr
                    key={row.qty}
                    onClick={() => onChange({ ...input, quantity: row.qty })}
                    className="cursor-pointer"
                    style={
                      isSelected
                        ? { background: 'var(--insight-bg)', fontWeight: 600 }
                        : undefined
                    }
                  >
                    <td className="text-left">
                      <span className="font-medium" style={{ color: 'var(--color-primary)' }}>
                        {row.tierLabel}
                      </span>
                      {isSelected && (
                        <span className="ml-2 text-xs" style={{ color: 'var(--color-accent)' }}>
                          · Active
                        </span>
                      )}
                    </td>
                    <td className="text-right tabular-num">{row.qty.toLocaleString()} pcs</td>
                    <td className="text-right tabular-num">{formatPct(row.discountRate, 1)}</td>
                    <td className="text-right">
                      <div className="databar-wrapper">
                        <span className="tabular-num font-medium" style={{ color: 'var(--color-primary)' }}>
                          {formatCurrency(row.monotonicProtectedTotal, params.currencySymbol, 2)}
                        </span>
                        <div className="databar-track">
                          <div
                            className="databar-fill"
                            style={{ transform: `scaleX(${totalBarPct / 100})` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="databar-wrapper">
                        <span className="tabular-num">
                          {formatCurrency(row.pricePerLabel, params.currencySymbol, 4)}
                        </span>
                        <div className="databar-track">
                          <div
                            className="databar-fill"
                            style={{ transform: `scaleX(${unitBarPct / 100})` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {formatCurrency(row.marketBenchmarkRef, params.currencySymbol, 2)}
                    </td>
                    <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                      {row.qty === 100 ? 'Baseline' : `-${formatPct(savingsVsTier1, 1)}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
