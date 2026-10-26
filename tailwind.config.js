/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          canvas: 'var(--color-paper-canvas, #faf8f5)',
          card: 'var(--color-paper-card, #ffffff)',
          border: 'var(--color-paper-border, #e5e0d8)',
          subtle: 'var(--color-paper-subtle, #f2eee8)',
        },
        ink: {
          DEFAULT: 'var(--color-ink-primary, #18181b)',
          graphite: 'var(--color-ink-graphite, #3f3f46)',
          muted: 'var(--color-ink-muted, #52525b)',
        },
        slate: {
          canvas: '#0d1117',   // Deep, rich dark canvas
          surface: '#161b22',  // Card and elevated surface
          card: '#161b22',
          subtle: '#21262d',   // Secondary elevated element
          border: '#30363d',   // Clear, visible dark border
          muted: '#8b949e',    // Secondary metadata
        },
        obsidian: {
          950: '#0d1117',
          900: '#161b22',
          800: '#21262d',
          700: '#30363d',
        },
        accent: {
          teal: '#0f766e',
          'teal-bright': '#2dd4bf',
          amber: '#b45309',
          'amber-bright': '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
