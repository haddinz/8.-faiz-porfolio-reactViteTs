/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        run: {
          '0%': { transform:  'translate3d(calc(-28% + 10vw ), 0, 0)' },
          '100%': { transform:  'translate3d(calc(-53% + 10vw), 0, 0)',
          },
        },
      },
      animation: {
        run: 'run 5s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
}