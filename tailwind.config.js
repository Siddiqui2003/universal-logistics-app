/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan every app page for classes EXCEPT print.html — the printed Airway
  // Bill has its own finished, print-tuned design (DHL/FedEx-style) and must
  // not be touched by Tailwind's reset or utility classes.
  content: [
    "./public/*.html",
    "./public/js/**/*.js",
    "!./public/print.html",
  ],
  // We keep Tailwind's base "preflight" reset OFF. This app already has a
  // mature design system (css/theme.css + css/style.css) that a lot of care
  // went into (forms, tables, the AWB template, etc). Preflight would strip
  // default browser styling those files rely on and could visually break
  // pages that already look right. Tailwind is added here purely as an
  // additive utility layer for new polish (spacing, shadows, gradients,
  // hover states) — not as a replacement for the existing system.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          maroon: "#7a1f1f", // matches the Universal Logistics logo mark
          blue: "#2563eb",   // matches existing --blue accent
          ink: "#0f172a",
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)",
        "card-hover": "0 8px 24px rgba(15,23,42,.12)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
