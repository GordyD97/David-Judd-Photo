// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }


const tailwindcss = require('tailwindcss');
 module.export= {
  plugins:[ tailwindcss('./tailwind.js'),
   require('autoprefixer')]
 }