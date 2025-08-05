/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '350px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        brown: "#53423e",
        white: "#f1e1d9",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",           // màu đen hiện đại
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        sourcecode: ['"Source Code Pro"', 'monospace'],
        jersey15: ['"Jersey 15"', 'sans-serif'],
      },
      boxShadow: ({ theme }) => ({
        cyanShadow: `0 0 10px 0 ${theme('colors.lightCyan/10')}, 0 0 5px 0 ${theme('colors.lightCyan/6')}`,
        pixel: `4px 4px 0px ${theme('colors.black')}`,
      }),
    },
  },
  plugins: [],
}
