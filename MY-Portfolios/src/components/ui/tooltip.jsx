import React, { createContext, useContext } from 'react';

const TooltipContext = createContext(null);

export const TooltipProvider = ({ children }) => (
  <TooltipContext.Provider value={{}}>
    {children}
  </TooltipContext.Provider>
);

export const Tooltip = ({ children }) => <div>{children}</div>;
export const TooltipTrigger = ({ children }) => <div>{children}</div>;
export const TooltipContent = ({ children }) => <div>{children}</div>;
