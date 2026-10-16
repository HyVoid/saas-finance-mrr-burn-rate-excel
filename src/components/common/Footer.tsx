import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="mt-16 py-6 border-t text-center"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'transparent'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]" style={{ color: 'var(--color-muted)' }}>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Privacy &amp; Security Notice:</strong> All data storage and computations in this tool operate strictly within your local browser storage (<code className="px-1 py-0.5 rounded bg-black/5 font-mono text-[11px]">localStorage</code>). This web application does not store, transmit, or retain any user financial data on any external server.
          </span>
        </div>
        <div className="text-[11px] font-mono shrink-0">
          Weekly SaaS Finance Control &amp; Variance Engine • M365 Dynamic Array Spec
        </div>
      </div>
    </footer>
  );
};
