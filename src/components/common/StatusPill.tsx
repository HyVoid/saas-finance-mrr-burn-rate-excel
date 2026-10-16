import React from 'react';

interface StatusPillProps {
  label: string;
  variant?: 'neutral' | 'positive' | 'negative' | 'accent';
  onClick?: () => void;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  variant = 'neutral',
  onClick,
  className = ''
}) => {
  let bg = 'rgba(5, 28, 44, 0.06)';
  let text = 'var(--color-primary)';
  let border = 'transparent';

  if (variant === 'positive') {
    bg = 'rgba(0, 200, 83, 0.12)';
    text = 'var(--color-positive)';
  } else if (variant === 'negative') {
    bg = 'rgba(211, 47, 47, 0.12)';
    text = 'var(--color-negative)';
  } else if (variant === 'accent') {
    bg = 'rgba(34, 81, 255, 0.10)';
    text = 'var(--color-accent)';
  }

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full transition-transform duration-150 ${
        onClick ? 'interactive-cell cursor-pointer select-none' : ''
      } ${className}`}
      style={{
        backgroundColor: bg,
        color: text,
        border: `1px solid ${border}`
      }}
    >
      {label}
    </span>
  );
};
