import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A6157',
        secondary: '#F7F6F2',
        accent: '#2E2E2E',
        mint: '#8FD9A8',
        light: '#FAFAFA',
        white: '#FFFFFF',
        content: '#444444',
        gray: '#666666',
        lightGray: '#777777',
      },
    },
  },
  plugins: [],
};

export default config;
