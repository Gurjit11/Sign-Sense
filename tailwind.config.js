/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0f0f12",
          "200": "#070707",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(255, 255, 255, 0.7)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(0, 0, 0, 0.8)",
          "800": "rgba(0, 0, 0, 0.7)",
          "900": "rgba(255, 255, 255, 0.08)",
          "1000": "rgba(0, 0, 0, 0.6)",
          "1100": "rgba(0, 0, 0, 0.1)",
          "1200": "rgba(255, 255, 255, 0.2)",
          "1300": "rgba(255, 255, 255, 0.5)",
          "1400": "rgba(0, 0, 0, 0.65)",
          "1500": "rgba(255, 255, 255, 0.65)",
          "1600": "rgba(255, 255, 255, 0.1)",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "rgba(232, 232, 232, 0.4)",
          "300": "rgba(232, 232, 232, 0.16)",
        },
        black: "#000",
        white: "#fff",
        yellow: "#edf738",
        royalblue: {
          "100": "rgba(62, 109, 217, 1)",
          "200": "#3e6dd9",
          "300": "rgba(62, 109, 217, 0.7)",
          "400": "rgba(62, 109, 217, 0.4)",
        },
        crimson: {
          "100": "#dc2b46",
          "200": "rgba(220, 43, 70, 0.4)",
          "300": "rgba(220, 43, 70, 0.72)",
        },
        mediumslateblue: "#5b6cff",
        whitesmoke: "#f5f5f5",
        khaki: "#f3ffab",
        darkslategray: "#484848",
        tomato: "#f85430",
      },
      fontFamily: {
        inter: "Inter",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "81xl": "100px",
        "981xl": "1000px",
        "1421xl": "1440px",
        "493xl": "512px",
        "45xl": "64px",
        "37xl": "56px",
        "13xl": "32px",
        "29xl": "48px",
        "173xl": "192px",
        "365xl": "384px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xs: "12px",
      "mid-8": "17.8px",
      mini: "15px",
      "5xl": "24px",
      "37xl": "56px",
      lg: "18px",
      "61xl": "80px",
      "smi-5": "12.5px",
      "6xl": "25px",
      base: "16px",
      xl: "20px",
      smi: "13px",
      lgi: "19px",
      "109xl": "128px",
      "3xl": "22px",
      "40xl": "59px",
      "29xl": "48px",
      "2xs": "11px",
      "95xl": "114px",
      "lg-8": "18.8px",
      "26xl": "45px",
      "11xl": "30px",
      "10xl": "29px",
      "13xl": "32px",
      "102xl": "121px",
      "108xl": "127px",
      "25xl": "44px",
      sm: "14px",
      "4xl": "23px",
      "104xl": "123px",
      "101xl": "120px",
      "41xl": "60px",
      "38xl": "57px",
      "107xl": "126px",
      "214xl": "233px",
      "217xl": "236px",
      "229xl": "248px",
      "45xl": "64px",
      "84xl": "103px",
      "68xl": "87px",
      "66xl": "85px",
      "35xl": "54px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};