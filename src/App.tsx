import React, { useState } from 'react';
import { BulkCsvModal } from './components/BulkCsvModal';
import { Footer } from './components/common/Footer';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { ActiveTab, Sidebar } from './components/Sidebar';
import { CalculationEngine } from './components/sheets/CalculationEngine';
import { EstimateVsActual } from './components/sheets/EstimateVsActual';
import { ExceptionsCostActions } from './components/sheets/ExceptionsCostActions';
import { ExecutiveDashboard } from './components/sheets/ExecutiveDashboard';
import { KpiAnalysis } from './components/sheets/KpiAnalysis';
import { SettingsParams } from './components/sheets/SettingsParams';
import { WeeklyDataInput } from './components/sheets/WeeklyDataInput';
import { FinanceProvider, useFinance } from './context/FinanceContext';

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isBulkCsvOpen, setIsBulkCsvOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const { resetData } = useFinance();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Left Docked Vertical Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenBulkCsv={() => setIsBulkCsvOpen(true)}
        onOpenReset={() => setIsResetOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 sm:px-10 py-8">
          {activeTab === 'dashboard' && <ExecutiveDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'settings' && <SettingsParams />}
          {activeTab === 'input' && <WeeklyDataInput />}
          {activeTab === 'engine' && <CalculationEngine />}
          {activeTab === 'kpis' && <KpiAnalysis />}
          {activeTab === 'costActions' && <ExceptionsCostActions />}
          {activeTab === 'calibration' && <EstimateVsActual />}
        </main>

        {/* Footer Privacy Disclaimer */}
        <Footer />
      </div>

      {/* Modals */}
      <BulkCsvModal
        isOpen={isBulkCsvOpen}
        onClose={() => setIsBulkCsvOpen(false)}
      />

      <ResetConfirmModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onConfirm={resetData}
      />
    </div>
  );
};

export default function App() {
  return (
    <FinanceProvider>
      <MainContent />
    </FinanceProvider>
  );
}
