/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
      fontFamily: {
        'Archivo': ["Archivo"],
        'Inter': ["Inter"],
        'Antonio': ["Antonio"],
        'Roboto': ["Roboto"],
        'Aptos': ['Aptos', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif'], // Add the custom font here
  
        // 'Archivo': ["Archivo"],
        },
        backgroundImage: {
          'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        },
        keyframes: {
          disco: {
            '0%': { transform: 'translateY(-50%) rotate(0deg)' },
            '100%': { transform: 'translateY(-50%) rotate(360deg)' },
          },
        },
        animation: {
          disco: 'disco 3s linear infinite',
        },
    },
  },
  plugins: [],
};
