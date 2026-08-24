const fs = require('fs');
const stats = fs.statSync('src/assets/logo.jpeg');
console.log('File size:', stats.size);
