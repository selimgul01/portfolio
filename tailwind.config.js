/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        // 'sans' ana sans-serif fontunuzu değiştirebilir
        // Veya yeni bir isim verebilirsiniz: 'montserrat': ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // Eğer başlıklar için farklı bir font kullanacaksanız:
        // headline: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}