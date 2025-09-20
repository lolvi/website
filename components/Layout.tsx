'use client'

import React, { createContext, useState, ReactNode } from 'react';

// Define the context type
interface LayoutContextType {
  showHero: boolean;
  setShowHero: (show: boolean) => void;
}

// Create the context with default values
export const LayoutContext = createContext<LayoutContextType>({
  showHero: true,
  setShowHero: () => {},
});

// Define props for the Layout component
interface LayoutProps {
  children: ReactNode;
  initialShowHero?: boolean;
}

// Layout component that provides context and wraps children
export default function Layout({ children, initialShowHero = true }: LayoutProps) {
  const [showHero, setShowHero] = useState<boolean>(initialShowHero);

  const contextValue: LayoutContextType = {
    showHero,
    setShowHero,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background text-foreground">
        {children}
      </div>
    </LayoutContext.Provider>
  );
}