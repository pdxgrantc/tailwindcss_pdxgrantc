const { publicDecrypt } = require('crypto');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,tx,tsx}', './publicDecrypt/indexedDB.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      main_bg_color: '#121824',
      text_white: '#d6d6d6',
      button_color: '#262d40',
      button_pressed_color: '#475266',
      accent_text_color: '#525252',
    },
    screens: {
      mobile: { 'max': '950px' },
      // => @media (max-width: 950px) { ... }
      small_desktop: { 'max': '1350px' },
      // => @media (max-width: 1350px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
