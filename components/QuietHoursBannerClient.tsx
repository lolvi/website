'use client';

import { useEffect, useState } from 'react';
import { QuietHoursBanner } from './QuietHoursBanner';

export function QuietHoursBannerClient() {
  const [showQuietHoursBanner, setShowQuietHoursBanner] = useState(false);

  useEffect(() => {
    const checkQuietHours = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;
      // 20:30 = 20.5, 08:00 = 8.0
      const isQuietHours = currentTime >= 20.5 || currentTime < 8.0;
      setShowQuietHoursBanner(isQuietHours);
    };

    checkQuietHours();
    const interval = setInterval(checkQuietHours, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!showQuietHoursBanner) return null;
  return <QuietHoursBanner />;
}