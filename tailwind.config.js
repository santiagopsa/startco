/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          firo: {
            navy: "#000000",
            blue: "#000000",
            violet: "#FF6B00",
            bg: "#FFFFFF",
            text: "#000000",
            muted: "#4B5563",
            line: "#E5E7EB",
            success: "#FF6B00",
            warn: "#FF6B00",
          },
        },
        boxShadow: {
          soft: "0 8px 24px rgba(47, 59, 43, 0.08)",
        },
      },
    },
    plugins: [],
  };
  