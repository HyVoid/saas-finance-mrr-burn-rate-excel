import React, { useState } from 'react';
import { Check, Copy, FileText, Upload, X } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

interface BulkCsvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TableChoice = 'finance' | 'waterfall' | 'sales' | 'headcount' | 'costActions';

const TABLE_SCHEMAS: Record<TableChoice, { name: string; sample: string; columns: string }> = {
  finance: {
    name: '03-A Financial Revenue & Expenses (Table_Inp_Finance)',
    columns: 'reportWeekEnding,sourceSystem,batchTimestamp,glCategory,accrualRevEst,accrualExpEst',
    sample: `reportWeekEnding,sourceSystem,batchTimestamp,glCategory,accrualRevEst,accrualExpEst
2026-10-09,Stripe,2026-10-09 17:00,Subscription Revenue,54200,0
2026-10-09,QuickBooks,2026-10-09 17:00,Cloud Infrastructure & Compute,0,28400
2026-10-09,QuickBooks,2026-10-09 17:00,Software & SaaS Licenses,0,11800`
  },
  waterfall: {
    name: '03-B Customer MRR Waterfall (Table_Inp_Waterfall)',
    columns: 'reportWeekEnding,sourceSystem,customerId,contractStartDate,startingMrr,newMrr,expansionMrr,contractionMrr,churnMrr',
    sample: `reportWeekEnding,sourceSystem,customerId,contractStartDate,startingMrr,newMrr,expansionMrr,contractionMrr,churnMrr
2026-10-09,PandaDoc,CUST-901 Enterprise Brokerage,2026-10-09,0,6500,0,0,0
2026-10-09,Stripe,CUST-8109 Harbor Mutual,2025-06-15,8500,0,2800,0,0
2026-10-09,Stripe,CUST-8045 Horizon Underwriters,2025-03-20,2400,0,0,0,2400`
  },
  sales: {
    name: '03-C Sales Pipeline Activity (Table_Inp_Sales)',
    columns: 'reportWeekEnding,sourceSystem,demosBookedCount,demosHeldCount,closedWonCount,forecastPipelineVal',
    sample: `reportWeekEnding,sourceSystem,demosBookedCount,demosHeldCount,closedWonCount,forecastPipelineVal
2026-10-09,Salesforce,38,31,7,8`
  },
  headcount: {
    name: '03-D Headcount & Payroll Rosters (Table_Inp_Headcount)',
    columns: 'reportWeekEnding,sourceSystem,employeeId,department,hireDate,terminationDate,baseSalaryPaid,taxesBenefitsPaid',
    sample: `reportWeekEnding,sourceSystem,employeeId,department,hireDate,terminationDate,baseSalaryPaid,taxesBenefitsPaid
2026-10-09,Gusto,EMP-104 (Liam Vance),R&D,2026-10-01,,3200,640
2026-10-09,Gusto,EMP-203 (Chloe Zhang),Sales,2026-10-01,,2800,560`
  },
  costActions: {
    name: '06 Cost Reduction Action Tracker (Table_Cost_Actions)',
    columns: 'actionId,issueDesc,category,proposedReduction,monthlySavingsEst,owner,targetCloseDate,status,actualSavingsRealized',
    sample: `actionId,issueDesc,category,proposedReduction,monthlySavingsEst,owner,targetCloseDate,status,actualSavingsRealized
ACT-005,Overallocated staging database clusters,Cloud Infrastructure & Compute,Auto-shutdown staging on off-hours,2200,Elena Rostova,2026-11-01,In Progress,0`
  }
};

export const BulkCsvModal: React.FC<BulkCsvModalProps> = ({ isOpen, onClose }) => {
  const { bulkCsvImport } = useFinance();
  const [selectedTable, setSelectedTable] = useState<TableChoice>('finance');
  const [csvText, setCsvText] = useState('');
  const [mode, setMode] = useState<'append' | 'replace'>('append');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentSchema = TABLE_SCHEMAS[selectedTable];

  const handleCopySample = () => {
    navigator.clipboard.writeText(currentSchema.sample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target?.result as string;
      setCsvText(text || '');
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    setStatusMessage(null);
    if (!csvText.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter or upload CSV data.' });
      return;
    }

    const result = bulkCsvImport(selectedTable, csvText, mode);
    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: `Successfully imported ${result.count} rows into ${currentSchema.name} (${mode === 'append' ? 'Appended' : 'Replaced'}).`
      });
      setCsvText('');
      setTimeout(() => {
        onClose();
      }, 1400);
    } else {
      setStatusMessage({ type: 'error', text: result.error || 'Import failed.' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(5, 28, 44, 0.4)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 relative border max-h-[90vh] flex flex-col"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
              Bulk CSV Data Import
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Import raw snapshots or batch finance logs into structured Excel tables
            </p>
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto pr-1">
          {/* Target Table Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--color-primary)' }}>
              Target Table Destination
            </label>
            <select
              value={selectedTable}
              onChange={e => {
                setSelectedTable(e.target.value as TableChoice);
                setStatusMessage(null);
              }}
              className="w-full text-xs p-2.5 rounded-lg border bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-body-text)' }}
            >
              <option value="finance">03-A Financial Revenue &amp; Expenses (Table_Inp_Finance)</option>
              <option value="waterfall">03-B Customer MRR Waterfall (Table_Inp_Waterfall)</option>
              <option value="sales">03-C Sales Pipeline Activity (Table_Inp_Sales)</option>
              <option value="headcount">03-D Headcount &amp; Payroll Rosters (Table_Inp_Headcount)</option>
              <option value="costActions">06 Cost Reduction Action Tracker (Table_Cost_Actions)</option>
            </select>
          </div>

          {/* Mode switch */}
          <div className="flex items-center gap-4 text-xs">
            <span className="font-semibold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
              Import Mode:
            </span>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                checked={mode === 'append'}
                onChange={() => setMode('append')}
                className="text-blue-600"
              />
              <span>Append to existing records</span>
            </label>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="importMode"
                checked={mode === 'replace'}
                onChange={() => setMode('replace')}
                className="text-blue-600"
              />
              <span>Replace entire table</span>
            </label>
          </div>

          {/* Sample Format */}
          <div className="p-3 rounded-lg border text-xs" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-gray-700">Expected CSV Header Format:</span>
              <button
                onClick={handleCopySample}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy Sample Template'}
              </button>
            </div>
            <pre className="font-mono text-[11px] p-2 bg-white rounded border overflow-x-auto text-gray-800" style={{ borderColor: 'var(--color-border)' }}>
              {currentSchema.sample}
            </pre>
          </div>

          {/* File Upload or Direct Paste */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                Paste CSV Content
              </label>
              <label className="text-[11px] font-medium text-blue-600 hover:text-blue-800 cursor-pointer inline-flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Upload .csv file</span>
                <input type="file" accept=".csv,.txt,.tsv" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
            <textarea
              rows={6}
              value={csvText}
              onChange={e => setCsvText(e.target.value)}
              placeholder="Paste comma or tab-separated rows here with headers on line 1..."
              className="w-full text-xs font-mono p-3 rounded-lg border bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-body-text)' }}
            />
          </div>

          {statusMessage && (
            <div
              className={`p-3 rounded-lg text-xs font-medium ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
            >
              {statusMessage.text}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-body-text)' }}
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            className="px-5 py-2 text-xs font-semibold rounded-lg text-white hover:opacity-90 cursor-pointer transition-all"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            Execute CSV Import
          </button>
        </div>
      </div>
    </div>
  );
};
