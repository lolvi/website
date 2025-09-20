'use client'

import React from 'react';

interface DialogProps {
  open: boolean;
  close: (event: boolean, platform?: "ios" | "android") => void;
  children: React.ReactNode;
}

export default function Dialog({ open, close, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <button
          onClick={() => close(false)}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}