module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: '#FAFDF6',
            },
            h2: {
              color: '#FAFDF6',
            },
            h3: {
              color: '#FAFDF6',
            },
            h4: {
              color: '#FAFDF6',
            },
            h5: {
              color: '#FAFDF6',
            },
            h6: {
              color: '#FAFDF6',
            },
            p: {
              color: theme('colors.gray.100'),
            },

            code: {
              color: theme('colors.gray.100'),
              border: '1px solid #94A9FF',
              padding: '4px',
              'border-radius': '4px',
            },
            blockquote: {
              color: theme('colors.gray.100'),
              'border-color': '#94A9FF',
              'background-color': theme('colors.gray.800'),
            },

            strong: {
              color: theme('colors.gray.100'),
            },

            a: {
              color: '#94A9FF',
              transition: 'all 300ms',
              '&:hover': {
                color: theme('colors.gray.100'),
              },
            },
          },
        },
      }),
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
  plugins: [require('@tailwindcss/typography')],
};
