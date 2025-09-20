'use client'

import React from 'react';

interface DialogProps {
  open: boolean;
  close: (event: boolean, platform?: "ios" | "android") => void;
  children: React.ReactNode;
}

export default function Dialog({ open, close, children }: DialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="mb-4">
          {children}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => close(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}