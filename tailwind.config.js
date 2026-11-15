/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070F1E',
          card: '#0A192F',
          navy: '#173B57',
          borderDark: '#1E293B',
          blue: {
            DEFAULT: '#0066A6',
            light: '#2D8CC4',
            dark: '#004F83',
            glow: '#8CC9E8',
          },
          teal: {
            DEFAULT: '#4F6C80',
            light: '#7D94A3',
            dark: '#344C5D',
            glow: '#A9BAC5',
          },
          cyan: '#06B6D4',
          emerald: '#10B981',
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.15), transparent 70%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(13, 148, 136, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(37, 99, 235, 0.15) 0px, transparent 50%)',
        'light-mesh': 'radial-gradient(at 0% 0%, rgba(13, 148, 136, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(37, 99, 235, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
