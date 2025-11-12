/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 在这里添加/合并你的颜色
      colors: {
        primary: '#1E40AF',
        secondary: '#059669',
        accent: '#DC2626',
        future: '#8B5CF6'
      },
    },
  },
  plugins: [],
}

