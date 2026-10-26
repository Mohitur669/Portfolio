import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useMotion } from '../../context/MotionContext';
import { OWNER_DATA } from '../../data/owner';
import { PROJECTS } from '../../data/projects';
import {
  Search,
  Command,
  Sun,
  Moon,
  Sparkles,
  FileDown,
  Mail,
  Copy,
  ExternalLink,
  X,
  Terminal,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { reducedMotion, toggleReducedMotion } = useMotion();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
      setCopiedEmail(false);
    }
  }, [isOpen]);

  // Command items
  const items = [
    {
      id: 'toggle-theme',
      title: `Toggle Theme (${resolvedTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})`,
      category: 'Preferences',
      icon: resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'toggle-motion',
      title: `Toggle Reduced Motion (${reducedMotion ? 'Enable Motion' : 'Reduce Motion'})`,
      category: 'Accessibility',
      icon: <Sparkles className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        toggleReducedMotion();
        onClose();
      },
    },
    {
      id: 'download-resume',
      title: "Download Mohitur's Resume (PDF)",
      category: 'Actions',
      icon: <FileDown className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(OWNER_DATA.resumePath, '_blank');
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${OWNER_DATA.email})`,
      category: 'Actions',
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />,
      action: async () => {
        try {
          await navigator.clipboard.writeText(OWNER_DATA.email);
          setCopiedEmail(true);
          setTimeout(() => {
            onClose();
          }, 600);
        } catch {
          onClose();
        }
      },
    },
    {
      id: 'nav-home',
      title: 'Jump to Home',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-about',
      title: 'Jump to About Mohd Mohitur Rahaman',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-architecture',
      title: 'Jump to System Architecture',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-skills',
      title: 'Jump to Technical Stack',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Jump to Systems & Projects',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact Section',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-accent-teal dark:text-teal-300" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'sudo-hire',
      title: 'sudo hire-me (Easter Egg)',
      category: 'Command',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => {
        try {
          confetti({ particleCount: 70, spread: 80 });
        } catch {
          // ignore
        }
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    ...PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title} (${p.systemRole})`,
      category: 'Projects',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        window.open(p.links.github, '_blank');
        onClose();
      },
    })),
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex]?.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-paper-border dark:border-slate-border text-slate-500 dark:text-slate-300">
          <Search className="w-5 h-5 text-accent-teal dark:text-teal-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. 'theme', 'resume', 'projects')..."
            className="w-full bg-transparent text-base md:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 dark:text-slate-300 hover:text-ink dark:hover:text-white hover:bg-paper-subtle dark:hover:bg-slate-subtle min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500 dark:text-slate-300">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-3 md:py-2.5 rounded-lg flex items-center justify-between text-xs transition-colors min-h-[44px] ${
                    isSelected
                      ? 'bg-accent-teal text-white dark:bg-teal-400 dark:text-slate-950 font-semibold'
                      : 'text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-canvas'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={isSelected ? 'text-white dark:text-slate-950' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/20 dark:bg-slate-950/20 text-white dark:text-slate-950'
                          : 'bg-paper-subtle dark:bg-slate-canvas text-slate-700 dark:text-slate-300 border border-paper-border dark:border-slate-border'
                      }`}
                    >
                      {item.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 border-t border-paper-border dark:border-slate-border bg-paper-subtle/50 dark:bg-slate-canvas flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
          <div className="hidden md:flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-slate-700 dark:text-slate-200">
              ↑↓
            </span>
            <span>Navigate</span>
            <span className="px-1.5 py-0.5 rounded border border-paper-border dark:border-slate-border bg-paper-card dark:bg-slate-surface text-slate-700 dark:text-slate-200">
              ↵
            </span>
            <span>Select</span>
          </div>
          <div className="md:hidden text-[10px] text-slate-500 dark:text-slate-400">
            Tap any item to activate
          </div>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
            <Command className="w-3 h-3" />
            <span>Cmd+K</span>
          </div>
        </div>
      </div>
    </div>
  );
};
