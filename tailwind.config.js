/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'centered': '0 0 20px 5px rgba(0, 0, 0, 0.1)',
        'hover': '0 0 15px 2px #0284c7',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    /* function({addUtilities}) {
      addUtilities({
        '.hover-shadow:hover' : {
          boxShadow: '0 0 20px 5px #0284c7'
        }
      }, ['responsive', 'hover', 'focus'])
    } */
  ],
}
