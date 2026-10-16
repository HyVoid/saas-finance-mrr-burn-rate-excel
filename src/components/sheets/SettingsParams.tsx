import React, { useState } from 'react';
import { Check, Info, Plus, RotateCcw, Sliders, Trash2 } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { InsightCard } from '../common/InsightCard';

export const SettingsParams: React.FC = () => {
  const { state, updateParams, updateDictionaries } = useFinance();
  const { params, dictionaries } = state;

  const [newSystem, setNewSystem] = useState('');
  const [newDept, setNewDept] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleParamChange = (field: keyof typeof params, value: any) => {
    updateParams({ [field]: value });
  };

  const handleAddSystem = () => {
    if (newSystem.trim() && !dictionaries.sourceSystems.includes(newSystem.trim())) {
      updateDictionaries({ sourceSystems: [...dictionaries.sourceSystems, newSystem.trim()] });
      setNewSystem('');
    }
  };

  const handleRemoveSystem = (item: string) => {
    updateDictionaries({ sourceSystems: dictionaries.sourceSystems.filter(s => s !== item) });
  };

  const handleAddDept = () => {
    if (newDept.trim() && !dictionaries.departments.includes(newDept.trim())) {
      updateDictionaries({ departments: [...dictionaries.departments, newDept.trim()] });
      setNewDept('');
    }
  };

  const handleRemoveDept = (item: string) => {
    updateDictionaries({ departments: dictionaries.departments.filter(d => d !== item) });
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !dictionaries.expenseCategories.includes(newCategory.trim())) {
      updateDictionaries({ expenseCategories: [...dictionaries.expenseCategories, newCategory.trim()] });
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (item: string) => {
    updateDictionaries({ expenseCategories: dictionaries.expenseCategories.filter(c => c !== item) });
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 02 • Configuration &amp; Global Parameters
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            Zero Hardcoding Architecture (Principle 6 &amp; 7)
          </span>
        </div>
        <h1
          className="text-2xl md:text-3xl font-semibold tracking-title"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
        >
          Model Parameters &amp; Master Dictionaries
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Single Source of Truth for thresholds, budget ceilings, cutoff periods, and categorical dimensions.
          All edits immediately propagate to every calculation engine.
        </p>
      </div>

      <InsightCard title="Strict Parameterization Standard (No Hardcoding Policy)">
        Under strict M365 modeling principles, formulas never hardcode constants like <code>5%</code> or <code>150,000</code>.
        Changing values here dynamically adjusts the <strong>01 Executive Dashboard</strong>, <strong>04 Calculation Engine</strong>,
        and <strong>06 Cost Reduction Tracker</strong> in real time.
      </InsightCard>

      {/* Grid: Zone 1 & Zone 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Zone 1: Global Runtime Controls */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h2
                className="text-base font-semibold tracking-title"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Zone 1 • Global Runtime Controls (Named Ranges)
              </h2>
              <p className="text-[11px] text-gray-500">
                Core operational constants driving MTD aggregation &amp; reporting filters
              </p>
            </div>
            <Sliders className="w-4 h-4 text-blue-600" />
          </div>

          <div className="space-y-4">
            {/* Currency Symbol */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  System Base Currency Symbol (<code>Param_Currency_Symbol</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$3</span>
              </div>
              <input
                type="text"
                value={params.currencySymbol}
                onChange={e => handleParamChange('currencySymbol', e.target.value)}
                className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                placeholder="$"
              />
              <span className="text-[10px] text-gray-400">
                All report outputs dynamically inherit this symbol (e.g. $, ¥, €, £).
              </span>
            </div>

            {/* Mandatory Variance Threshold */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Mandatory Variance Explanation Threshold (<code>Param_Variance_Threshold</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$4</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  max="1.0"
                  value={params.varianceThreshold}
                  onChange={e => handleParamChange('varianceThreshold', parseFloat(e.target.value) || 0.05)}
                  className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                />
                <span className="text-xs font-mono font-semibold text-gray-700 w-16 text-right">
                  {(params.varianceThreshold * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                Any multi-source deviation exceeding this fraction automatically requires compulsory written notes.
              </span>
            </div>

            {/* Monthly Burn Target */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Monthly Net Burn Budget Ceiling (<code>Param_Burn_Target</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$5</span>
              </div>
              <input
                type="number"
                step="1000"
                value={params.burnTarget}
                onChange={e => handleParamChange('burnTarget', parseFloat(e.target.value) || 0)}
                className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
              />
              <span className="text-[10px] text-gray-400">
                Board-approved capital budget limit. MTD Burn exceeding this triggers OFF TRACK.
              </span>
            </div>

            {/* Current Report Cutoff Date */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Current Report Cutoff Date (<code>Param_Report_Date</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$6</span>
              </div>
              <input
                type="date"
                value={params.reportDate}
                onChange={e => handleParamChange('reportDate', e.target.value)}
                className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
              />
              <span className="text-[10px] text-gray-400">
                Dynamic benchmark filtering all weekly snapshots (e.g. 2026-10-09).
              </span>
            </div>

            {/* Month Working Days Progress Ratio */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Month Elapsed Working Days Ratio (<code>Param_Month_Progress_Pct</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$7</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.05"
                  min="0.0"
                  max="1.0"
                  value={params.monthProgressPct}
                  onChange={e => handleParamChange('monthProgressPct', parseFloat(e.target.value) || 0)}
                  className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                />
                <span className="text-xs font-mono font-semibold text-gray-700 w-16 text-right">
                  {(params.monthProgressPct * 100).toFixed(0)}%
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                Fraction of the month elapsed, used to detect whether burn velocity is outpacing time.
              </span>
            </div>
          </div>
        </div>

        {/* Zone 2: SaaS Health Benchmarks & Guardrails */}
        <div className="card-elevated p-6 border-0">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
            <div>
              <h2
                className="text-base font-semibold tracking-title"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                Zone 2 • SaaS Health Benchmarks &amp; Guardrails
              </h2>
              <p className="text-[11px] text-gray-500">
                Target performance thresholds for retention and sales efficiency
              </p>
            </div>
            <Info className="w-4 h-4 text-blue-600" />
          </div>

          <div className="space-y-4">
            {/* NRR Benchmark */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  NRR Health Benchmark Line (<code>Param_NRR_Benchmark</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$8</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.5"
                  max="2.0"
                  value={params.nrrBenchmark}
                  onChange={e => handleParamChange('nrrBenchmark', parseFloat(e.target.value) || 1.05)}
                  className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                />
                <span className="text-xs font-mono font-semibold text-gray-700 w-16 text-right">
                  {(params.nrrBenchmark * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                Target Net Revenue Retention floor (e.g. 105% for Insurtech SaaS).
              </span>
            </div>

            {/* Logo Churn Max */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Logo Churn Tolerance Ceiling (<code>Param_LogoChurn_Max</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$9</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.005"
                  min="0.0"
                  max="0.2"
                  value={params.logoChurnMax}
                  onChange={e => handleParamChange('logoChurnMax', parseFloat(e.target.value) || 0.02)}
                  className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                />
                <span className="text-xs font-mono font-semibold text-gray-700 w-16 text-right">
                  {(params.logoChurnMax * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                Maximum acceptable agency account attrition per monthly cycle.
              </span>
            </div>

            {/* Demo Close Benchmark */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-800">
                  Demo to Closed-Won Win Rate Benchmark (<code>Param_Demo_Close_Benchmark</code>)
                </label>
                <span className="text-[10px] font-mono text-gray-400">Cell $C$10</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.05"
                  max="1.0"
                  value={params.demoCloseBenchmark}
                  onChange={e => handleParamChange('demoCloseBenchmark', parseFloat(e.target.value) || 0.20)}
                  className="editable-cell w-full px-3 py-2 text-xs font-mono font-semibold rounded-lg border border-yellow-200"
                />
                <span className="text-xs font-mono font-semibold text-gray-700 w-16 text-right">
                  {(params.demoCloseBenchmark * 100).toFixed(1)}%
                </span>
              </div>
              <span className="text-[10px] text-gray-400">
                AE qualification and closing health baseline across held demos.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Zone 3: Business Dimension Dictionaries (F to K columns) */}
      <div className="card-elevated p-6 border-0">
        <div className="pb-3 mb-4 border-b border-gray-100">
          <h2
            className="text-base font-semibold tracking-title"
            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
          >
            Zone 3 • Business Dimension Dictionaries (Data Validation Sources)
          </h2>
          <p className="text-[11px] text-gray-500">
            Dropdown enumeration lists for input verification and dynamic M365 array aggregation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Source Systems */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Source Systems (F Column)
            </h3>
            <div className="space-y-1.5 mb-3 max-h-40 overflow-y-auto">
              {dictionaries.sourceSystems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200 text-xs">
                  <span>{item}</span>
                  <button
                    onClick={() => handleRemoveSystem(item)}
                    className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                placeholder="New System..."
                value={newSystem}
                onChange={e => setNewSystem(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddSystem()}
                className="editable-cell text-xs px-2 py-1.5 rounded border border-yellow-200 w-full"
              />
              <button
                onClick={handleAddSystem}
                className="px-2.5 py-1.5 text-xs bg-blue-600 text-white rounded font-medium hover:bg-blue-700 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Department Taxonomy */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Department Taxonomy (H Column)
            </h3>
            <div className="space-y-1.5 mb-3 max-h-40 overflow-y-auto">
              {dictionaries.departments.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200 text-xs">
                  <span>{item}</span>
                  <button
                    onClick={() => handleRemoveDept(item)}
                    className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                placeholder="New Department..."
                value={newDept}
                onChange={e => setNewDept(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddDept()}
                className="editable-cell text-xs px-2 py-1.5 rounded border border-yellow-200 w-full"
              />
              <button
                onClick={handleAddDept}
                className="px-2.5 py-1.5 text-xs bg-blue-600 text-white rounded font-medium hover:bg-blue-700 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Expense Categories */}
          <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-100">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Expense Categories (J Column)
            </h3>
            <div className="space-y-1.5 mb-3 max-h-40 overflow-y-auto">
              {dictionaries.expenseCategories.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200 text-xs">
                  <span className="line-clamp-1">{item}</span>
                  <button
                    onClick={() => handleRemoveCategory(item)}
                    className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer shrink-0 ml-1"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                placeholder="New Category..."
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddCategory()}
                className="editable-cell text-xs px-2 py-1.5 rounded border border-yellow-200 w-full"
              />
              <button
                onClick={handleAddCategory}
                className="px-2.5 py-1.5 text-xs bg-blue-600 text-white rounded font-medium hover:bg-blue-700 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
