/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: '#D4C1FF',
          DEFAULT: '#B094FF',
          dark: '#9470FF',
        },
        blush: {
          light: '#FFB5C2',
          DEFAULT: '#FF8FA3',
          dark: '#FF6B85',
        },
        mint: {
          light: '#98F5D2',
          DEFAULT: '#65EDBB',
          dark: '#3DE4A4',
        },
        periwinkle: {
          light: '#C5CBFF',
          DEFAULT: '#A3AEFF',
          dark: '#8491FF',
        },
        cream: {
          light: '#FFFAF5',
          DEFAULT: '#FFF5E8',
          dark: '#FFE8CC',
        },
        charcoal: {
          light: '#6C6A8A',
          DEFAULT: '#4A4A68',
          dark: '#333347',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        handwritten: ['Caveat', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(176, 148, 255, 0.35)',
        'glow': '0 0 15px rgba(176, 148, 255, 0.7)',
        'card': '0 10px 30px -5px rgba(176, 148, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sparkle-pattern': "url('data:image/svg+xml;utf8,<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.5\"/></svg>')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.1)' },
          '50%': { opacity: 0.8, transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(176, 148, 255, 0.7)' },
          '50%': { boxShadow: '0 0 20px rgba(176, 148, 255, 1)' },
        },
      },
    },
  },
  plugins: [],
};