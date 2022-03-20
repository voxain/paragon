module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}','./src/components/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#1890FF"
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#1890FF"
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
