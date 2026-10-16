import React, { useRef, useState } from 'react';
import {
  Activity,
  Calendar,
  Calculator,
  Check,
  ChevronRight,
  Database,
  Download,
  FileSpreadsheet,
  Gauge,
  Menu,
  RotateCcw,
  ShieldCheck,
  Sliders,
  Sparkles,
  TrendingUp,
  Upload,
  UploadCloud,
  X
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export type ActiveTab =
  | 'dashboard'
  | 'settings'
  | 'input'
  | 'engine'
  | 'kpis'
  | 'costActions'
  | 'calibration';

interface SidebarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenBulkCsv: () => void;
  onOpenReset: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  onOpenBulkCsv,
  onOpenReset
}) => {
  const { state, lastSavedText, exportBackup, importBackup } = useFinance();
  const { params } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importNotice, setImportNotice] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const content = ev.target?.result as string;
      const ok = importBackup(content);
      if (ok) {
        setImportNotice('Backup successfully restored!');
        setTimeout(() => setImportNotice(null), 3000);
      } else {
        alert('Invalid backup JSON file schema. Restoration cancelled.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const navTabs: { id: ActiveTab; sheetNo: string; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'dashboard',
      sheetNo: '01',
      label: 'Executive Dashboard',
      desc: 'CEO Cockpit & Burn Control',
      icon: <Gauge className="w-4 h-4" />
    },
    {
      id: 'settings',
      sheetNo: '02',
      label: 'Settings & Params',
      desc: 'Global Constants & Dictionaries',
      icon: <Sliders className="w-4 h-4" />
    },
    {
      id: 'input',
      sheetNo: '03',
      label: 'Weekly Data Input',
      desc: 'Multi-System Raw Snapshots',
      icon: <FileSpreadsheet className="w-4 h-4" />
    },
    {
      id: 'engine',
      sheetNo: '04',
      label: 'Calculation Engine',
      desc: 'Formulas & Identity Audit',
      icon: <Calculator className="w-4 h-4" />
    },
    {
      id: 'kpis',
      sheetNo: '05',
      label: 'KPI Deep-Dive',
      desc: '5 Modular Diagnostic Views',
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      id: 'costActions',
      sheetNo: '06',
      label: 'Cost Actions & Logs',
      desc: 'Variances & Runway Savings',
      icon: <Activity className="w-4 h-4" />
    },
    {
      id: 'calibration',
      sheetNo: '07',
      label: 'Estimate vs Actual',
      desc: 'CPA Closed Ledger Review',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const handleSelectTab = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileOpen(false);
  };

  const currentTabObj = navTabs.find(t => t.id === activeTab) || navTabs[0];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between overflow-y-auto no-scrollbar">
      {/* Top Part: Brand + Navigation */}
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-sm shrink-0"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              SF
            </div>
            <div className="min-w-0">
              <h2
                className="font-bold text-sm leading-tight tracking-tight truncate"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                SaaS Finance Controller
              </h2>
              <div className="text-[10px] tracking-wider uppercase font-semibold text-gray-400">
                M365 Variance Analyzer
              </div>
            </div>
          </div>

          {/* Model Status Pill */}
          <div className="mt-3.5 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between text-[11px]">
            <span className="text-gray-500 font-mono flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-blue-600" />
              <span>{params.reportDate}</span>
            </span>
            <span className="text-gray-400 font-mono text-[10px]">
              {params.currencySymbol} USD Base
            </span>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="px-3 py-4">
          <div className="px-3 mb-2 text-[10px] uppercase font-bold tracking-header text-gray-400">
            Excel Workbook Sheets
          </div>

          <nav className="space-y-1">
            {navTabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-3 relative cursor-pointer group ${
                    isActive
                      ? 'bg-blue-50/70 text-blue-700 shadow-sm font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {/* Left Accent indicator for active state */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                  )}

                  <div
                    className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                    }`}
                  >
                    {tab.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-gray-400">{tab.sheetNo}</span>
                      <span className="truncate">{tab.label}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 truncate font-normal">
                      {tab.desc}
                    </div>
                  </div>

                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Data & Storage Utilities Section */}
        <div className="px-3 py-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <div className="px-3 mb-2 text-[10px] uppercase font-bold tracking-header text-gray-400 flex items-center justify-between">
            <span>Storage &amp; Data Tools</span>
            <Database className="w-3 h-3 text-gray-400" />
          </div>

          {/* Last Saved Card */}
          <div className="mx-2 mb-2 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
            <div className="flex items-center justify-between text-[11px] mb-1">
              <span className="font-semibold text-gray-700">Local Persistence</span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            <div className="text-[10px] font-mono text-gray-500">
              Last saved: {lastSavedText}
            </div>
          </div>

          <div className="space-y-1 px-1">
            <button
              onClick={onOpenBulkCsv}
              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
              <span>Bulk CSV Import</span>
            </button>

            <button
              onClick={exportBackup}
              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-gray-600" />
              <span>Export JSON Backup</span>
            </button>

            <label
              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-gray-600" />
              <span>Import Backup JSON</span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <button
              onClick={onOpenReset}
              className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-red-600" />
              <span>Reset to Seed Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="p-4 border-t text-[11px] text-gray-400 bg-gray-50/50" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-1.5 text-gray-600 mb-0.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="font-medium">100% Client-Side Engine</span>
        </div>
        <div className="text-[10px] leading-tight">
          All financial calculations and storage run inside your browser.
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header */}
      <div
        className="lg:hidden sticky top-0 z-40 w-full bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center font-bold text-white text-[10px]"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              SF
            </div>
            <span
              className="font-bold text-xs"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              {currentTabObj.label}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded border">
            {lastSavedText}
          </span>
          <button
            onClick={onOpenBulkCsv}
            className="p-1 rounded text-blue-600 hover:bg-blue-50"
            title="Bulk CSV"
          >
            <UploadCloud className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Fixed/Sticky Left Sidebar (270px width) */}
      <aside
        className="hidden lg:block w-[270px] shrink-0 sticky top-0 h-screen bg-white border-r z-30"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {sidebarContent}
      </aside>

      {/* Toast Notification */}
      {importNotice && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white text-xs px-4 py-2.5 rounded-lg shadow-lg animate-fade-up flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{importNotice}</span>
        </div>
      )}
    </>
  );
};
