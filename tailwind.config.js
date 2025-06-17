/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on a CSS class
  content: [
    './pages/**/*.{js,jsx}',     // Include JavaScript and JSX files in the pages directory
    './components/**/*.{js,jsx}', // Include JavaScript and JSX files in the components directory
    './app/**/*.{js,jsx}',       // Include JavaScript and JSX files in the app directory
    './src/**/*.{js,jsx}',       // Include JavaScript and JSX files in the src directory
  ],
  theme: {
    container: {
      center: true,              // Center the container
      padding: '15px',           // Set padding for the container
    },
    screens: {
      sm: '640px',               // Small screen breakpoint
      md: '768px',               // Medium screen breakpoint
      lg: '960px',               // Large screen breakpoint
      xl: '1200px',              // Extra large screen breakpoint
    },
    fontFamily:{
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')], // Plugin for additional animations
}
