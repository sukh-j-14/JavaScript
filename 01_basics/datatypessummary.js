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