/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans",
      },
      colors: {
        primary: {
          red: "var(--clr-red)",
          cyan: "var(--clr-cyan)",
          orange: "var(--clr-orange)",
          blue: "var(--clr-blue)",
        },
        neutral: {
          darkblue: "var(--clr-neutral-darkblue)",
          grayblue: "var(--clr-neutral-grayblue)",
          lightgray: "var(--clr-neutral-lightgray)",
        },
      },
    },
  },
  plugins: [],
}

