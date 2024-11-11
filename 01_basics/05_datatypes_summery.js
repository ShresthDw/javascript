// primitive

// 7types : string ,number, boolean , null, undefined , symbols, bigint 

//javascript is static type or dynamic type ??

//const score:number = 100 (typescript/cousin of javascript)

const score = 100
const scoreValue = 100.3 // nofloat

const isLoggedIn = false
const outSideTemp = null 

let userEmail ;
let userEmail01 = undefined; // same thing as above

const id = Symbol('123')
const anotherId = Symbol('123') // value is not same 
console.log(typeof id);


//console.log( id === anotherId);


const bigNumber = 58654854769876969n 
console.log(typeof bigNumber);  // datatype => bigint


const heros = [ "shaktiman", "naagraj", "dooga"]

let myObj ={
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");  
}


console.log(typeof myObj);    // datatype=> functions
console.log(typeof myFunction);  //datatype=> function object
console.log(typeof heros);     datatype=> functions






// refrencetype (non premitive)

//araays, Objects, Functions