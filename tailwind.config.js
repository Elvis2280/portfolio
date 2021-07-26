module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        primary: '#222222',
        secondary: '#405FB1',
        secondaryLight: '#94A9FF',
        secondaryVeryLight: '#BDD1FF',
        secondaryDark: '#000249',
        neutral: '#FAFDF6',
        neutralGray: '#CAC7C7',
        dangerous: '#BA2E4A',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['active'],
    },
  },
  plugins: [],
};
