/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Custom colors
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'inherit',
                        a: {
                            color: 'inherit',
                            textDecoration: 'underline',
                            fontWeight: '500',
                        },
                        '[class~="lead"]': {
                            color: 'inherit',
                        },
                        strong: {
                            color: 'inherit',
                        },
                        'ul > li::before': {
                            backgroundColor: 'currentColor',
                        },
                        hr: {
                            borderColor: 'currentColor',
                            opacity: 0.3,
                        },
                        blockquote: {
                            borderLeftColor: 'currentColor',
                            opacity: 0.8,
                        },
                        h1: {
                            color: 'inherit',
                        },
                        h2: {
                            color: 'inherit',
                        },
                        h3: {
                            color: 'inherit',
                        },
                        h4: {
                            color: 'inherit',
                        },
                        'figure figcaption': {
                            color: 'inherit',
                        },
                        code: {
                            color: 'inherit',
                        },
                        'a code': {
                            color: 'inherit',
                        },
                        pre: {
                            color: 'inherit',
                            backgroundColor: 'transparent',
                        },
                        thead: {
                            color: 'inherit',
                        },
                        'tbody tr': {
                            borderBottomColor: 'currentColor',
                            opacity: 0.3,
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
