/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        void: "#05070d",
        panel: "rgba(11, 18, 32, 0.72)",
        cyanfire: "#34d4ff",
        ember: "#ff6b2b",
        danger: "#ff345f",
        signal: "#9b7cff",
        aurora: "#56f0c4"
      },
      boxShadow: {
        glow: "0 0 45px rgba(52, 212, 255, 0.28)",
        danger: "0 0 55px rgba(255, 83, 44, 0.28)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 20% 15%, rgba(52,212,255,.18), transparent 24rem), radial-gradient(circle at 82% 18%, rgba(155,124,255,.16), transparent 22rem), radial-gradient(circle at 54% 82%, rgba(255,107,43,.12), transparent 24rem)"
      }
    }
  },
  plugins: []
};

