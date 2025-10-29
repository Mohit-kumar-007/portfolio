import React from 'react';

export const Badge = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30',
    secondary: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    outline: 'border border-purple-400 bg-transparent text-purple-300 hover:bg-purple-400/10',
    success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
};
