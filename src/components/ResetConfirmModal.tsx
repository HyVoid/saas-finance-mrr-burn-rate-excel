import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(5, 28, 44, 0.4)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 relative border"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-full bg-red-50 text-red-600">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
              Reset All Financial Data?
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Restore original Insurtech SaaS baseline template
            </p>
          </div>
        </div>

        <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--color-body-text)' }}>
          This action will reset all 4 raw input tables, parameters, cost reduction actions, and monthly calibrations back to the default factory state. Any unsaved custom entries in your local browser storage will be replaced.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-body-text)' }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 cursor-pointer transition-colors"
          >
            Confirm Reset
          </button>
        </div>
      </div>
    </div>
  );
};
