module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "react-slick": { "ssr": true }
      }
    ]
  ],  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg"
  ]
};