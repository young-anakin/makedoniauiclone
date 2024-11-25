import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        vidaloka: ['Vidaloka', 'serif'],  // Added Vidaloka font here
        poppins: ['Poppins', 'sans-serif'],  // Added Poppins font here
        lato: ['Lato', 'sans-serif'],

      },
      backgroundImage: {
        'front-page' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/06/Mekedonia-Woman-Bed-Riders-768x512.jpg')",
        'binyam' : "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00478-1024x683.jpg')",
        'help-us': "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00474-768x512.jpg')",
        'home-bg': "url('https://mekedoniahomes.org/wp-content/uploads/2023/02/DSC00474-768x512.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
