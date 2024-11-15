/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // Automatically detects system's theme
  theme: {
    extend: {
      colors: {
        primary: '#829672',
        primaryVariant: '#344C3D',
        secondary: '#D8959B',
        secondaryVariant: '#F2D1D4',
        background: '#FFFFFF',
        surface: '#f0f0f0',
        error: '#CA2D28',
        onPrimary: '#FFFFFF',
        onSecondary: '#000000',
        onBackground: '#000000',
        onSurface: '#000000',
        onError: '#FFFFFF',
        highlight: '#E5D2B8',
        dark: {
          primary: '#556A4D',
          primaryVariant: '#1E2F25',
          secondary: '#B2767A',
          secondaryVariant: '#A69396',
          background: '#000000',
          surface: '#1E1E1E',
          error: '#CA2D28',
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#FFFFFF',
          onSurface: '#FFFFFF',
          onError: '#FFFFFF',
          highlight: '#B7A98D',
        },
      },
    },
  },
  plugins: [],
};
