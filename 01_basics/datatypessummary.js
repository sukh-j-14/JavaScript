//Primite data types

// 7 categories of primitive data types
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Symbol

const id= Symbol('123');
const id2= Symbol('123');
console.log(id===id2); //false

const bigNumber= 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber) //bigint
console.log(bigNumber); //1234567890123456789012345678901234567890n

//reference data types (non-primitive)
// 1. Object
// 2. Array
// 3. Functions
// 4. Date
// 5. RegExp
// 6. Map
// 7. Set

const heros=["shaktiman","spiderman","batman"];
const hero={
    name:"shaktiman",
    age:25,
    isActive:true,
    address:{
        city:"Delhi",
        state:"UP"
    }
}
const myFunction= function(){
    console.log("hello");
}
const date= new Date();
const regexp= /abc/;
const map= new Map();
const set= new Set();

console.log(typeof heros); //object
console.log(typeof hero); //object
console.log(typeof myFunction); //function //objectfunction is a special type of object
console.log(typeof date); //object
console.log(typeof regexp); //object
console.log(typeof map); //object
console.log(typeof set); //object

//Memory management

// 1. Stack memory
// 2. Heap memory
// Stack memory is used for primitive data types and function calls.
// Heap memory is used for reference data types.
// Stack memory is faster than heap memory.
// Stack memory is used for static memory allocation.
// Heap memory is used for dynamic memory allocation.
// Stack memory is used for storing local variables.
// Heap memory is used for storing objects.
// Stack memory is used for storing function calls.
// Heap memory is used for storing objects.

let myname= "Sukhpreet Singh";
let myname2= myname;
myname2="Hitesh";
console.log(myname); //Sukhpreet Singh
console.log(myname2); //Hitesh

// myname2 is a copy of myname.

let userONE={
    name:"Sukhpreet Singh",
    age:18,
    isActive:true
}
let userTWO=userONE;
userTWO.name="Hitesh";
console.log(userONE.name); //Hitesh
console.log(userTWO.name); //Hitesh
// userTWO is a reference of userONE.

