/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tPurple: '#2C1944',
        tPurpleLight: '#C984FF',
        tPurpleLightV2: '#DDC2FF',
        tYellow: '#D5FD63',
        tLink: '#958CA1'
      },
      screens: {
        '2xl': '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

// 1536 = 1280