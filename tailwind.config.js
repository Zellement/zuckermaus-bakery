module.exports = {
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: ["is-active"],
    },
  },
  theme: {
    fontSize: {
      "2xs": "0.75rem",
      xs: "0.875rem",
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      display: ["Losta Masta", "Georgia"],
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        // Overwrite Tailwind's gray, which has a tint of blue
        gray: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#CDCDCD",
          300: "#AFAFAF",
          400: "#727272",
          500: "#363636",
          600: "#313131",
          700: "#202020",
          800: "#181818",
          900: "#101010",
        },
        black: "#1F1F1F",
        orange: {
          50: "#FEFAF4",
          100: "#FEF6E8",
          200: "#FBE8C6",
          300: "#F9D9A4",
          400: "#F5BD60",
          500: "#F0A11C",
          600: "#D89119",
          700: "#906111",
          800: "#6C480D",
          900: "#483008",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "group-hover",
      "hover",
      "focus",
      "group-focus",
    ],
    textColor: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    padding: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    scale: ["responsive", "group-hover", "hover", "focus", "group-focus"],
  },
  plugins: [
  ],
  corePlugins: {
    container: false,
  },
}
