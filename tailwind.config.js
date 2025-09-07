/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import aspectRatio from "@tailwindcss/aspect-ratio"

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    plugins: [forms, typography, aspectRatio],
    theme: {
        extend: {
            animation: {
                fade: 'fade 1s linear infinite',
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                mono: ["Fira Code", "ui-monospace", "monospace"],
            },
            keyframes: {
                fade: {
                    '0%': { backgroundColor: '#69717d' },
                    '100%': { backgroundColor: 'transparent' },
                },
            },
        },
    },
}
