import React, { useState, useEffect } from 'react';
import { Styleguide } from './pages/Styleguide';
import { NotFound } from './pages/NotFound';
import { Hero } from './components/hero/Hero';
import { About } from './components/sections/About';
import { SystemTopology } from './components/hero/SystemTopology';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { CommandPalette } from './components/interactions/CommandPalette';
import { CustomCursor } from './components/interactions/CustomCursor';
import { OWNER_DATA } from './data/owner';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon, FileDown, Menu, X, Search } from 'lucide-react';

export const App: React.FC = () => {
  const [isStyleguide, setIsStyleguide] = useState(false);
  const [is404, setIs404] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <div className="relative min-h-screen bg-paper-canvas dark:bg-slate-canvas text-ink dark:text-slate-100 selection:bg-accent-teal selection:text-white dark:selection:bg-accent-teal-bright dark:selection:text-slate-900 transition-colors duration-150">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-teal focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
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

      {/* Subtle architectural grid */}
      <div className="fixed inset-0 bg-journal-grid pointer-events-none z-0 opacity-70 dark:opacity-40" />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-paper-canvas/90 dark:bg-slate-canvas/90 border-b border-paper-border dark:border-slate-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group font-display font-extrabold tracking-tight min-w-0 shrink">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-paper-border dark:border-slate-border bg-paper-subtle dark:bg-slate-subtle shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              <img
                src="img/memoji.webp"
                alt="Mohd Mohitur Rahaman Avatar"
                className="w-full h-full object-cover"
                width={32}
                height={32}
              />
            </div>
            <span className="text-ink dark:text-white font-display font-extrabold group-hover:text-accent-teal dark:group-hover:text-accent-teal-bright transition-colors whitespace-nowrap text-lg sm:text-xl lg:text-xl xl:text-2xl tracking-tight">
              {OWNER_DATA.name}
            </span>
          </a>

          {/* Desktop Nav: Home -> About -> Architecture -> Skills -> Projects -> Journey -> Contact */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="#home" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">About</a>
            <a href="#architecture" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-accent-teal dark:hover:text-teal-300 transition-colors">Contact</a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Desktop Command Palette Launcher: Search Icon with Cmd+K (no internal badge border) */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              title="Search & Quick Actions (Cmd+K)"
              aria-label="Search and Quick Actions (Press Command K)"
              className="hidden md:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-paper-border dark:border-slate-border bg-paper-subtle/70 dark:bg-slate-surface/70 text-xs font-mono text-slate-600 dark:text-slate-300 hover:border-accent-teal dark:hover:border-teal-400 hover:text-ink dark:hover:text-white transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Cmd+K
              </span>
            </button>

            {/* Mobile Command Palette Launcher: Search Icon Only */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              title="Search & Quick Actions"
              aria-label="Open Command Palette"
              className="md:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg border border-paper-border dark:border-slate-border text-slate-700 dark:text-slate-200 hover:border-accent-teal dark:hover:border-teal-400 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle: Bordered matching blogs.mohitur.com */}
            <button
              onClick={toggleTheme}
              title={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-label="Toggle theme"
              className="hidden md:inline-flex p-2 min-w-[36px] min-h-[36px] items-center justify-center rounded-lg border border-paper-border dark:border-slate-border text-slate-700 dark:text-slate-200 hover:border-accent-teal dark:hover:border-teal-400 hover:bg-paper-subtle dark:hover:bg-slate-subtle hover:text-ink dark:hover:text-white transition-colors focus-visible:outline-2"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Minimal Resume Link: Black text, white bg, non-bold */}
            <a
              href={OWNER_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download="Mohd_Mohitur_Rahaman_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black border border-slate-200 dark:border-white shadow-xs text-xs font-mono font-normal hover:bg-slate-100 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-black" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg border border-paper-border dark:border-slate-border text-slate-700 dark:text-slate-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown: Home -> About -> Architecture -> Skills -> Projects -> Journey -> Contact */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-paper-border dark:border-slate-border bg-paper-canvas/98 dark:bg-slate-canvas/98 backdrop-blur-2xl px-4 py-4 space-y-2 text-sm font-mono shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              About
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Architecture
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Journey
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium"
            >
              Contact
            </a>

            {/* Theme Toggle in Mobile Menu */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full flex items-center justify-between min-h-[44px] px-3 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-paper-subtle dark:hover:bg-slate-surface active:bg-accent-teal/10 font-medium transition-colors"
            >
              <span className="flex items-center gap-2.5">
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
                <span>Theme</span>
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </button>
            <div className="pt-2 border-t border-paper-border dark:border-slate-border">
              <a
                href={OWNER_DATA.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Mohd_Mohitur_Rahaman_Resume.pdf"
                className="flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-lg bg-white text-black border border-slate-200 shadow-sm text-xs font-mono font-normal hover:bg-slate-100 transition-colors"
              >
                <FileDown className="w-4 h-4 text-black" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Landmark: Intro -> About ("From Proof-Based Mathematics...") -> Architecture -> Skills -> Projects -> Journey -> Contact */}
      <main id="main-content">
        {/* 1. Intro / Hero */}
        <Hero />

        {/* 2. About Me ("From Proof-Based Mathematics to Backend Systems") */}
        <About />

        {/* 3. System Architecture / How Systems Work (Placed directly after About) */}
        <SystemTopology />

        {/* 4. Tech Stack Icons & Capabilities */}
        <Skills />

        {/* 5. Verified Projects */}
        <Projects />

        {/* 6. Journey & Milestones */}
        <ExperienceTimeline />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
