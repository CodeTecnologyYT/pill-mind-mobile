/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./shared/**/*.{js,jsx,ts,tsx}",
        "./features/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#2879E4",
                primary_light: "#3B82F6",
                secondary: "#000000",
                black_light: "#424242",
                black_slim: "#888888",
                background: "#F6F6F6",
                gray_light: "#AEAEAE",
                gray_icon: "#cacaca",
            },
        },
    },
    plugins: [],
}

