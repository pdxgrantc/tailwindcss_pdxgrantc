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
      main_bg_color: '#181824',
      text_white: '#d6d6d6',
      button_color: '#262d40',
      button_pressed_color: '#475266',
      accent_text_color: '#525252',
      accent_button_color: '#5121e5',
    },
    screens: {
      mobile: { 'max': '950px' },
      // => @media (max-width: 950px) { ... }
      min_laptop_height: { 'min': '1000px' },
      // => @media (min-width: 1350px) { ... }
      min_desktop_height: { 'max': '1000px' },
      // => @media (max-width: 1350px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
