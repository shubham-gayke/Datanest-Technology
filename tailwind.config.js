/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1330',
          midnight: '#060B1B',
          deep: '#0D1B3E',
          card: '#11224D',
          blue: '#2563EB',
          cyan: '#06B6D4',
          violet: '#7C3AED',
          accent: '#38BDF8',
          slate: '#F1F5F9',
          light: '#F8FAFC',
          border: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        heading: ['Sora', 'Poppins', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-violet': '0 0 25px -5px rgba(124, 58, 237, 0.4)',
        'card-hover': '0 20px 40px -15px rgba(10, 19, 48, 0.12)',
        'card-dark-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'gradient-flow': 'gradient 8s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

