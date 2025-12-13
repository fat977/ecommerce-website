/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f3e7',
          100: '#efe7cf',
          200: '#dfd0a0',
          300: '#cfb871',
          400: '#c9ac5e',
          500: '#C5B358', // base
          600: '#a8954a',
          700: '#8a773c',
          800: '#6c592e',
          900: '#4e3b20',
          950: '#3e2f19',
        },
        accent: {
          50: '#e0f3f3',
          100: '#b3e1e1',
          200: '#80cece',
          300: '#4dbcbc',
          400: '#26adad',
          500: '#008080', // base
          600: '#006b6b',
          700: '#005656',
          800: '#004040',
          900: '#002a2a',
          950: '#001d1d',
        },
      },
      keyframes: {
        shimmer: {
          // تبدأ الحركة من اليسار (-100%)
          '0%': { transform: 'translateX(-100%)' },
          // تنتهي الحركة عند اليمين (+100%)
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        // تعريف فئة animation لاستخدامها في المكون
        shimmer: 'shimmer 1.5s infinite linear',
      },
    },
  },

  plugins: [],
};

export default config;
