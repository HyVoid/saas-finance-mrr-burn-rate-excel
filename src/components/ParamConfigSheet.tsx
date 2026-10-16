import React from 'react';
import { ParamConfig } from '../types';
import { formatPct } from '../pricingEngine';

interface ParamConfigSheetProps {
  params: ParamConfig;
  onChange: (next: ParamConfig) => void;
}

export const ParamConfigSheet: React.FC<ParamConfigSheetProps> = ({
  params,
  onChange,
}) => {
  // Real-time self-check formulas (D13, D19, D20)
  const weightSum = Number((params.weightWizard + params.weightConsolidated).toFixed(4));
  const weightBalanced = Math.abs(weightSum - 1.0) < 0.0001;

  const tiersMonotonic =
    params.tier2Max > params.tier1Max &&
    params.tier3Max > params.tier2Max &&
    params.tier4Max > params.tier3Max &&
    params.tier5Max > params.tier4Max;

  const discountsMonotonic =
    params.tier2Disc > params.tier1Disc &&
    params.tier3Disc > params.tier2Disc &&
    params.tier4Disc > params.tier3Disc &&
    params.tier5Disc > params.tier4Disc &&
    params.tier6Disc > params.tier5Disc;

  const updateField = <K extends keyof ParamConfig>(key: K, val: ParamConfig[K]) => {
    onChange({
      ...params,
      [key]: val,
    });
  };

  return (
    <div className="animate-fade-up">
      {/* Page Header */}
      <div className="mb-8">
        <div className="kpi-label mb-1">Sheet 02 · Single Source of Truth (Param_Config)</div>
        <h1 className="page-title">Strategy Control & Global Parameter Configuration</h1>
        <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
          All downstream sheets reference these exact cell coordinates. Zero hardcoded magic numbers exist in the pricing engine. Any parameter change propagates across all 5 sheets in real time.
        </p>
      </div>

      {/* Compliance Audit Banner (Cells D13, D19, D20) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="kpi-label">Audit Cell D13 · Competitor Weights</span>
            <span
              className={`status-pill ${
                weightBalanced ? 'status-pill-positive' : 'status-pill-negative'
              }`}
            >
              {weightBalanced ? 'PASS (100.0%)' : 'ACTION REQUIRED'}
            </span>
          </div>
          <div className="text-xs mt-1" style={{ color: weightBalanced ? 'var(--color-primary)' : 'var(--color-negative)', fontWeight: weightBalanced ? 400 : 600 }}>
            {weightBalanced
              ? `Weight balance verified (${formatPct(weightSum, 1)}).`
              : `Critical Error: Competitor benchmark weights must sum to 100.0% (Current: ${formatPct(weightSum, 1)}).`}
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="kpi-label">Audit Cell D19 · Tier Thresholds</span>
            <span
              className={`status-pill ${
                tiersMonotonic ? 'status-pill-positive' : 'status-pill-negative'
              }`}
            >
              {tiersMonotonic ? 'PASS (MONOTONIC)' : 'CONFLICT'}
            </span>
          </div>
          <div className="text-xs mt-1" style={{ color: tiersMonotonic ? 'var(--color-primary)' : 'var(--color-negative)', fontWeight: tiersMonotonic ? 400 : 600 }}>
            {tiersMonotonic
              ? 'Tier upper limits strictly increase from B19 to B23.'
              : 'Logic Conflict: Tier upper limits have inversion or overlap in B19:B23.'}
          </div>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="kpi-label">Audit Cell D20 · Discount Progression</span>
            <span
              className={`status-pill ${
                discountsMonotonic ? 'status-pill-positive' : 'status-pill-negative'
              }`}
            >
              {discountsMonotonic ? 'PASS (PROGRESSIVE)' : 'INVERSION RISK'}
            </span>
          </div>
          <div className="text-xs mt-1" style={{ color: discountsMonotonic ? 'var(--color-primary)' : 'var(--color-negative)', fontWeight: discountsMonotonic ? 400 : 600 }}>
            {discountsMonotonic
              ? 'Discount depth progressively increases across C19:C24.'
              : 'Commercial Risk: Higher tier discount is less than or equal to lower tier in C19:C24.'}
          </div>
        </div>
      </div>

      {/* Main Parameter Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Left: Core Engineering & Competitive Parameters (C4:C15) */}
        <div className="lg:col-span-7 card-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Engineering Cost & Competitive Calibration Parameters</h2>
            <span className="status-pill">Cells C4:C15</span>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left">Category</th>
                  <th className="text-left">Parameter Name & Variable ID</th>
                  <th className="text-left">Cell</th>
                  <th className="text-right">Configured Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Currency</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Base Currency Symbol</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Currency_Symbol</code></div>
                  </td>
                  <td><code>C4</code></td>
                  <td className="text-right">
                    <input
                      type="text"
                      maxLength={3}
                      value={params.currencySymbol}
                      onChange={(e) => updateField('currencySymbol', e.target.value || '$')}
                      className="editable-input w-24 text-center"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Floor Protection</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Minimum Order Protection Fee</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Min_Order_Fee</code></div>
                  </td>
                  <td><code>C5</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="1"
                      min="0"
                      value={params.minOrderFee}
                      onChange={(e) => updateField('minOrderFee', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Engineering</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Base Digital Setup & Die Prep Fee</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Base_Setup_Fee</code></div>
                  </td>
                  <td><code>C6</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="1"
                      min="0"
                      value={params.baseSetupFee}
                      onChange={(e) => updateField('baseSetupFee', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Engineering</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Base Area Material Cost Rate (/sq.in)</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Area_Cost_Rate</code></div>
                  </td>
                  <td><code>C7</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.0005"
                      min="0.0001"
                      value={params.areaCostRate}
                      onChange={(e) => updateField('areaCostRate', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Engineering</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Area Non-Linear Elasticity Exponent (γ)</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Area_Elasticity</code></div>
                  </td>
                  <td><code>C8</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0.5"
                      max="1.5"
                      value={params.areaElasticity}
                      onChange={(e) => updateField('areaElasticity', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Engineering</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Press Run Cost Rate (per 1,000 strokes)</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Run_Cost_Rate</code></div>
                  </td>
                  <td><code>C9</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={params.runCostRate}
                      onChange={(e) => updateField('runCostRate', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Competition</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Target Competitive Positioning Factor (α)</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Comp_Target_Factor</code> (0.90 = 10% below market)</div>
                  </td>
                  <td><code>C12</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0.1"
                      max="2.0"
                      value={params.compTargetFactor}
                      onChange={(e) => updateField('compTargetFactor', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr className={!weightBalanced ? 'anomaly-row' : undefined}>
                  <td style={{ color: 'var(--color-muted)' }}>Competition</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Wizard Labels Benchmark Weight</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Weight_Wizard</code></div>
                  </td>
                  <td><code>C13</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      max="1"
                      value={params.weightWizard}
                      onChange={(e) => updateField('weightWizard', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr className={!weightBalanced ? 'anomaly-row' : undefined}>
                  <td style={{ color: 'var(--color-muted)' }}>Competition</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Consolidated Label Benchmark Weight</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Weight_Consolidated</code></div>
                  </td>
                  <td><code>C14</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.05"
                      min="0"
                      max="1"
                      value={params.weightConsolidated}
                      onChange={(e) => updateField('weightConsolidated', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>

                <tr>
                  <td style={{ color: 'var(--color-muted)' }}>Competition</td>
                  <td>
                    <div className="font-medium" style={{ color: 'var(--color-primary)' }}>Benchmark Variance Tolerance Threshold</div>
                    <div className="text-xs" style={{ color: 'var(--color-muted)' }}><code>Param_Max_Variance_Tol</code> (e.g. 0.08 = ±8.0%)</div>
                  </td>
                  <td><code>C15</code></td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      max="0.5"
                      value={params.maxVarianceTol}
                      onChange={(e) => updateField('maxVarianceTol', parseFloat(e.target.value) || 0)}
                      className="editable-input w-28 text-right"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: 6-Tier Quantity Thresholds & Discounts (B19:C24) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="card-surface p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="section-title">Quantity Tier Thresholds & Discounts</h2>
              <span className="status-pill">Cells B19:C24</span>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th className="text-left">Tier</th>
                  <th className="text-right">Max Qty (B19:B24)</th>
                  <th className="text-right">Discount Rate (C19:C24)</th>
                </tr>
              </thead>
              <tbody>
                {/* Tier 1 */}
                <tr>
                  <td className="font-medium">Tier 1 (Sample)</td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="10"
                      min="1"
                      value={params.tier1Max}
                      onChange={(e) => updateField('tier1Max', parseInt(e.target.value, 10) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.9"
                      value={params.tier1Disc}
                      onChange={(e) => updateField('tier1Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>

                {/* Tier 2 */}
                <tr className={!tiersMonotonic || !discountsMonotonic ? 'anomaly-row' : undefined}>
                  <td className="font-medium">Tier 2 (Small Run)</td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="50"
                      min="1"
                      value={params.tier2Max}
                      onChange={(e) => updateField('tier2Max', parseInt(e.target.value, 10) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.9"
                      value={params.tier2Disc}
                      onChange={(e) => updateField('tier2Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>

                {/* Tier 3 */}
                <tr className={!tiersMonotonic || !discountsMonotonic ? 'anomaly-row' : undefined}>
                  <td className="font-medium">Tier 3 (Standard)</td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="100"
                      min="1"
                      value={params.tier3Max}
                      onChange={(e) => updateField('tier3Max', parseInt(e.target.value, 10) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.9"
                      value={params.tier3Disc}
                      onChange={(e) => updateField('tier3Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>

                {/* Tier 4 */}
                <tr className={!tiersMonotonic || !discountsMonotonic ? 'anomaly-row' : undefined}>
                  <td className="font-medium">Tier 4 (Medium Run)</td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="500"
                      min="1"
                      value={params.tier4Max}
                      onChange={(e) => updateField('tier4Max', parseInt(e.target.value, 10) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.9"
                      value={params.tier4Disc}
                      onChange={(e) => updateField('tier4Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>

                {/* Tier 5 */}
                <tr className={!tiersMonotonic || !discountsMonotonic ? 'anomaly-row' : undefined}>
                  <td className="font-medium">Tier 5 (Large Run)</td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="1000"
                      min="1"
                      value={params.tier5Max}
                      onChange={(e) => updateField('tier5Max', parseInt(e.target.value, 10) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.9"
                      value={params.tier5Disc}
                      onChange={(e) => updateField('tier5Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>

                {/* Tier 6 */}
                <tr className={!discountsMonotonic ? 'anomaly-row' : undefined}>
                  <td className="font-medium">Tier 6 (Industrial)</td>
                  <td className="text-right tabular-num" style={{ color: 'var(--color-muted)' }}>
                    {params.tier6Label} (Fixed B24)
                  </td>
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="0.95"
                      value={params.tier6Disc}
                      onChange={(e) => updateField('tier6Disc', parseFloat(e.target.value) || 0)}
                      className="editable-input w-24 text-right"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="insight-block">
            <div className="kpi-label mb-1" style={{ color: 'var(--color-accent)' }}>
              Governance Note · Principle 7 SSOT Architecture
            </div>
            <p className="text-xs leading-relaxed">
              In the Excel workbook, cells <code>C4:C15</code> and <code>B19:C24</code> act as the exclusive parameter layer. Modifying <code>Param_Comp_Target_Factor</code> (Cell C12, currently <strong>{formatPct(params.compTargetFactor, 1)}</strong>) shifts the global pricing curve relative to Wizard Labels and Consolidated Label without touching a single downstream formula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
