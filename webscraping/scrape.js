const request = require('request');
const cheerio = require('cheerio');

request('http://douglasmacrae.com/test/?p=3', (error, response, html) => {
if (!error && response.statusCode == 200) {
        //console.log(html);
        const $ = cheerio.load(html);

        const postTitle = $('.content');
        console.log(postTitle.html());
        //console.log(postTitle.text());
//        const output = postTitle.children('h2').text();
        const output = postTitle.children('h2').parent().text();

        console.log(output);
    }
});
