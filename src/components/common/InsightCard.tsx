import React from 'react';
import { Lightbulb } from 'lucide-react';

interface InsightCardProps {
  title?: string;
  children: React.ReactNode;
  actionText?: string;
  onActionClick?: () => void;
  className?: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  title,
  children,
  actionText,
  onActionClick,
  className = ''
}) => {
  return (
    <div className={`insight-block p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }} />
        <div className="flex-1">
          {title && (
            <h4 className="text-[13px] font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
              {title}
            </h4>
          )}
          <div className="text-[12px] leading-relaxed" style={{ color: 'var(--color-body-text)' }}>
            {children}
          </div>
          {actionText && onActionClick && (
            <button
              onClick={onActionClick}
              className="mt-2 text-[12px] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
              style={{ color: 'var(--color-accent)' }}
            >
              {actionText} &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
