"hello" + "world"  

const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");  

console.log(` hello my name is  ${name} and repo count is  ${repoCount}  `);  

const gameName = new String ("this-is-shresth")   // string object keynpair

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)   // subtsring dont obey negating indexing like below
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "  shresth  "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove spaces



const url = "https://shresth.com/shresth%20dwivedi"
console.log(url.replace('%20', '-'));


console.log(url.includes('shresth'));


console.log(gameName.split('-'));
