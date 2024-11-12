const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 45.798985
const otherNumberOne = 16645.798985


console.log(otherNumber.toPrecision(4));
console.log(otherNumberOne.toPrecision(4));  // output -> 1664e+5

const hundred = 10000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));



////*************math's */

console.log(Math);  // object type
console.log(Math.abs(-6));   // absolute  hives positine no
console.log(Math.round(4.6));
console.log(Math.ceil(5.6));
console.log(Math.floor(4.6));
console.log(Math.min(3,5,2,8));
console.log(Math.max(3,5,2,8));


console.log(Math.random()); // btween 0 and 1 output
console.log((Math.random()*10) + 1 );  
console.log(Math.floor((Math.random()*10) + 1 ));   


const min = 10
const max = 20


console.log(Math.floor((Math.random() * ( max - min + 1 ))) + min);









 


