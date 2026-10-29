import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: {
          DEFAULT: 'var(--surface)',
          raised: 'var(--surface-raised)',
        },
        codeblock: 'var(--codeblock)',
        accent: {
          DEFAULT: 'var(--accent)',
          soft: 'var(--accent-soft)',
        },
        twilight: 'var(--twilight)',
        stack: {
          backend: 'var(--c-backend)',
          frontend: 'var(--c-frontend)',
          database: 'var(--c-database)',
          devops: 'var(--c-devops)',
          design: 'var(--c-design)',
        },
        syntax: {
          keyword: 'var(--syntax-keyword)',
          string: 'var(--syntax-string)',
          function: 'var(--syntax-function)',
          comment: 'var(--syntax-comment)',
        },
        fog: 'var(--fog)',
        border: {
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
      },
      fontFamily: {
        sans: [
          'Geist',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'Geist Mono',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'monospace',
        ],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;

