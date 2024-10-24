/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matcha: '#909671',
        pistache: '#B3B792',
        carob: '#725C3A',
        almond: '#E5E0D8',
        chai: '#D2AB80',
        vanilla: '#E5D2B8',
      },
    },
  },
  plugins: [],
};
