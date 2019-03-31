const url = require('url');

const myUrl = new URL('https://gljmedia.com/test.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);