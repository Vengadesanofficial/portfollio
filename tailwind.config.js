export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8873ef",
        headinf:"#081e21",
        smalltext:"#193256",

      }
    },
  },
   daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
