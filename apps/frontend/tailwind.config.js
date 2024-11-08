/** @type {import('tailwindcss').Config} */
const brandColors = {
    "bryce-blue": {
        DEFAULT: "rgb(42, 167, 255)",
        accent: "rgb(32, 121, 184)",
    },
    "bryce-black": {
        DEFAULT: "rgb(18, 18, 21)",
        accent: "rgb(30, 30, 33)",
    },
    "bryce-gray": {
        DEFAULT: "rgb(72, 72, 75)",
        accent: "rgb(45, 45, 48)",
        light: "rgb(240, 240, 243)",
    },
    "bryce-white": {
        DEFAULT: "rgb(250, 250, 253)",
        accent: "rgb(247, 247, 250)",
    },
    "bryce-purple": {
        DEFAULT: "rgb(174, 55, 255)",
    },
    "bryce-alt": {
        DEFAULT: "rgb(255, 255, 255)",
    },
    success: {
        DEFAULT: "rgb(34, 211, 104)",
        accent: "rgb(252, 255, 41)",
    },
    warning: {
        DEFAULT: "rgb(255,130,42)",
        accent: "rgb(255, 198, 41)",
    },
    error: {
        DEFAULT: "rgb(211, 34, 53)",
        accent: "rgb(255, 97, 97)",
    },
}

module.exports = {
    darkMode: "class",
    content: [
        "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,html}",
        "./app/**/*.{ts,tsx,jsx,js}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: (theme) => {
                const spacing = { ...theme("spacing"), ...{ 144: "36rem" } }

                return Object.keys(spacing).reduce(
                    (accumulator, spacingKey) => {
                        return {
                            ...accumulator,
                            [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
                        }
                    },
                    {}
                )
            },

            fontSize: {
                "body-lg": "15px",
                body: "14px",
                xs: ["0.75rem", { lineHeight: "1.5" }],
                sm: ["0.875rem", { lineHeight: "1.5" }],
                base: ["1rem", { lineHeight: "1.5" }],
                lg: ["1.125rem", { lineHeight: "1.5" }],
                xl: ["1.25rem", { lineHeight: "1.5" }],
                "2xl": ["1.5rem", { lineHeight: "1.5" }],
                "3xl": ["1.875rem", { lineHeight: "1.5" }],
                "4xl": ["2.25rem", { lineHeight: "1.5" }],
                "5xl": ["3rem", { lineHeight: "1.5" }],
                "6xl": ["3.75rem", { lineHeight: "1.45" }],
                "7xl": ["4.5rem", { lineHeight: "1.4" }],
                "8xl": ["6rem", { lineHeight: "1.35" }],
                "9xl": ["8rem", { lineHeight: "1.3" }],
            },
            colors: {
                ...brandColors,
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "fade-in": "fade-in 150ms linear",
                "fade-in-fast": "fade-in 100ms ease-in-out",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                shimmer: {
                    "0%": {
                        ["background-position"]: "-1000px 0",
                    },
                    "100%": {
                        ["background-position"]: "1000px 0",
                    },
                },
            },
            boxShadow: {
                glow: "0 4px 14px 0 rgba(0, 0, 0, 0.3)",
            },
        },
        screens: {
            sm: "710px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1800px",
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries"),
    ],
}
