const request = require('request');
const cheerio = require('cheerio');

request('https://dailyhodl.com/', (error, response, html) => {
if (!error && response.statusCode == 200) {
        //console.log(html);
        const $ = cheerio.load(html);

        const postTitle = $('.post_title');
//        console.log(postTitle.html());
        console.log(postTitle.text());
    }
});