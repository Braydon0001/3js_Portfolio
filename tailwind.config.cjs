const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#020f3d",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#aaa6c3",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: "#151030",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#915eff",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "501px",
        sm: "700px",
        md: "1366px",
        lg: "1366px",
        xl: "1600px",
      },
      backgroundImage: {
        b1: "url('/img/bg/b1.jpg')",
        b2: "url('/img/bg/b2.jpg')",
        b3: "url('/img/bg/b3.jpg')",
        b4: "url('/img/bg/b4.jpg')",
        b5: "url('/img/bg/b5.jpg')",
        b6: "url('/img/bg/b6.jpg')",
        b7: "url('/img/bg/b7.jpg')",
        b8: "url('/img/bg/b8.jpg')",
        b9: "url('/img/bg/computer.jpg')",

        typing: "url('/img/bg/typing.jpg')",
        coding: "url('/img/bg/coding-bg.jpg')",
        "hero-pattern": "url('/src/assets/bg4.svg')",
        "hero-bg-1": "url('/img/bg/bg-option-1.jpg')",
        "hero-bg-1-1": "url('/img/bg/bg-option-1-1.jpg')",
        "hero-bg-2": "url('/img/bg/bg-option-2.jpg')",
        "hero-bg-3": "url('/img/bg/bg-option-3.jpg')",
        "hero-bg-4": "url('/img/bg/bg-option-4.jpg')",
        "hero-bg-5": "url('/img/bg/bg-option-5.jpg')",
        "hero-bg-5-1": "url('/img/bg/bg-option-5-1.jpg')",

        "parallax-layer-1": "url('/img/bg/parallax-bg/Layer-1.jpg')",
        "parallax-layer-2": "url('/img/bg/parallax-bg/Layer-2.png')",
        "parallax-layer-3": "url('/img/bg/parallax-bg/Layer-3.png')",
        "parallax-layer-4": "url('/img/bg/parallax-bg/Layer-4.png')",

        "paricle-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(245, 222, 250,0.5) 0%, rgba(145,94,255,0) 100%)",
      },
      boxShadow: {
        custom: "1px 1px 6px #ddd",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
