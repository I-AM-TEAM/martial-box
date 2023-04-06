/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-red": "#F07878",
        "theme-blue": "#78BEF0",
        "theme-btn-text": "#686868",
        "theme-btn": "#D9D9D9",
      },
      fontSize: {
        "btn": [
          "36px",
          {
            fontWeight: "400"
          }
        ],
        "win-score": [
          "48px",
          {
            fontWeight: "400"
          }
        ],
        "lose-score": [
          "36px",
          {
            fontWeight: "400"
          }
        ],
        "big-score": [
          "75px",
          {
            fontWeight: "semibold"
          }
        ],
        "u-name": [
          "20px",
          {
            fontWeight: "bold"
          }
        ],
        "p1": [
          "20px",
          {
            fontWeight: "400"
          }
        ],
        "h1": [
          "64px",
          {
            fontWeight: "400"
          }
        ]
      }
    },
  },
  plugins: [],
}
