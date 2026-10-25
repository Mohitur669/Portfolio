import { useState, useEffect } from 'react';
import { useMotion } from '../context/MotionContext';

export interface DeviceCapabilities {
  isTouch: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  reducedMotion: boolean;
  isOnline: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const { reducedMotion } = useMotion();

  const [capabilities, setCapabilities] = useState<Omit<DeviceCapabilities, 'reducedMotion'>>({
    isTouch: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isOnline: true,
  });

  useEffect(() => {
    const check = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;

      const width = window.innerWidth;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const isOnline = navigator.onLine;

      setCapabilities({
        isTouch,
        isMobile,
        isTablet,
        isDesktop,
        isOnline,
      });
    };

    check();
    window.addEventListener('resize', check);
    window.addEventListener('online', check);
    window.addEventListener('offline', check);

    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('online', check);
      window.removeEventListener('offline', check);
    };
  }, []);

  return {
    ...capabilities,
    reducedMotion,
  };
}
