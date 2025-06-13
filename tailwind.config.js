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
                primary: "#0a7ea4",
                secondary: "#000000",
            },
        },
    },
    plugins: [],
}

