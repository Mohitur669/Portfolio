import React, { createContext, useContext, useEffect, useState } from 'react';

interface MotionContextType {
  reducedMotion: boolean;
  setForceReducedMotion: (force: boolean) => void;
  toggleReducedMotion: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [systemReduced, setSystemReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [forceReduced, setForceReduced] = useState<boolean | null>(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('mohitur-reduced-motion');
    return stored !== null ? stored === 'true' : null;
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setSystemReduced(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const reducedMotion = forceReduced !== null ? forceReduced : systemReduced;

  const setForceReducedMotion = (force: boolean) => {
    setForceReduced(force);
    localStorage.setItem('mohitur-reduced-motion', String(force));
  };

  const toggleReducedMotion = () => {
    setForceReducedMotion(!reducedMotion);
  };

  return (
    <MotionContext.Provider value={{ reducedMotion, setForceReducedMotion, toggleReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) throw new Error('useMotion must be used within a MotionProvider');
  return context;
};
