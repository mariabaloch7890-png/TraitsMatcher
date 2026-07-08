/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary_white: "#FFFFFF",
        primary_dark: "#14358A",
        body_text_color_gray: "#68718B",
        light_gray: "#A29E9E",
        primary_blue: "#155DFC",
        primary_black: "#000000",
        body_text_color_white: "#E6E8EC",
        purple: "#AD46FF",
        pink: "#F6339A",
        orange: "#FF6900",
        red: "#FB2C36",
        secondary_blue: "#6A36FF",
        border_color: "#D6D6D6",
        input_border_light: "#E2E8F0",
        input_selection_gray: "#6B7280",
        input_light_gray: "#F1F5F9",
        dark_gray:"#334155"
      },

       fontFamily: {
      sans: ["'DM Sans'", "sans-serif"], // overrides default sans
    },

    },
  },
  plugins: [],
};
