// console.log("sum module executed")

 const x = "Hello world"

 function calculateSum (a,b){
  const sum = a + b;

 console.log(sum)
}


module.exports = {calculateSum}
                        // Or
// module.exports = {calculateSum:calculateSum,x:x}
          //  OR
/* module.exports.calculateSum = calculateSum
module.exports.x = x */
