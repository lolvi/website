'use client'

import React, { createContext, useState, ReactNode } from 'react';

interface LayoutContextType {
  showHero: boolean;
  setShowHero: (show: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  showHero: true,
  setShowHero: () => {},
});

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const [showHero, setShowHero] = useState<boolean>(true);

  const value = {
    showHero,
    setShowHero,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}