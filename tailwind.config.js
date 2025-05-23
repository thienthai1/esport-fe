/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{html,js,vue,ts}',
    './components/**/*.{vue,js}',
  ],
  theme: {
    fontFamily: {
      'outfit': ["Outfit", "sans-serif"],
      'lol': ["Beaufort for LOL"],
      'newrocker': ["NewRocker"],
    },
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          150: 'var(--color-primary-150)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          'scrollbar': 'var(--color-primary-scrollbar)',
        },
        'card-bg': 'var(--color-card-bg)',
        'content-bg': 'var(--color-content-bg)',
        'primary-text-50': 'var(--color-primary-text-50)',
        'danger': '#DF4035',
        'success': '#00E472',
        grey: {
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          150: 'var(--color-grey-150)',
        }
      }
    },
  },
  plugins: [],
}

