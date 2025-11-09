import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#f9f7f4",
          dark: "#dad7d2"
        },
        charcoal: "#1e1f24",
        mint: "#3ec8b3",
        tangerine: "#ff7a3d"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-baloo)", "var(--font-poppins)", "sans-serif"]
      },
      borderRadius: {
        "4xl": "3rem"
      },
      boxShadow: {
        brand: "0 20px 45px -20px rgba(30, 31, 36, 0.35)",
        glow: "0 0 0 6px rgba(62, 200, 179, 0.25)"
      },
      backgroundImage: {
        fizz: "radial-gradient(circle at 20% 20%, rgba(62, 200, 179,0.18), transparent 60%), radial-gradient(circle at 80% 30%, rgba(255, 122, 61,0.18), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
