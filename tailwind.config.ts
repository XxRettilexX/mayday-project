import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#4f46e5", // Indigo-600
                    dark: "#4338ca",   // Indigo-700
                    light: "#6366f1",  // Indigo-500
                },
            },
        },
    },
    plugins: [],
};

export default config;
