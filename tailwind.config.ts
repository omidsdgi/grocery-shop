import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        slider: '500 / 300'
      },
      boxShadow: {
        'c-xs': '5px 5px 15px 0px rgba(24, 24, 24, 0.05)',
        c: '14px 14px 36px 0px rgba(85, 85, 85, 0.1)',
        'c-lg': '14px 14px 36px 0px rgba(85, 85, 85, 0.22)'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/banner_bg.png')",
        'hero-img': "url('../../images/hero-img.png')"
      },
      fontFamily: {
        quickSand: ['Quicksand', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      fontSize: {
        display1: [
          '96px',
          {
            lineHeight: '128px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        display2: [
          '72px',
          {
            lineHeight: '96px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading1: [
          '48px',
          {
            lineHeight: '64px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading2: [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading3: [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading4: [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading5: [
          '20px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        heading6: [
          '16px',
          {
            lineHeight: '20px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        'heading-sm': [
          '14px',
          {
            lineHeight: '16px',
            letterSpacing: '0',
            fontWeight: '700'
          }
        ],
        large: [
          '18px',
          {
            lineHeight: '26px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        medium: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        small: [
          '14px',
          {
            lineHeight: '21px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ],
        xsmall: [
          '12px',
          {
            lineHeight: '18px',
            letterSpacing: '0',
            fontWeight: '400'
          }
        ]
      },
      colors: {
        transparent: 'rgba(1,1,1,0)',
        white: "rgb(var(--color-white) / <alpha-value>)",
        red: "rgb(var(--color-red) / <alpha-value>)",
        gray: {
          100: "rgb(var(--color-gray-100) / <alpha-value>)",
          200: "rgb(var(--color-gray-200) / <alpha-value>)",
          300: "rgb(var(--color-gray-300) / <alpha-value>)",
          400: "rgb(var(--color-gray-400) / <alpha-value>)",
          500: "rgb(var(--color-gray-500) / <alpha-value>)",
        },
        yellow: {
          100: "rgb(var(--color-yellow-100) / <alpha-value>)",
          200: "rgb(var(--color-yellow-200) / <alpha-value>)",
        },
        blue: {
          100: "rgb(var(--color-blue-100) / <alpha-value>)",
          200: "rgb(var(--color-blue-200) / <alpha-value>)",
          300: "rgb(var(--color-blue-300) / <alpha-value>)",
        },
        green: {
          100: "rgb(var(--color-green-100) / <alpha-value>)",
          150: "rgb(var(--color-green-150) / <alpha-value>)",
          200: "rgb(var(--color-green-200) / <alpha-value>)",
          300: "rgb(var(--color-green-300) / <alpha-value>)",
          400: "rgb(var(--color-green-400) / <alpha-value>)",
          500: "rgb(var(--color-green-500) / <alpha-value>)",
          600: "rgb(var(--color-green-600) / <alpha-value>)",
        },
        brown: {
          500: "rgb(var(--color-brown-500) / <alpha-value>)",
        }
      }
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1632px'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
