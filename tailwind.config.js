module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'xsm': '400px',
    },
    extend: {
      fontFamily: {
        sansita: ['Sansita Swashed', "cursive", "sans serif"],

      }
    },
  },
  plugins: [],
}
