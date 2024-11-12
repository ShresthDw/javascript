//  arrays

// in Js it is  resizable 
// 

const myArr = [ 0 ,1 ,2 ,3 ,4]
const myHeros = [ "shaktiman", "nagg", "gooba"]

const myArr2 = new Array(1, 2, 3, 4, )
console.log(myArr[0]);
console.log(myArr[1]);

//  array methods

myArr.push(6)
myArr.push(7)
myArr.push()

myArr.unshift(9)  // add element in beginning  
myArr.shift()     // remove the 9

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));  // -> output -1 (not present)

const newArr = newArr.join()

console.log(myArr);
console.log(typeof myArr); // string ->  output

// slice  and splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3) 
console.log("C" , myArr);  // original array will be manipulated (range will be removed)

console.log(myn2);
 


