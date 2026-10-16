import React from 'react';

interface DataBarProps {
  value: number;
  max: number;
  label?: string;
  className?: string;
  isNegative?: boolean;
}

export const DataBar: React.FC<DataBarProps> = ({ value, max, label, className = '', isNegative = false }) => {
  const percentage = Math.min(100, Math.max(0, max > 0 ? (Math.abs(value) / max) * 100 : 0));

  return (
    <div className={`w-full flex items-center gap-2 ${className}`}>
      <div
        className="flex-1 h-2 rounded-full overflow-hidden relative"
        style={{ backgroundColor: 'rgba(5, 28, 44, 0.08)' }}
      >
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: isNegative ? 'var(--color-negative)' : 'var(--color-accent)'
          }}
        />
      </div>
      {label && (
        <span className="text-[11px] font-mono whitespace-nowrap" style={{ color: 'var(--color-body-text)' }}>
          {label}
        </span>
      )}
    </div>
  );
};
