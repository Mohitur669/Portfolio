import React, { useState, useEffect } from 'react';
import { Styleguide } from './pages/Styleguide';
import { NotFound } from './pages/NotFound';
import { Hero } from './components/hero/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CommandPalette } from './components/interactions/CommandPalette';
import { CustomCursor } from './components/interactions/CustomCursor';
import { OWNER_DATA } from './data/owner';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon, FileDown, Menu, X } from 'lucide-react';

export const App: React.FC = () => {
  const [isStyleguide, setIsStyleguide] = useState(false);
  const [is404, setIs404] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/styleguide' || window.location.hash === '#styleguide') {
      setIsStyleguide(true);
    } else if (path !== '/' && path !== '/index.html' && !path.startsWith('/#')) {
      if (path.length > 1 && !path.includes('.')) {
        setIs404(true);
      }
    }

    const handleHash = () => {
      setIsStyleguide(window.location.hash === '#styleguide');
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (is404) {
    return <NotFound />;
  }

  if (isStyleguide) {
    return <Styleguide />;
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-obsidian-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-xl focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Subtle Custom Cursor for Fine Pointers */}
      <CustomCursor />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Background blueprint grid */}
      <div className="fixed inset-0 bg-grid-blueprint pointer-events-none z-0 opacity-60 dark:opacity-30" />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-50/80 dark:bg-obsidian-950/80 border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group font-display font-extrabold text-lg tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-glow">
              M
            </span>
            <span className="text-slate-900 dark:text-white font-display font-extrabold">{OWNER_DATA.name}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              title="Toggle color theme"
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-cyan-500 transition-colors"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            <a
              href={OWNER_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohd_Mohitur_Rahaman_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-glow transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-slate-50/95 dark:bg-obsidian-950/95 backdrop-blur-xl px-4 py-4 space-y-3 text-sm font-mono">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 dark:text-slate-200"
            >
              // 01. About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 dark:text-slate-200"
            >
              // 02. Technical Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 dark:text-slate-200"
            >
              // 03. Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 dark:text-slate-200"
            >
              // 04. Journey & Milestones
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-700 dark:text-slate-200"
            >
              // 05. Contact
            </a>
            <a
              href={OWNER_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohd_Mohitur_Rahaman_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-semibold"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Content Landmark: Intro -> About -> Skills -> Projects -> Journey -> Contact */}
      <main id="main-content">
        {/* 1. Intro / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Tech Stack Icons & Capabilities */}
        <Skills />

        {/* 4. Verified Projects */}
        <Projects />

        {/* 5. Journey & Milestones */}
        <ExperienceTimeline />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
