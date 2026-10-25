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
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, toggleTheme } = useTheme();
  const { reducedMotion, toggleReducedMotion } = useMotion();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  // Command items
  const items = [
    {
      id: 'sudo-hire',
      title: 'sudo hire-me',
      category: 'Easter Egg',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => {
        try {
          confetti({ particleCount: 70, spread: 80 });
        } catch {
          // ignore
        }
        const el = document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'toggle-theme',
      title: `Toggle Theme (${resolvedTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})`,
      category: 'Preferences',
      icon: resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'toggle-motion',
      title: `Toggle Reduced Motion (${reducedMotion ? 'Enable Animations' : 'Reduce Motion'})`,
      category: 'Accessibility',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => {
        toggleReducedMotion();
        onClose();
      },
    },
    {
      id: 'download-resume',
      title: "Download Mohitur's Resume (PDF)",
      category: 'Actions',
      icon: <FileDown className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(OWNER_DATA.resumePath, '_blank');
        onClose();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${OWNER_DATA.email})`,
      category: 'Actions',
      icon: <Copy className="w-4 h-4 text-slate-300" />,
      action: () => {
        navigator.clipboard.writeText(OWNER_DATA.email);
        alert('Email copied to clipboard!');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Jump to Projects & Architecture Studies',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Jump to Contact Section',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => {
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
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-obsidian-900 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
          <Search className="w-5 h-5 text-cyan-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. 'theme', 'resume', 'sudo')..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
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
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs transition-colors ${
                    isSelected
                      ? 'bg-cyan-500 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={isSelected ? 'text-white' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
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
        <div className="p-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/30 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ↑↓
            </span>
            <span>Navigate</span>
            <span className="px-1.5 py-0.5 rounded border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              ↵
            </span>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-1">
            <Command className="w-3 h-3" />
            <span>Cmd+K</span>
          </div>
        </div>
      </div>
    </div>
  );
};
