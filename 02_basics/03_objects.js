// singleton  (constructor)
// Object.create




//object literlas 

const mySum = Symbol("key1")  //

const JsUser = {
    name : "shresth" ,   // "name" : "shresth"  (considering as a string)
    "full name" : "shresth dwivedi",
    // mySym : "mykey1",  //string
    [mySym] : "mykey1",   // right way to define Symbol ****
    age : "18" ,
    location : "ajipr",
    email : "",
    isLoggedIn : false,
    lastLoginDays : [ "monday" , "tuesday"]

}

console.log(JsUser.email);   // not good

console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym); // ouptput -> string

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);     //reminder


JsUser.email= "shresth@gmail.com"
// Object.freeze(JsUser)  // make the object unchangeable  // Freez

JsUser.email= "shresth@microsoft.com" // email value dont change
console.log(JsUser);

JsUser.greeting = function(){     // function can be trated as the variable
    console.log("hello Js User");
}


JsUser.greetingTwo = function(){     // function can be trated as the variable
    console.log(`hello Js User , ${this.name} `);
}


console.log(JsUser.greeting);  // output -> function return back --> function[anonymous] not executed just function reference

console.log(JsUser.greeting());  // output ->
console.log(JsUser.greetingTwo());   


