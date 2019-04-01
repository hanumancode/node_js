var moment = require('moment');

var myDate = new Date();
//console.log(myDate);

var myCoolDate = moment(myDate).format('LL');

console.log(myCoolDate);