import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDuration = 4000,
  loop = true,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Respect reduced motion accessibility setting
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(text);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else if (loop) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={`relative inline-flex items-center ${className}`} aria-label={text}>
      {/* Invisible full text preserves layout geometry including space for caret, preventing navbar CLS */}
      <span className="invisible select-none pointer-events-none flex items-center pr-1 whitespace-nowrap" aria-hidden="true">
        <span>{text}</span>
        <span className="w-[2px] ml-0.5" />
      </span>
      {/* Active typewriter output without ellipsis truncation */}
      <span className="absolute inset-0 flex items-center whitespace-nowrap" aria-hidden="true">
        <span className="whitespace-pre">{displayedText}</span>
        <span
          className="inline-block w-[2px] h-[0.9em] ml-0.5 bg-accent-teal dark:bg-accent-teal-bright animate-pulse shrink-0"
        />
      </span>
    </span>
  );
};
