/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFCF8',
        foreground: '#2C2C24',
        surface: '#FEFEFA',
        primary: {
          DEFAULT: '#5D7052',
          hover: '#4A5A41',
          light: '#768B6A',
          foreground: '#F3F4F1',
        },
        secondary: {
          DEFAULT: '#C18C5D',
          hover: '#A97549',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#E6DCCD',
          foreground: '#4A4A40',
        },
        muted: {
          DEFAULT: '#F0EBE5',
          foreground: '#78786C',
        },
        border: '#DED8CF',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-alt': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(93, 112, 82, 0.15)',
        'soft-lg': '0 10px 40px -10px rgba(93, 112, 82, 0.20)',
        'clay': '0 10px 40px -10px rgba(193, 140, 93, 0.22)',
      },
    },
  },
  plugins: [],
}
