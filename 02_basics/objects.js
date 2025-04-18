//singleton by constructor
//by literals not singleton

// Object.create this is constructor method

//object literals


//declaring a object using object literal
const mySym= Symbol("key1");
const JsUser={
    name: "Sukhpreet Singh",
    age: 24,
    "full name": "Sukh",
    [mySym]: "mykey1",
    email: "sukh@gmail.com",
    isLoggedIn: true,
    lastlogIn: ["Monday","Tuesday"]
};

//accessing 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);
 //to use symbol as key in object , we use []

 //changing

 JsUser.email="Sukh@chatgpt.com";
 //to stop changing use freeze
//  Object.freeze(JsUser);
 JsUser.email="sukhi@cat.com" //freezed doesn't change
//  console.log(JsUser);

 JsUser.greeting= function(){
    console.log(`Hello JS user ${this.name}`);
 }
 console.log(JsUser.greeting); //[Function (anonymous)]

 console.log(JsUser.greeting()); //Hello JS User undefined

