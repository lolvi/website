import { useState } from 'react';
import { Moon, X } from 'lucide-react';
import { Button } from './ui/button';

export function QuietHoursBanner() {
  const [selectedWindow, setSelectedWindow] = useState<string | null>(null);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleWindowSelect = (window: string) => {
    setSelectedWindow(window);
    // Store in localStorage (no PII)
    localStorage.setItem('compa_preferred_window', window);
    
    // Track analytics (no PII)
    //@ts-expect-error 'gtag' may not exist on window'
    if (typeof window !== 'undefined' && window.gtag) {
      //@ts-expect-error 'gtag' may not exist on window'
      window.gtag('event', 'quiet_hours_window_selected', {
        window_preference: window
      });
    }
  };

  if (isDismissed) return null;

  return (
    <div className="bg-[#0FA36B] text-white py-3 px-4 relative">
      <div className="max-w-6xl mx-auto flex items-start gap-3">
        <Moon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="mb-2">
            No escribimos de noche. Te contacto en tu franja preferida:
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={selectedWindow === 'mañana' ? 'secondary' : 'outline'}
              onClick={() => handleWindowSelect('mañana')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Mañana (08:00-12:00)
            </Button>
            <Button
              size="sm"
              variant={selectedWindow === 'mediodía' ? 'secondary' : 'outline'}
              onClick={() => handleWindowSelect('mediodía')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Mediodía (12:00-16:00)
            </Button>
            <Button
              size="sm"
              variant={selectedWindow === 'tarde' ? 'secondary' : 'outline'}
              onClick={() => handleWindowSelect('tarde')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Tarde (16:00-20:30)
            </Button>
          </div>
          {selectedWindow && (
            <p className="mt-2 text-sm">
              ✓ Preferencia guardada: {selectedWindow}
            </p>
          )}
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="flex-shrink-0 hover:bg-white/10 rounded p-1"
          aria-label="Cerrar banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
