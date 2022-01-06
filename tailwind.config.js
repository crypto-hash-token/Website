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
 },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
