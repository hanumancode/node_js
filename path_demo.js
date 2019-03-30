const path = require('path');

// Entire path and filename
console.log('path with filename: ' + __filename);
// Base file name
console.log('file name: ' + path.basename(__filename));
// Directory name
console.log('directory name: ' + path.dirname(__filename));
// File Extention
console.log('file extention: ' + path.extname(__filename));

// Create path object
console.log(path.parse(__filename));