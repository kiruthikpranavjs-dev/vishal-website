/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDF2F2',
          100: '#FDE8E8',
          200: '#FBD5D5',
          500: '#EF4444',
          600: '#DC2626',
          700: '#C81E1E',
          800: '#9B1C1C',
          900: '#771D1D',
          DEFAULT: '#C81E1E',
        },
        charcoal: {
          950: '#0C0D0E',
          900: '#141618',
          850: '#1A1D20',
          800: '#22252A',
          700: '#31353D',
          600: '#464C56',
          500: '#626A77',
        },
        stone: {
          50: '#FAF9F6',
          100: '#F4F2EC',
          200: '#E7E2DA',
          300: '#D1C9BC',
          400: '#6B635B',
          500: '#4D463F',
          600: '#38322B',
          700: '#26211C',
          800: '#1C1814',
          900: '#120F0D',
        },
        sage: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          600: '#2E7D56',
          700: '#246344',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.03em',
      }
    },
  },
  plugins: [],
}
