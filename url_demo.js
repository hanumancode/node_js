const url = require('url');

const myUrl = new URL('https://gljmedia.com:8000/test.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// host (root domain)
console.log(myUrl.host); // doesn't include the port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params - returns object from the serialized query
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//console.log(myUrl.href);

// Loop through the params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));