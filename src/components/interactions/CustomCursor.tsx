import React, { useEffect, useState } from 'react';
import { useDeviceCapabilities } from '../../hooks/useDeviceCapabilities';

export const CustomCursor: React.FC = () => {
  const { isTouch, reducedMotion } = useDeviceCapabilities();
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null;
        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouch, reducedMotion]);

  if (isTouch || reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-40 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
          isPointer
            ? 'w-10 h-10 bg-cyan-500/20 border border-cyan-400 scale-125'
            : 'w-6 h-6 bg-cyan-500/10 border border-cyan-500/30'
        }`}
      />
    </div>
  );
};
