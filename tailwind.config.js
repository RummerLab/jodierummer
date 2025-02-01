/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-outfit)'],
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                scaleIn: {
                    from: {
                        opacity: 0,
                        transform: 'rotateX(-10deg) scale(0.9)',
                    },
                    to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                },
                scaleOut: {
                    from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                    to: {
                        opacity: 0,
                        transform: 'rotateX(-10deg) scale(0.95)',
                    },
                },
                enterFromRight: {
                    from: { opacity: 0, transform: 'translateX(200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                enterFromLeft: {
                    from: { opacity: 0, transform: 'translateX(-200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                exitToRight: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(200px)' },
                },
                exitToLeft: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(-200px)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 200ms ease',
                fadeOut: 'fadeOut 200ms ease',
                scaleIn: 'scaleIn 200ms ease',
                scaleOut: 'scaleOut 200ms ease',
                enterFromLeft: 'enterFromLeft 250ms ease',
                enterFromRight: 'enterFromRight 250ms ease',
                exitToLeft: 'exitToLeft 250ms ease',
                exitToRight: 'exitToRight 250ms ease',
            },
        },
    },
    plugins: [],
}
