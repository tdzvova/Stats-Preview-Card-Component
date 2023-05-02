/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './public/index.html',
    './src/**/*.{html,js}',
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '640px',
      lg: '1440px',
      xl:  '1440px', 
     '2xl': '1440px',
    },
    fontFamily: {
      Inter: ['Inter, Sans-serif'],
    },
    extend: {
      colors: {
        VeryDarkBlue: 'hsl(233, 47%, 7%)',
        DarkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        SoftViolet: 'hsl(277, 64%, 61%)',
        White: 'hsl(0, 0%, 100%)',
        SlightlyTransparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        SlightlyTransparentWhyte: 'hsla(0, 0%, 100%, 0.6)',

      },
    },
  },
  plugins: [],
}

