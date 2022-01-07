module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
         fontFamily: {
             D3: [ "D3" ],
         },
         translate: {
        '': 'rem',
      },
      rotate: {
       '10': '10deg',
     },
     gridRow: {
        'span-2': 'span 2 / span 2',
      },
 },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
