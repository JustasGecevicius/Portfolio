/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100vh',
        extraScreen: '110vh',
        screen_half: 'calc(100dvh / 2)',
      },
      width: {
        screen: '100dvw',
      },
      colors: {
        white_blue: '#b3e7ff',
        light_blue: '#4dc6ff',
        blue: '#00aeff',
        dark_blue: '#005780',
        black_blue: '#00111a',
      },
    },
  },
  plugins: [],
};
