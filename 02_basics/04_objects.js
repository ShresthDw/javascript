// const tinderUser = new Object()   // singleton objetc 
const tinderUser = {}             // non singleton objetc

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn  = false

console.log(tinderUser);

const regularUser = {
    email : "shresth@gmail.com",
    fullname: {
        userfullname:{
            firstname : "shresth",
            lastname: "dwivedi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 ={ 1:"a" , 2: "b"}
const obj2 ={ 3:"c" , 4: "d"}
const obj4 ={ 5:"e" , 6: "f"}



// const obj3 = { obj1 , obj2}   // will indent the other objetc

// const obj3 = Object.assign({}, obj1 , obj2)   // {}(empty Array)(if more than two onject) are optional parameter 


const obj3 = { ...obj1, ...obj2, ...obj4}  //spread 
console.log(obj3);

const users = [          // many object's inside array
    {
        id : 1,
        email : "shretsh@gmail.com"
    },
    {
        id : 1,
        email : "shretsh@gmail.com"
    },
    {
        id : 1,
        email : "shretsh@gmail.com"
    },
    {
        id : 1,
        email : "shretsh@gmail.com"
    },

]



users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // datatype is array so can use loop 
console.log(Object.values(tinderUser)); 

console.log(Object.entries(tinderUser)); 


console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// destructuring in objects 

const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructure : "shresth"
}

// course.courseInstructure

const {courseInstructure} = course

console.log(courseInstructure);

console.log(Instructure);



// API
// Json
{
    "name" : "shresth",
    "coursename" : "js in hindi",
    "price": "free"

}

//// remaining******************************************
