console.log("s");
console.log("h");
console.log("r");
console.log("e");


function saymyname(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
}

saymyname()


// function addTwoNumbers( num1 ,  num2){
//     console.log( num1 + num2 );
// }


function addTwoNumbers( num1 ,  num2){
    // let result = num1 + num2
    // return result      // no print after that 

    return num1 + num2  // non neeed to declare the third variable
    console.log( num1 + num2 );
}



addTwoNumbers(3,4)
// addTwoNumbers(3,"4")

// addTwoNumbers(3,null)

const result  = addTwoNumbers(3,4)

console.log( "result : " , result);   // type --> undefined

function loginUserMessage(username = "sam"){        // will not go in if statement.
    if (username === undefined){    // (username === undefined) ---> !username
        console.log(" please enter a username");
        return   // output --> undefined 
    }
    return ` ${username} just loggedin`
}

loginUserMessage("shresth") // will print nothing yet

console.log(loginUserMessage("shresth"));

console.log(loginUserMessage(""));  //output ->  just loggedin

console.log(loginUserMessage());  // output --> undefined just loggedin 


function calculateCartPrice ( val1, val2, ...num){     //rest operator/spread 
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username : "shresth",
    price : 199
}


function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}


// handleObject(user)

handleObject({
    username: "sam" ,
    price: 399
})



// passing Arrays


const myNewArary =[ 200, 300, 400]


function returnSecondValue(getArray){
    return getArray[1]  //--> output --> 400
}

// console.log(returnSecondValue(myNewArary));


console.log(returnSecondValue([200, 300, 400]));    // passing array directly

