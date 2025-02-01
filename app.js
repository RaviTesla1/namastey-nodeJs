// require('./xyz.js')
// const {x} = require('./calculate/sum.js')
const  {calculateMultiply, calculateSum} = require('./calculate')
const  data = require('./data.json')
var name = "Namastey NodeJs"

var a = 10;

var b = 20 ;

// console.log(name)

// console.log(a+b)

calculateSum(1,2);
calculateMultiply(1,2);
console.log('data---',data)
