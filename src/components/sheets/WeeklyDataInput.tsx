import React, { useState } from 'react';
import {
  Calendar,
  DollarSign,
  FileSpreadsheet,
  Filter,
  Plus,
  Trash2,
  Users
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import {
  FinanceInputRow,
  HeadcountInputRow,
  SalesInputRow,
  WaterfallInputRow
} from '../../types/finance';
import { formatCurrency } from '../../utils/calculations';
import { DataBar } from '../common/DataBar';
import { InsightCard } from '../common/InsightCard';

type InputSubTab = 'finance' | 'waterfall' | 'sales' | 'headcount';

export const WeeklyDataInput: React.FC = () => {
  const {
    state,
    setFinanceInputs,
    setWaterfallInputs,
    setSalesInputs,
    setHeadcountInputs
  } = useFinance();

  const { params, dictionaries, financeInputs, waterfallInputs, salesInputs, headcountInputs } = state;
  const [activeTable, setActiveTable] = useState<InputSubTab>('finance');
  const [filterCurrentWeekOnly, setFilterCurrentWeekOnly] = useState(false);

  // 1. Handlers for Finance Table
  const handleUpdateFinanceRow = (id: string, field: keyof FinanceInputRow, val: any) => {
    setFinanceInputs(
      financeInputs.map(r => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleAddFinanceRow = () => {
    const newRow: FinanceInputRow = {
      id: `fin-new-${Date.now()}`,
      reportWeekEnding: params.reportDate,
      sourceSystem: dictionaries.sourceSystems[0] || 'QuickBooks',
      batchTimestamp: `${params.reportDate} 17:00`,
      glCategory: dictionaries.expenseCategories[0] || 'Cloud Infrastructure & Compute',
      accrualRevEst: 0,
      accrualExpEst: 5000
    };
    setFinanceInputs([...financeInputs, newRow]);
  };

  const handleDeleteFinanceRow = (id: string) => {
    setFinanceInputs(financeInputs.filter(r => r.id !== id));
  };

  // 2. Handlers for Waterfall Table
  const handleUpdateWaterfallRow = (id: string, field: keyof WaterfallInputRow, val: any) => {
    setWaterfallInputs(
      waterfallInputs.map(r => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleAddWaterfallRow = () => {
    const newRow: WaterfallInputRow = {
      id: `wf-new-${Date.now()}`,
      reportWeekEnding: params.reportDate,
      sourceSystem: 'PandaDoc',
      customerId: `CUST-${Math.floor(8000 + Math.random() * 900)} New Agency`,
      contractStartDate: params.reportDate,
      startingMrr: 0,
      newMrr: 3000,
      expansionMrr: 0,
      contractionMrr: 0,
      churnMrr: 0
    };
    setWaterfallInputs([...waterfallInputs, newRow]);
  };

  const handleDeleteWaterfallRow = (id: string) => {
    setWaterfallInputs(waterfallInputs.filter(r => r.id !== id));
  };

  // 3. Handlers for Sales Table
  const handleUpdateSalesRow = (id: string, field: keyof SalesInputRow, val: any) => {
    setSalesInputs(
      salesInputs.map(r => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleAddSalesRow = () => {
    const newRow: SalesInputRow = {
      id: `sal-new-${Date.now()}`,
      reportWeekEnding: params.reportDate,
      sourceSystem: 'Salesforce',
      demosBookedCount: 30,
      demosHeldCount: 25,
      closedWonCount: 5,
      forecastPipelineVal: 6
    };
    setSalesInputs([...salesInputs, newRow]);
  };

  const handleDeleteSalesRow = (id: string) => {
    setSalesInputs(salesInputs.filter(r => r.id !== id));
  };

  // 4. Handlers for Headcount Table
  const handleUpdateHeadcountRow = (id: string, field: keyof HeadcountInputRow, val: any) => {
    setHeadcountInputs(
      headcountInputs.map(r => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleAddHeadcountRow = () => {
    const newRow: HeadcountInputRow = {
      id: `hc-new-${Date.now()}`,
      reportWeekEnding: params.reportDate,
      sourceSystem: 'Gusto',
      employeeId: `EMP-${Math.floor(100 + Math.random() * 800)} (New Hire)`,
      department: dictionaries.departments[0] || 'R&D',
      hireDate: params.reportDate,
      terminationDate: '',
      baseSalaryPaid: 2800,
      taxesBenefitsPaid: 560
    };
    setHeadcountInputs([...headcountInputs, newRow]);
  };

  const handleDeleteHeadcountRow = (id: string) => {
    setHeadcountInputs(headcountInputs.filter(r => r.id !== id));
  };

  // Filtered views
  const displayFinance = filterCurrentWeekOnly
    ? financeInputs.filter(r => r.reportWeekEnding === params.reportDate)
    : financeInputs;

  const displayWaterfall = filterCurrentWeekOnly
    ? waterfallInputs.filter(r => r.reportWeekEnding === params.reportDate)
    : waterfallInputs;

  const displaySales = filterCurrentWeekOnly
    ? salesInputs.filter(r => r.reportWeekEnding === params.reportDate)
    : salesInputs;

  const displayHeadcount = filterCurrentWeekOnly
    ? headcountInputs.filter(r => r.reportWeekEnding === params.reportDate)
    : headcountInputs;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 03 • Weekly Multi-System Data Input Platform
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            Structured Excel Tables (ListObject Spec)
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl md:text-3xl font-semibold tracking-title"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Standardized Input Tables (IN-01 to IN-23)
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Direct paste or edit operational data from QuickBooks, Stripe, Salesforce, PandaDoc, Gusto &amp; Deel.
              Pale yellow cells (<code>#FFFDE7</code>) are editable; changes immediately refresh all formulas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterCurrentWeekOnly(!filterCurrentWeekOnly)}
              className={`px-3 py-1.5 text-xs rounded-lg border font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                filterCurrentWeekOnly
                  ? 'bg-blue-50 border-blue-300 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Current Week ({params.reportDate}) Only</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-table Switcher */}
      <div className="flex border-b border-gray-200 gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTable('finance')}
          className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTable === 'finance'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <DollarSign className="w-3.5 h-3.5" />
          <span>Table_Inp_Finance ({displayFinance.length})</span>
        </button>
        <button
          onClick={() => setActiveTable('waterfall')}
          className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTable === 'waterfall'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Table_Inp_Waterfall ({displayWaterfall.length})</span>
        </button>
        <button
          onClick={() => setActiveTable('sales')}
          className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTable === 'sales'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Table_Inp_Sales ({displaySales.length})</span>
        </button>
        <button
          onClick={() => setActiveTable('headcount')}
          className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap ${
            activeTable === 'headcount'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Table_Inp_Headcount ({displayHeadcount.length})</span>
        </button>
      </div>

      {/* TABLE 1: FINANCE INPUT */}
      {activeTable === 'finance' && (
        <div className="card-elevated p-6 border-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Table_Inp_Finance • Accrual Revenue &amp; Operating Expenses Snapshot
              </h2>
              <p className="text-xs text-gray-500">
                Sources: QuickBooks Online &amp; Stripe • Drives Current Week Net Burn &amp; MTD Burn
              </p>
            </div>
            <button
              onClick={handleAddFinanceRow}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Finance Row</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Cutoff Date</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Source</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Batch Timestamp</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">GL Category</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Est. Revenue ({params.currencySymbol})</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Est. Expense ({params.currencySymbol})</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono">
                {displayFinance.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50/50">
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.reportWeekEnding}
                        onChange={e => handleUpdateFinanceRow(row.id, 'reportWeekEnding', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1">
                      <select
                        value={row.sourceSystem}
                        onChange={e => handleUpdateFinanceRow(row.id, 'sourceSystem', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-28 border border-yellow-200 bg-transparent font-sans"
                      >
                        {dictionaries.sourceSystems.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 px-1">
                      <input
                        type="text"
                        value={row.batchTimestamp}
                        onChange={e => handleUpdateFinanceRow(row.id, 'batchTimestamp', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-36 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <input
                        type="text"
                        value={row.glCategory}
                        onChange={e => handleUpdateFinanceRow(row.id, 'glCategory', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-48 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.accrualRevEst}
                        onChange={e => handleUpdateFinanceRow(row.id, 'accrualRevEst', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-28 border border-yellow-200 font-semibold text-emerald-800"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.accrualExpEst}
                        onChange={e => handleUpdateFinanceRow(row.id, 'accrualExpEst', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-28 border border-yellow-200 font-semibold text-gray-900"
                      />
                    </td>
                    <td className="py-2 px-1 text-center">
                      <button
                        onClick={() => handleDeleteFinanceRow(row.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                        title="Delete row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TABLE 2: WATERFALL INPUT */}
      {activeTable === 'waterfall' && (
        <div className="card-elevated p-6 border-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Table_Inp_Waterfall • Customer MRR Movements &amp; Retention Snapshot
              </h2>
              <p className="text-xs text-gray-500">
                Sources: PandaDoc, Stripe &amp; Salesforce • Strict SaaS Identity: Ending = Starting + New + Exp - Cont - Churn
              </p>
            </div>
            <button
              onClick={handleAddWaterfallRow}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Customer Movement</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Cutoff</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Customer Account ID</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Start Date</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Start MRR</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">New MRR</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Expansion</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Contraction</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Churn MRR</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono">
                {displayWaterfall.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50/50">
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.reportWeekEnding}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'reportWeekEnding', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <input
                        type="text"
                        value={row.customerId}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'customerId', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-52 border border-yellow-200 font-medium text-gray-900"
                      />
                    </td>
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.contractStartDate}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'contractStartDate', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.startingMrr}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'startingMrr', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.newMrr}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'newMrr', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-blue-700 font-semibold"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.expansionMrr}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'expansionMrr', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-emerald-700 font-semibold"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.contractionMrr}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'contractionMrr', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-red-700 font-semibold"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.churnMrr}
                        onChange={e => handleUpdateWaterfallRow(row.id, 'churnMrr', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-red-700 font-semibold"
                      />
                    </td>
                    <td className="py-2 px-1 text-center">
                      <button
                        onClick={() => handleDeleteWaterfallRow(row.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                        title="Delete row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TABLE 3: SALES FUNNEL INPUT */}
      {activeTable === 'sales' && (
        <div className="card-elevated p-6 border-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Table_Inp_Sales • Sales Pipeline &amp; Conversion Activity
              </h2>
              <p className="text-xs text-gray-500">
                Source: Salesforce CRM • Drives Demo Held Ratio, Held-to-Won Win Rate, and Forecast Deviations
              </p>
            </div>
            <button
              onClick={handleAddSalesRow}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Funnel Snapshot</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Cutoff Date</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Source System</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Demos Booked</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Demos Held</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Closed Won</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Forecast Won Target</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono">
                {displaySales.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50/50">
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.reportWeekEnding}
                        onChange={e => handleUpdateSalesRow(row.id, 'reportWeekEnding', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <input
                        type="text"
                        value={row.sourceSystem}
                        onChange={e => handleUpdateSalesRow(row.id, 'sourceSystem', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-28 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        value={row.demosBookedCount}
                        onChange={e => handleUpdateSalesRow(row.id, 'demosBookedCount', parseInt(e.target.value, 10) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        value={row.demosHeldCount}
                        onChange={e => handleUpdateSalesRow(row.id, 'demosHeldCount', parseInt(e.target.value, 10) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        value={row.closedWonCount}
                        onChange={e => handleUpdateSalesRow(row.id, 'closedWonCount', parseInt(e.target.value, 10) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 font-semibold text-emerald-800"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        value={row.forecastPipelineVal}
                        onChange={e => handleUpdateSalesRow(row.id, 'forecastPipelineVal', parseInt(e.target.value, 10) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-gray-700"
                      />
                    </td>
                    <td className="py-2 px-1 text-center">
                      <button
                        onClick={() => handleDeleteSalesRow(row.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                        title="Delete row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TABLE 4: HEADCOUNT & PAYROLL INPUT */}
      {activeTable === 'headcount' && (
        <div className="card-elevated p-6 border-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Table_Inp_Headcount • Payroll &amp; Department Comp Package Roster
              </h2>
              <p className="text-xs text-gray-500">
                Sources: Gusto &amp; Deel • Drives dynamic department compensation aggregation &amp; per-head metrics
              </p>
            </div>
            <button
              onClick={handleAddHeadcountRow}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Employee Record</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Cutoff</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Source</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Employee ID / Name</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Department</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Hire Date</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Base Salary ({params.currencySymbol})</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Taxes &amp; Benefits ({params.currencySymbol})</th>
                  <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono">
                {displayHeadcount.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50/50">
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.reportWeekEnding}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'reportWeekEnding', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <select
                        value={row.sourceSystem}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'sourceSystem', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-24 border border-yellow-200 bg-transparent font-sans"
                      >
                        <option value="Gusto">Gusto</option>
                        <option value="Deel">Deel</option>
                      </select>
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <input
                        type="text"
                        value={row.employeeId}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'employeeId', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-44 border border-yellow-200 font-medium text-gray-900"
                      />
                    </td>
                    <td className="py-2 px-1 font-sans">
                      <select
                        value={row.department}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'department', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-36 border border-yellow-200 bg-transparent"
                      >
                        {dictionaries.departments.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 px-1">
                      <input
                        type="date"
                        value={row.hireDate}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'hireDate', e.target.value)}
                        className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="100"
                        value={row.baseSalaryPaid}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'baseSalaryPaid', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 font-semibold text-gray-900"
                      />
                    </td>
                    <td className="py-2 px-1 text-right">
                      <input
                        type="number"
                        step="50"
                        value={row.taxesBenefitsPaid}
                        onChange={e => handleUpdateHeadcountRow(row.id, 'taxesBenefitsPaid', parseFloat(e.target.value) || 0)}
                        className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 text-gray-700"
                      />
                    </td>
                    <td className="py-2 px-1 text-center">
                      <button
                        onClick={() => handleDeleteHeadcountRow(row.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                        title="Delete row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
