import React from 'react';
import { useToast } from '../../hooks/use-toast';

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            bg-card border rounded-lg shadow-lg p-4 min-w-[300px] animate-slide-in
            ${toast.variant === 'destructive' ? 'border-red-500' : 'border-primary'}
          `}
        >
          {toast.title && (
            <div className={`font-semibold mb-1 ${toast.variant === 'destructive' ? 'text-red-500' : 'text-primary'}`}>
              {toast.title}
            </div>
          )}
          {toast.description && (
            <div className="text-sm text-muted-foreground">
              {toast.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
