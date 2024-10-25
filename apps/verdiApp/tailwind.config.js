/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#809671',
        primaryVariant: '#6A7A5B',
        secondary: '#F1A500',
        secondaryVariant: '#C96500',
        background: '#FFFBF3',
        surface: '#FFF5E4',
        error: '#CA2D28',
        onPrimary: '#FFFFFF',
        onSecondary: '#FFFFFF',
        onBackground: '#000000',
        onSurface: '#000000',
        onError: '#FFFFFF',
        highlight: '#E5D2B8',
        dark: {
          primary: '#6A7A5B', // Darker variant of primary
          primaryVariant: '#4E5A43',
          secondary: '#C96500',
          secondaryVariant: '#9A4900',
          background: '#3A2F22', // Dark theme background color
          surface: '#4F4233', // Dark theme surface color
          error: '#CA2D28',
          onPrimary: '#FFFFFF',
          onSecondary: '#FFFFFF',
          onBackground: '#E5E0D8', // Lightened for contrast on dark background
          onSurface: '#D2AB80',
          onError: '#E5E0D8',
          highlight: '#D2AB80',
        },
      },
    },
  },
  plugins: [],
};
