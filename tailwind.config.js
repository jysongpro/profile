/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#070B1D',
        ink: '#0B1026',
        cyanGlow: '#22D3EE',
        royal: '#3B82F6',
        violetGlow: '#8B5CF6',
        goldGlow: '#FACC15',
        hotPink: '#EC4899',
      },
      boxShadow: {
        neon: '0 0 28px rgba(34, 211, 238, 0.28)',
        violet: '0 0 36px rgba(139, 92, 246, 0.24)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
