import React, { ReactNode } from 'react';

interface DialogProps {
  open: boolean;
  close: (event: boolean, platform?: "ios" | "android") => void;
  children: ReactNode;
}

export default function Dialog({ open, close, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-end">
          <button 
            onClick={() => close(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}