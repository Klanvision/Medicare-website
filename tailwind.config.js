/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          950: '#032B45',
          900: '#074873',
          800: '#0A5F96',
          700: '#0284C7', // Primary Medical Blue
          600: '#0066CC', // Primary CTA Blue
          500: '#0EA5E9',
          400: '#38BDF8',
          100: '#E0F2FE',
          50: '#F0F9FF', // Soft Ice Blue Tint
        },
        navy: {
          950: '#070E1A',
          900: '#0F172A', // Deep Trustworthy Navy Text
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        teal: {
          900: '#043A32',
          800: '#095C51',
          700: '#0B7669',
          600: '#0D9488', // Soft Medical Teal
          500: '#14B8A6',
          400: '#2DD4BF',
          100: '#CCFBF1',
          50: '#F0FDFA',
        },
        emerald: {
          600: '#16A34A', // Healthcare Indicator Green
          500: '#22C55E',
          100: '#DCFCE7',
          50: '#F0FDF4',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 20px -2px rgba(2, 132, 199, 0.06)',
        'card-hover': '0 12px 32px -4px rgba(2, 132, 199, 0.14)',
        'blue-glow': '0 0 25px -5px rgba(2, 132, 199, 0.25)',
      },
      borderRadius: {
        'xl': '0.75rem',  // 12px
        '2xl': '1rem',    // 16px
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
