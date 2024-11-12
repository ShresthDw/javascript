// dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // --> object



let myCreateDate = new Date (2023,0,23, 3, 5)
console.log(myCreateDate.toDateString());  //only date
console.log(myCreateDate.toLocaleString());    // date and time both

let myCreateDateOne = new Date ("2023-01-14")    // YYYY-MM-DD can changebin any format
console.log(myCreateDateOne.toLocaleString());


let myTimeStamp =  Date.now( )

console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );  
console.log(newDate.getDay());


// ` ${newDate.getMonth()} and the time is .....`

newDate.toLocaleString('default', {
    weekday : "long",
    // timeZone: ''
})









