/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg":
          "url('https://t4.ftcdn.net/jpg/05/10/86/17/360_F_510861755_iZVKqwn2wdlssAwp72UZj6A2882na4li.jpg')",
      },
    },
  },
  plugins: [],
};
