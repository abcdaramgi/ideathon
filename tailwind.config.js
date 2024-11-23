const { table } = require("console");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      pretendard: ["Pretendard"],
    },
    extend: {
      colors: {
        primary: {
          default: "#8348FF",
          light: "#A37BFF",
          dark: "#4F1FB5",
        },
      },
      screens: {
        mobile: "430px",
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  // 클래스 동적할당을 위해 미리 정의한 클래스를 사용할 수 있도록 설정
  safelist: [
    "container",
    {
      pattern: /bg-(primary)-(default|light|dark)/,
    },
  ],
  plugins: [
    function ({ addComponents }) {
      const components = {
        // 모바일 화면 (430px 이하)
        ".container": {
          "@screen mobile": {
            width: "100vw",
          },
        },
        // 태블릿 화면 (431px 이상)
        "@media (min-width: 431px)": {
          ".container": {
            width: "430px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      };
      addComponents(components);
    },
  ],
};
