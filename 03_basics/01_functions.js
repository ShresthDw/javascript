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

function loginUserMessage(username){
    return ` ${username} just loggedin`
}

loginUserMessage("shresth") // will print nothing yet

console.log(loginUserMessage("shresth"));



