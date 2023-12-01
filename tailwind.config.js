/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  important: true,
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        kandaBlue: "#296CD6",
        fadedBlue: "#7D8897",
        kandaBlack: "#121212",
        kandaGreen: "#18B377",
        secondary: "#11233D",
        contentFade: "#6E7B89",
        contentPrimary: "#1C1E19",
      },
      backgroundImage: {
        signUp:
          "url('./assets/signup/noise.png'), linear-gradient(159deg, #296CD6 2.74%, #18B377 170.8%)",
        signUpShadow:
          "url(./assets/common/box-shadow.png), radial-gradient(234.25% 138.69% at 0.9% 2.98%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        group: "url('./assets/common/groupIcon.png')",
        linear: "linear-gradient(159deg, #296CD6 2.74%, #18B377 170.8%)",
        more: "radial-gradient(234.25% 138.69% at 0.9% 2.98%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        under: "radial-gradient(234.25% 138.69% at 0.9% 2.98%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },

      boxShadow: {
        woke: "0px 9.9px 21.6px rgba(9, 151, 124, 0.41)",
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
