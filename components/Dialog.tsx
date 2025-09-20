'use client'

import React, { ReactNode } from 'react';

interface DialogProps {
  children: ReactNode;
  open?: boolean;
  close?: (event: boolean, platform?: "ios" | "android") => null;
  className?: string;
}

export default function Dialog({ children, open = false, close, className = '' }: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={() => close && close(false)}
      />
      
      {/* Dialog content */}
      <div className={`relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}