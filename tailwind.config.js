/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        bg: '#0d0a07',
        surface: '#1a1410',
        'surface-alt': '#231c16',
        accent: '#0085FF',
        'text-primary': '#f0ebe5',
        'text-muted': '#6b6055',
      },
    },
  },
  plugins: [],
};
