/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          850: '#0a3f6d',
          900: '#0a2e52',
          950: '#051b33',
        },
        royal: {
          700: '#6b21a8',
          800: '#581c87',
          850: '#43146d',
          900: '#300e52',
          950: '#1b0730',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          light: '#fdf6b2',
          metallic: '#e0ad36',
          divine: '#ffd700',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#f7f3ea',
          200: '#ede4d3',
          300: '#dfd2ba',
        },
        navy: {
          800: '#111c33',
          850: '#0d162a',
          900: '#09101f',
          950: '#050a14',
        }
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.45)',
        'gold-glow-lg': '0 0 45px -5px rgba(245, 158, 11, 0.6)',
        'peacock-glow': '0 0 35px -5px rgba(14, 165, 233, 0.4)',
        'royal-glow': '0 0 35px -5px rgba(107, 33, 168, 0.45)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
