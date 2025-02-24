/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: [
        "10px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      xs: [
        "12px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      "2xl": [
        "23px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      "3xl": [
        "26px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      "4xl": [
        "29px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      "5xl": [
        "32px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
      "6xl": [
        "36px",
        {
          lineHeight: "130%",
          letterSpacing: "0%",
          textDecoration: "none",
        },
      ],
    },
    extend: {
      screens: {
        xs: "350px",

        customXL: "1420px",
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        primary: {
          dark: "#00BFB2",
          light: "#00BFB21A",
        },
        lightGray: "#F5F5F5",
        secondary: {
          dark: "#007AFF",
        },
        neutral: {
          50: "#f0f1f3",
          100: "#d0d3d9",
          200: "#b9bdc7",
          300: "#989fad",
          400: "#858d9d",
          500: "#667085",
          600: "#5d6679",
          700: "#48505e",
          800: "#383e49",
          900: "#2b2f38",
        },

        success: {
          50: "#e7f8f0",
          100: "#b6e9d1",
          200: "#92deba",
          300: "#60cf9b",
          400: "#41c588",
          500: "#12b76a",
          600: "#10a760",
          700: "#0d824b",
          800: "#0a653a",
          900: "#084d2d",
        },
        warning: {
          50: "#fef5e7",
          100: "#fce1b3",
          200: "#fad28f",
          300: "#f8be5c",
          400: "#f7b13c",
          500: "#f59e0b",
          600: "#df900a",
          700: "#ae7008",
          800: "#875706",
          900: "#674205",
        },
        danger: {
          50: "#fdecec",
          100: "#fac5c5",
          200: "#f8a9a9",
          300: "#f48282",
          400: "#f26969",
          500: "#ef4444",
          600: "#d93e3e",
          700: "#aa3030",
          800: "#832525",
          900: "#641d1d",
        },
        light: {
          50: "#F9FAFB",
        },
        text: {
          primary: "#00BFB2",
          secondary: "#48505e",
          light: "#989fad",
          label: "#333333",
        },
      },

      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
