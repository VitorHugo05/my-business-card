/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         backgroundImage: theme => ({
            'hero': "url('/image/background.png')",
            'discord': "url(/image/stacked-waves-haikei.svg)"
         })
      },
  plugins: [],
}
}
