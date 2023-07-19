/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#0B0D17',
                lightPurpule: '#D0D6F9',
                white: '#FFFFFF',
                gray: '#383B4B',
            },
            fontFamily: {
                barlowCondensed: ['Barlow Condensed', 'sans-serif'],
                bellefair: ['Bellefair', 'serif'],
                barlow: ['Barlow', 'sans-serif'],
            },
            fontSize: {
                h1: '150px',
                h2: '100px',
                h3: '56px',
                h4: '32px',
                h5: '28px',
                s2: '14px',
                nav: '16px',
                body: '18px',
                mobh1: '80px',
            },
            screens: {
                max: '1440px',
                desktop: '1024px',
                tablet: '640px',
            },
            spacing: {
                xs: '4.75ch',
                s: '2.35ch',
                m: '3.7ch',
                line: '100px',
            },
            lineHeight: {
                line: '100px',
                heading: '150px',
                body: '28px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-mobile':
                    "url('../public/home/background-home-mobile.jpg')",
                'destination-mobile':
                    "url('../public/destination/background-destination-mobile.jpg')",
            },
            height: {
                min: '1px',
                mobile_moon: '170px',
                tablet_moon: '300px',
                desktop_moon: '445px',
            },
            width: {
                mobile_moon: '170px',
                tablet_moon: '300px',
                desktop_moon: '445px',
            },
        },
    },
    plugins: [],
};
