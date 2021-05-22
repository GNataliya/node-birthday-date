const moment = require('moment');
require('moment-precise-range-plugin');


const currentDate = moment().format('YYYY-MM-DD');
const myDate = moment('2013/09/17').format('YYYY-MM-DD');
const result = moment.preciseDiff(myDate, currentDate); 

console.log(result); 

const diff = moment().diff(myDate, 'years'); // years

const dif = moment().diff(myDate); // seconds

console.log(diff);
console.log(dif);