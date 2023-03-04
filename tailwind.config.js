module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F5F9",
          200: "#E7EDF4",
          300: "#CFDBE8",
          400: "#7E98DE",
          500: "#0033BF",
        },
        secondary: {
          500: "#00CE77",
        },
        black: "#182750",
      },
      spacing: {
        108: "27rem",
        144: "36rem",
        192: "48rem",
      },
      minWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
      }),
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
    variants: {
      backgroundColor: ["hover", "group-hover"],
      borderWidth: ["hover", "group-hover"],
      borderColor: ["hover", "group-hover"],
      opacity: ["hover", "group-hover"],
      textColor: ["hover", "group-hover"],
      transform: ["hover", "group-hover"],
      translate: ["hover", "group-hover"],
      translateX: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
      zIndex: ["hover", "group-hover"],
      extend: {},
    },
    plugins: [],
  },
};
