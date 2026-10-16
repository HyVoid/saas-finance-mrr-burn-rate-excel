import React, { useState } from 'react';
import {
  Activity,
  AlertOctagon,
  CheckCircle2,
  DollarSign,
  Filter,
  Plus,
  ShieldAlert,
  Trash2
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { CostActionRow, ExceptionLogRow } from '../../types/finance';
import { formatCurrency, formatPercent } from '../../utils/calculations';
import { InsightCard } from '../common/InsightCard';
import { StatusPill } from '../common/StatusPill';

export const ExceptionsCostActions: React.FC = () => {
  const { state, metrics, setExceptionLogs, setCostActions } = useFinance();
  const { params, dictionaries, exceptionLogs, costActions } = state;
  const { costActionsSummary } = metrics;

  const [filterUnexplainedOnly, setFilterUnexplainedOnly] = useState(false);
  const [actionStatusFilter, setActionStatusFilter] = useState<string>('All');

  // Handlers for Part A: Exceptions Log
  const handleUpdateException = (id: string, field: keyof ExceptionLogRow, val: any) => {
    setExceptionLogs(
      exceptionLogs.map(item => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const handleAddException = () => {
    const newLog: ExceptionLogRow = {
      id: `exp-new-${Date.now()}`,
      reportWeekEnding: params.reportDate,
      moduleName: dictionaries.moduleNames[0] || 'Financial Burn & Accrual',
      itemName: 'New Operational Variance Detected',
      primaryAmount: 15000,
      benchmarkAmount: 12000,
      variancePct: 0.25,
      isFlagged: true,
      explanation: '',
      auditApproval: 'Pending Review'
    };
    setExceptionLogs([...exceptionLogs, newLog]);
  };

  const handleDeleteException = (id: string) => {
    setExceptionLogs(exceptionLogs.filter(item => item.id !== id));
  };

  // Handlers for Part B: Cost Actions
  const handleUpdateCostAction = (id: string, field: keyof CostActionRow, val: any) => {
    setCostActions(
      costActions.map(action => (action.id === id ? { ...action, [field]: val } : action))
    );
  };

  const handleAddCostAction = () => {
    const nextId = `ACT-${(costActions.length + 1).toString().padStart(3, '0')}`;
    const newAction: CostActionRow = {
      id: `act-new-${Date.now()}`,
      actionId: nextId,
      issueDesc: 'Identified redundant or unoptimized expense stream',
      category: dictionaries.expenseCategories[0] || 'Cloud Infrastructure & Compute',
      proposedReduction: 'Rightsize contract or eliminate duplicate license seats',
      monthlySavingsEst: 2500,
      owner: 'Unassigned VP',
      targetCloseDate: params.reportDate,
      status: 'Proposed',
      actualSavingsRealized: 0
    };
    setCostActions([...costActions, newAction]);
  };

  const handleDeleteCostAction = (id: string) => {
    setCostActions(costActions.filter(action => action.id !== id));
  };

  const displayedExceptions = filterUnexplainedOnly
    ? exceptionLogs.filter(e => e.isFlagged && !e.explanation.trim())
    : exceptionLogs;

  const displayedActions = actionStatusFilter === 'All'
    ? costActions
    : costActions.filter(a => a.status === actionStatusFilter);

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">
            Sheet 06 • Material Exceptions &amp; Cost Reduction Execution Tracker
          </span>
          <span className="text-[11px] text-gray-500 font-mono">
            Compulsory Governance &amp; Action Loop
          </span>
        </div>
        <h1
          className="text-2xl md:text-3xl font-semibold tracking-title"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
        >
          Variance Audit &amp; Cost Reduction Management
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Bridging financial diagnosis directly into executive action: Every material deviation requires a written reason; every cost anomaly is tracked until monthly cash savings are physically realized.
        </p>
      </div>

      {/* PART A: Material Variances & Written Explanations Log */}
      <div className="card-elevated p-6 border-0 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Part A • Material Variances &amp; Written Explanations (Table_Exceptions_Log)
              </h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 font-mono">
                &gt; {formatPercent(params.varianceThreshold)} Threshold
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Mandatory written attribution required before Monday EOD board briefing
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterUnexplainedOnly(!filterUnexplainedOnly)}
              className={`px-3 py-1.5 text-xs rounded-lg border font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                filterUnexplainedOnly
                  ? 'bg-red-50 border-red-300 text-red-700'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Unexplained Only ({exceptionLogs.filter(e => e.isFlagged && !e.explanation.trim()).length})</span>
            </button>
            <button
              onClick={handleAddException}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Log Material Variance</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Cutoff &amp; Module</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Item Description</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Observed</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Benchmark</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Variance %</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Mandatory Written Explanation</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Audit Status</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedExceptions.map(item => (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-3 px-3 whitespace-nowrap">
                    <div className="font-mono text-gray-500 text-[11px]">{item.reportWeekEnding}</div>
                    <div className="font-semibold text-gray-900 line-clamp-1">{item.moduleName}</div>
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="text"
                      value={item.itemName}
                      onChange={e => handleUpdateException(item.id, 'itemName', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-48 border border-yellow-200 font-medium"
                    />
                  </td>
                  <td className="py-3 px-2 text-right font-mono font-semibold text-gray-900">
                    <input
                      type="number"
                      value={item.primaryAmount}
                      onChange={e => {
                        const prim = parseFloat(e.target.value) || 0;
                        const vPct = item.benchmarkAmount > 0 ? Math.abs(prim - item.benchmarkAmount) / item.benchmarkAmount : 0;
                        handleUpdateException(item.id, 'primaryAmount', prim);
                        handleUpdateException(item.id, 'variancePct', vPct);
                        handleUpdateException(item.id, 'isFlagged', vPct >= params.varianceThreshold);
                      }}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-2 text-right font-mono text-gray-600">
                    <input
                      type="number"
                      value={item.benchmarkAmount}
                      onChange={e => {
                        const bench = parseFloat(e.target.value) || 0;
                        const vPct = bench > 0 ? Math.abs(item.primaryAmount - bench) / bench : 0;
                        handleUpdateException(item.id, 'benchmarkAmount', bench);
                        handleUpdateException(item.id, 'variancePct', vPct);
                        handleUpdateException(item.id, 'isFlagged', vPct >= params.varianceThreshold);
                      }}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200"
                    />
                  </td>
                  <td className="py-3 px-2 text-right font-mono font-bold text-red-700 whitespace-nowrap">
                    +{formatPercent(item.variancePct)}
                  </td>
                  <td className="py-3 px-3">
                    <textarea
                      rows={2}
                      value={item.explanation}
                      onChange={e => handleUpdateException(item.id, 'explanation', e.target.value)}
                      placeholder="Enter detailed root cause (e.g. cloud batch true-up, deal slipped to Monday)..."
                      className="editable-cell text-xs p-2 rounded w-full border border-yellow-200 font-sans leading-relaxed"
                    />
                  </td>
                  <td className="py-3 px-2 text-center whitespace-nowrap">
                    <select
                      value={item.auditApproval}
                      onChange={e => handleUpdateException(item.id, 'auditApproval', e.target.value as any)}
                      className="editable-cell text-xs px-2 py-1 rounded border border-yellow-200 bg-white"
                    >
                      <option value="Approved">Approved</option>
                      <option value="Action Needed">Action Needed</option>
                      <option value="Pending Review">Pending Review</option>
                    </select>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <button
                      onClick={() => handleDeleteException(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
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

      {/* PART B: Cost Reduction Action Items Tracker */}
      <div className="card-elevated p-6 border-0 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
                Part B • Cost Reduction Action Items Tracker (Table_Cost_Actions)
              </h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800">
                Runway Protection Loop
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Assigned owners, target closure dates, and tangible monthly savings commitments
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter by Status */}
            <select
              value={actionStatusFilter}
              onChange={e => setActionStatusFilter(e.target.value)}
              className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
            >
              <option value="All">All Statuses ({costActions.length})</option>
              <option value="Proposed">Proposed</option>
              <option value="Approved">Approved</option>
              <option value="In Progress">In Progress</option>
              <option value="Realized">Realized</option>
            </select>

            <button
              onClick={handleAddCostAction}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Cost Action</span>
            </button>
          </div>
        </div>

        {/* Aggregation Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-blue-900 mb-1">
              In-Progress Monthly Potential Savings (OUT-17)
            </div>
            <div
              className="text-2xl font-bold font-mono"
              style={{ color: 'var(--color-accent)' }}
            >
              {formatCurrency(costActionsSummary.inProgressSavings, params.currencySymbol)}/mo
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              {costActionsSummary.countInProgress} actions actively executing
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <div className="text-[11px] font-semibold uppercase tracking-header text-emerald-900 mb-1">
              Physically Realized Cash Savings
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-700">
              {formatCurrency(costActionsSummary.realizedSavings, params.currencySymbol)}/mo
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              {costActionsSummary.countRealized} actions closed &amp; audited
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div className="text-[11px] font-semibold uppercase tracking-header text-gray-700 mb-1">
              Total Potential Annualized Runway Gain
            </div>
            <div className="text-2xl font-bold font-mono text-gray-900">
              {formatCurrency(costActionsSummary.totalPotentialSavings * 12, params.currencySymbol)}/yr
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              Annualized capital recovery impact
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--table-header-sep)', backgroundColor: 'var(--table-header-bg)' }}>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header">ID</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Inefficiency Description</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Category</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Proposed Reduction Action</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Est. Savings/mo</th>
                <th className="py-2.5 px-3 font-semibold uppercase tracking-header">Owner</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header">Target Date</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Status</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-right">Realized/mo</th>
                <th className="py-2.5 px-2 font-semibold uppercase tracking-header text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedActions.map(action => (
                <tr key={action.id} className="hover:bg-gray-50/50">
                  <td className="py-2.5 px-2 font-mono font-semibold text-gray-800">
                    {action.actionId}
                  </td>
                  <td className="py-2.5 px-3">
                    <input
                      type="text"
                      value={action.issueDesc}
                      onChange={e => handleUpdateCostAction(action.id, 'issueDesc', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-56 border border-yellow-200"
                    />
                  </td>
                  <td className="py-2.5 px-3">
                    <select
                      value={action.category}
                      onChange={e => handleUpdateCostAction(action.id, 'category', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-44 border border-yellow-200 bg-white"
                    >
                      {dictionaries.expenseCategories.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </td>
                  <td className="py-2.5 px-3">
                    <input
                      type="text"
                      value={action.proposedReduction}
                      onChange={e => handleUpdateCostAction(action.id, 'proposedReduction', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-56 border border-yellow-200"
                    />
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono font-semibold">
                    <input
                      type="number"
                      step="100"
                      value={action.monthlySavingsEst}
                      onChange={e => handleUpdateCostAction(action.id, 'monthlySavingsEst', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 font-bold text-gray-900"
                    />
                  </td>
                  <td className="py-2.5 px-3">
                    <input
                      type="text"
                      value={action.owner}
                      onChange={e => handleUpdateCostAction(action.id, 'owner', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-36 border border-yellow-200 font-medium text-gray-900"
                    />
                  </td>
                  <td className="py-2.5 px-2">
                    <input
                      type="date"
                      value={action.targetCloseDate}
                      onChange={e => handleUpdateCostAction(action.id, 'targetCloseDate', e.target.value)}
                      className="editable-cell text-xs px-2 py-1 rounded w-32 border border-yellow-200 font-mono"
                    />
                  </td>
                  <td className="py-2.5 px-2 text-center whitespace-nowrap">
                    <select
                      value={action.status}
                      onChange={e => handleUpdateCostAction(action.id, 'status', e.target.value as any)}
                      className="editable-cell text-xs px-2 py-1 rounded border border-yellow-200 bg-white font-medium"
                    >
                      <option value="Proposed">Proposed</option>
                      <option value="Approved">Approved</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Realized">Realized</option>
                    </select>
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono">
                    <input
                      type="number"
                      step="100"
                      value={action.actualSavingsRealized}
                      onChange={e => handleUpdateCostAction(action.id, 'actualSavingsRealized', parseFloat(e.target.value) || 0)}
                      className="editable-cell text-xs text-right px-2 py-1 rounded w-24 border border-yellow-200 font-bold text-emerald-800"
                    />
                  </td>
                  <td className="py-2.5 px-2 text-center">
                    <button
                      onClick={() => handleDeleteCostAction(action.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer p-1"
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
    </div>
  );
};
