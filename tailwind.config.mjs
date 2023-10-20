/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '365px',
      sm: '450px',
      md: '569px',
      lg: '768px'
    },
    extend: {}
  },
  plugins: []
}
