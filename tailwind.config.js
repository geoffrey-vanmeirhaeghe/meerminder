module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
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
