import { type Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';


export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#36363D',
        'tiffany_blue': {
          DEFAULT: '#7bdcd7',
          100: '#0e3634',
          200: '#1d6c68',
          300: '#2ba29c',
          400: '#44cdc6',
          500: '#7bdcd7',
          600: '#95e3df',
          700: '#afeae7',
          800: '#caf1ef',
          900: '#e4f8f7'
        },
        'keppel': {
          DEFAULT: '#04bfad',
          100: '#012622',
          200: '#024c45',
          300: '#027267',
          400: '#039889',
          500: '#04bfad',
          600: '#07fae2',
          700: '#45fbe9',
          800: '#83fcf0',
          900: '#c1fef8'
        },
        'persian_green': {
          DEFAULT: '#03a696',
          100: '#01211e',
          200: '#01423c',
          300: '#026359',
          400: '#038477',
          500: '#03a696',
          600: '#05e8d1',
          700: '#36fbe7',
          800: '#79fcef',
          900: '#bcfef7'
        },
        'bleu_de_france': {
          DEFAULT: '#1a86d9',
          100: '#051b2c',
          200: '#0a3658',
          300: '#0f5183',
          400: '#156caf',
          500: '#1a86d9',
          600: '#41a0e9',
          700: '#71b8ee',
          800: '#a0d0f4',
          900: '#d0e7f9'
        },
        'honolulu_blue': {
          DEFAULT: '#187cc9',
          100: '#051928',
          200: '#093250',
          300: '#0e4a79',
          400: '#1363a1',
          500: '#187cc9',
          600: '#3399e7',
          700: '#66b2ed',
          800: '#99ccf3',
          900: '#cce5f9'
        },
        'white_smoke': {
          DEFAULT: '#f2f2f2',
          100: '#303030',
          200: '#616161',
          300: '#919191',
          400: '#c2c2c2',
          500: '#f2f2f2',
          600: '#f5f5f5',
          700: '#f7f7f7',
          800: '#fafafa',
          900: '#fcfcfc'
        },
        'platinum': {
          DEFAULT: '#d3dada',
          100: '#272f2f',
          200: '#4e5d5d',
          300: '#758c8c',
          400: '#a4b3b3',
          500: '#d3dada',
          600: '#dbe1e1',
          700: '#e4e9e9',
          800: '#edf0f0',
          900: '#f6f8f8'
        },
        'battleship_gray': {
          DEFAULT: '#7c8685',
          100: '#191b1b',
          200: '#323636',
          300: '#4b5151',
          400: '#646c6b',
          500: '#7c8685',
          600: '#979f9e',
          700: '#b1b7b6',
          800: '#cbcfcf',
          900: '#e5e7e7'
        },
        'onyx': {
          DEFAULT: '#3d3d40',
          100: '#0c0c0d',
          200: '#19191a',
          300: '#252527',
          400: '#323234',
          500: '#3d3d40',
          600: '#646468',
          700: '#8a8a8f',
          800: '#b1b1b4',
          900: '#d8d8da'
        },
        'jet': {
          DEFAULT: '#36363d',
          100: '#0b0b0c',
          200: '#161619',
          300: '#212125',
          400: '#2c2c32',
          500: '#36363d',
          600: '#5c5c68',
          700: '#828290',
          800: '#acacb5',
          900: '#d5d5da'
        }

      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require("daisyui")
  ],
  daisyui: {
    themes: [{
        coinSpotterDark: {
          // Base Colors for the Theme
          "primary": "#04BFAD",
          "primary-focus": "#03A696",
          "secondary": "#1A86D9",
          "secondary-focus": "#1A86D9",
          "accent": "#F2231D",
          "accent-focus": "#A6100C",
          "neutral": "#F2F2F2",
          "neutral-focus": "#F2F2F2",
          "base-100": "#36363D",
          "neutral-content ": "#3D3D40",
          // Custom Semantic Colors
        },
        coinSpotterLight: {
          // Base Colors for the Theme
          "primary": "#04BFAD",
          "primary-focus": "#03A696",
          "secondary": "#1A86D9",
          "secondary-focus": "#1A86D9",
          "accent": "#F2231D",
          "accent-focus": "#A6100C",
          "neutral": "#36363D",
          "neutral-focus": "#3D3D40",
          "base-100": "#F2F2F2",
          "neutral-content ": "#F2F2F2",

          // Custom Semantic Colors
        },
      }
    ],
  }
} satisfies Config;