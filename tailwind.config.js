import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        nunito: ['CustomNunito', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
