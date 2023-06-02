/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            'red': '#FF0000',
            'gray': '#BBBBBB',
            'black': '#000000',
            'white': '#FFFFFF',
            'darkGreen': '#04716C',
            'lightGreen': '#08AD8F',
            'lightGreen2': '#08AD8F'
        },
        fontFamily: {
            'poppins': ['poppins'],
        },
    },
    plugins: [],
}