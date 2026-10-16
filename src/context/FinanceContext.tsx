import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { INITIAL_STATE } from '../data/seedData';
import {
  AppState,
  CostActionRow,
  DimensionDictionaries,
  EstimateActualRow,
  ExceptionLogRow,
  FinanceInputRow,
  GlobalParams,
  HeadcountInputRow,
  SalesInputRow,
  WaterfallInputRow
} from '../types/finance';
import { calculateAllMetrics, EngineResults } from '../utils/calculations';

const STORAGE_KEY = 'saas_finance_analyzer_state_v1';

interface FinanceContextType {
  state: AppState;
  metrics: EngineResults;
  lastSavedText: string;
  updateParams: (params: Partial<GlobalParams>) => void;
  updateDictionaries: (dicts: Partial<DimensionDictionaries>) => void;
  setFinanceInputs: (rows: FinanceInputRow[]) => void;
  setWaterfallInputs: (rows: WaterfallInputRow[]) => void;
  setSalesInputs: (rows: SalesInputRow[]) => void;
  setHeadcountInputs: (rows: HeadcountInputRow[]) => void;
  setExceptionLogs: (rows: ExceptionLogRow[]) => void;
  setCostActions: (rows: CostActionRow[]) => void;
  setEstimateActuals: (rows: EstimateActualRow[]) => void;
  exportBackup: () => void;
  importBackup: (fileContent: string) => boolean;
  bulkCsvImport: (tableKey: 'finance' | 'waterfall' | 'sales' | 'headcount' | 'costActions', csvText: string, mode: 'append' | 'replace') => { success: boolean; count: number; error?: string };
  resetData: () => void;
}

const FinanceContext = createContext<FinanceContextType | null>(null);

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.params && parsed.financeInputs) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load saved state from localStorage, falling back to seed data', e);
    }
    return INITIAL_STATE;
  });

  // Automatically save to localStorage on any state change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  }, [state]);

  // Derived instant calculations
  const metrics = useMemo(() => {
    return calculateAllMetrics(state);
  }, [state]);

  const updateTimestamp = (): string => {
    const now = new Date();
    return now.toISOString();
  };

  const lastSavedText = useMemo(() => {
    if (!state.lastSaved) return 'Just now';
    try {
      const date = new Date(state.lastSaved);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    } catch {
      return state.lastSaved;
    }
  }, [state.lastSaved]);

  const updateParams = (newParams: Partial<GlobalParams>) => {
    setState(prev => ({
      ...prev,
      params: { ...prev.params, ...newParams },
      lastSaved: updateTimestamp()
    }));
  };

  const updateDictionaries = (newDicts: Partial<DimensionDictionaries>) => {
    setState(prev => ({
      ...prev,
      dictionaries: { ...prev.dictionaries, ...newDicts },
      lastSaved: updateTimestamp()
    }));
  };

  const setFinanceInputs = (rows: FinanceInputRow[]) => {
    setState(prev => ({ ...prev, financeInputs: rows, lastSaved: updateTimestamp() }));
  };

  const setWaterfallInputs = (rows: WaterfallInputRow[]) => {
    setState(prev => ({ ...prev, waterfallInputs: rows, lastSaved: updateTimestamp() }));
  };

  const setSalesInputs = (rows: SalesInputRow[]) => {
    setState(prev => ({ ...prev, salesInputs: rows, lastSaved: updateTimestamp() }));
  };

  const setHeadcountInputs = (rows: HeadcountInputRow[]) => {
    setState(prev => ({ ...prev, headcountInputs: rows, lastSaved: updateTimestamp() }));
  };

  const setExceptionLogs = (rows: ExceptionLogRow[]) => {
    setState(prev => ({ ...prev, exceptionLogs: rows, lastSaved: updateTimestamp() }));
  };

  const setCostActions = (rows: CostActionRow[]) => {
    setState(prev => ({ ...prev, costActions: rows, lastSaved: updateTimestamp() }));
  };

  const setEstimateActuals = (rows: EstimateActualRow[]) => {
    setState(prev => ({ ...prev, estimateActuals: rows, lastSaved: updateTimestamp() }));
  };

  const exportBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    const filename = `saas-finance-backup-${state.params.reportDate}-${new Date().toISOString().slice(0, 10)}.json`;
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importBackup = (fileContent: string): boolean => {
    try {
      const parsed = JSON.parse(fileContent);
      if (parsed.params && parsed.financeInputs && parsed.waterfallInputs) {
        parsed.lastSaved = updateTimestamp();
        setState(parsed);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Import backup failed:', err);
      return false;
    }
  };

  const resetData = () => {
    const fresh = { ...INITIAL_STATE, lastSaved: updateTimestamp() };
    setState(fresh);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  };

  const bulkCsvImport = (
    tableKey: 'finance' | 'waterfall' | 'sales' | 'headcount' | 'costActions',
    csvText: string,
    mode: 'append' | 'replace'
  ): { success: boolean; count: number; error?: string } => {
    try {
      const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
      if (lines.length < 2) {
        return { success: false, count: 0, error: 'CSV must contain at least a header line and one data row.' };
      }

      const delimiter = lines[0].includes('\t') ? '\t' : ',';
      const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^["']|["']$/g, '').toLowerCase());

      const dataLines = lines.slice(1);
      const generatedRows: any[] = [];

      for (let i = 0; i < dataLines.length; i++) {
        const rawCols = dataLines[i].split(delimiter).map(c => c.trim().replace(/^["']|["']$/g, ''));
        const rowObj: Record<string, string> = {};
        headers.forEach((h, idx) => {
          rowObj[h] = rawCols[idx] || '';
        });

        const idSuffix = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);

        if (tableKey === 'finance') {
          const newRow: FinanceInputRow = {
            id: `fin-csv-${idSuffix}`,
            reportWeekEnding: rowObj['reportweekending'] || rowObj['date'] || state.params.reportDate,
            sourceSystem: rowObj['sourcesystem'] || rowObj['source'] || 'QuickBooks',
            batchTimestamp: rowObj['batchtimestamp'] || new Date().toISOString().slice(0, 16).replace('T', ' '),
            glCategory: rowObj['glcategory'] || rowObj['category'] || 'General Expense',
            accrualRevEst: parseFloat(rowObj['accrualrevest'] || rowObj['revenue'] || '0') || 0,
            accrualExpEst: parseFloat(rowObj['accrualexpest'] || rowObj['expense'] || '0') || 0
          };
          generatedRows.push(newRow);
        } else if (tableKey === 'waterfall') {
          const newRow: WaterfallInputRow = {
            id: `wf-csv-${idSuffix}`,
            reportWeekEnding: rowObj['reportweekending'] || rowObj['date'] || state.params.reportDate,
            sourceSystem: rowObj['sourcesystem'] || rowObj['source'] || 'Stripe',
            customerId: rowObj['customerid'] || rowObj['customer'] || `CUST-NEW-${i + 1}`,
            contractStartDate: rowObj['contractstartdate'] || state.params.reportDate,
            startingMrr: parseFloat(rowObj['startingmrr'] || '0') || 0,
            newMrr: parseFloat(rowObj['newmrr'] || '0') || 0,
            expansionMrr: parseFloat(rowObj['expansionmrr'] || '0') || 0,
            contractionMrr: parseFloat(rowObj['contractionmrr'] || '0') || 0,
            churnMrr: parseFloat(rowObj['churnmrr'] || '0') || 0
          };
          generatedRows.push(newRow);
        } else if (tableKey === 'sales') {
          const newRow: SalesInputRow = {
            id: `sal-csv-${idSuffix}`,
            reportWeekEnding: rowObj['reportweekending'] || rowObj['date'] || state.params.reportDate,
            sourceSystem: rowObj['sourcesystem'] || 'Salesforce',
            demosBookedCount: parseInt(rowObj['demosbookedcount'] || rowObj['booked'] || '0', 10) || 0,
            demosHeldCount: parseInt(rowObj['demosheldcount'] || rowObj['held'] || '0', 10) || 0,
            closedWonCount: parseInt(rowObj['closedwoncount'] || rowObj['won'] || '0', 10) || 0,
            forecastPipelineVal: parseInt(rowObj['forecastpipelineval'] || rowObj['forecast'] || '0', 10) || 0
          };
          generatedRows.push(newRow);
        } else if (tableKey === 'headcount') {
          const newRow: HeadcountInputRow = {
            id: `hc-csv-${idSuffix}`,
            reportWeekEnding: rowObj['reportweekending'] || state.params.reportDate,
            sourceSystem: rowObj['sourcesystem'] || 'Gusto',
            employeeId: rowObj['employeeid'] || `EMP-${i + 100}`,
            department: rowObj['department'] || 'R&D',
            hireDate: rowObj['hiredate'] || state.params.reportDate,
            terminationDate: rowObj['terminationdate'] || '',
            baseSalaryPaid: parseFloat(rowObj['basesalarypaid'] || '0') || 0,
            taxesBenefitsPaid: parseFloat(rowObj['taxesbenefitspaid'] || '0') || 0
          };
          generatedRows.push(newRow);
        } else if (tableKey === 'costActions') {
          const newRow: CostActionRow = {
            id: `act-csv-${idSuffix}`,
            actionId: rowObj['actionid'] || `ACT-${(state.costActions.length + i + 1).toString().padStart(3, '0')}`,
            issueDesc: rowObj['issuedesc'] || rowObj['description'] || 'Identified Cost Inefficiency',
            category: rowObj['category'] || 'Cloud Infrastructure & Compute',
            proposedReduction: rowObj['proposedreduction'] || 'Optimize subscription or contract tier',
            monthlySavingsEst: parseFloat(rowObj['monthlysavingsest'] || '0') || 0,
            owner: rowObj['owner'] || 'Unassigned',
            targetCloseDate: rowObj['targetclosedate'] || state.params.reportDate,
            status: (['Proposed', 'Approved', 'In Progress', 'Realized'].includes(rowObj['status']) ? rowObj['status'] : 'Proposed') as any,
            actualSavingsRealized: parseFloat(rowObj['actualsavingsrealized'] || '0') || 0
          };
          generatedRows.push(newRow);
        }
      }

      if (generatedRows.length === 0) {
        return { success: false, count: 0, error: 'No valid data rows found in CSV.' };
      }

      setState(prev => {
        let updated = { ...prev, lastSaved: updateTimestamp() };
        if (tableKey === 'finance') {
          updated.financeInputs = mode === 'replace' ? generatedRows : [...prev.financeInputs, ...generatedRows];
        } else if (tableKey === 'waterfall') {
          updated.waterfallInputs = mode === 'replace' ? generatedRows : [...prev.waterfallInputs, ...generatedRows];
        } else if (tableKey === 'sales') {
          updated.salesInputs = mode === 'replace' ? generatedRows : [...prev.salesInputs, ...generatedRows];
        } else if (tableKey === 'headcount') {
          updated.headcountInputs = mode === 'replace' ? generatedRows : [...prev.headcountInputs, ...generatedRows];
        } else if (tableKey === 'costActions') {
          updated.costActions = mode === 'replace' ? generatedRows : [...prev.costActions, ...generatedRows];
        }
        return updated;
      });

      return { success: true, count: generatedRows.length };
    } catch (err: any) {
      return { success: false, count: 0, error: err.message || 'CSV parse failure' };
    }
  };

  return (
    <FinanceContext.Provider
      value={{
        state,
        metrics,
        lastSavedText,
        updateParams,
        updateDictionaries,
        setFinanceInputs,
        setWaterfallInputs,
        setSalesInputs,
        setHeadcountInputs,
        setExceptionLogs,
        setCostActions,
        setEstimateActuals,
        exportBackup,
        importBackup,
        bulkCsvImport,
        resetData
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = (): FinanceContextType => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
