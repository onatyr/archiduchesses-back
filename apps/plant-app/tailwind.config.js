/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#829672',
        primaryVariant: '#344C3D',
        secondary: '#D8959B',
        secondaryVariant: '#F2D1D4',
        background: '#FFFFFF',
        surface: '#F4F3F1',
        error: '#CA2D28',
        onPrimary: '#FFFFFF',
        onSecondary: '#000000',
        onBackground: '#000000',
        onSurface: '#000000',
        onError: '#FFFFFF',
        highlight: '#E5D2B8',
        dark: {
          primary: '#829672',
          primaryVariant: '#344C3D',
          secondary: '#D8959B',
          secondaryVariant: '#F2D1D4',
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
