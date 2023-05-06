/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00E0F2',
        'light-gray': '#CCD6F6',
        'dark-gray': '#8892B0',
        'dark-blue': '#031D32',
        'dark-blue-2': '#213343',
        'dark-blue-3': '#AAF1E1',
        'light-white': '#eee',
      },
    },
  },
  plugins: [],
}
