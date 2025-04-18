// const score=400;

// const balance = new Number(1000.0127323);
// console.log(balance);
// console.log(balance.toFixed(3));

// const otherNumber= 23.8966;
// console.log(otherNumber.toPrecision(2)); // 23.9

// const hundreds= 1000000000;
// console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// //---------------------------------Maths-------------------

console.log(Math);
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.random()); // 0.123456789
console.log(Math.random() * 10); // 0-9
console.log(Math.floor(Math.random() * 10)); // 0-9
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.PI); // 3.141592653589793
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1
console.log(Math.tan(0)); // 0
console.log(Math.log(10)); // 2.302585092994046
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.max(10, 20, 30)); // 30

//Math .random() returns a random number between 0 and 1
//Math .random() * 10 returns a random number between 0 and 10

console.log(Math.floor(Math.random() * 10)+1); // 0-9

const min=10;
const max=20;
//Important points

console.log(Math.random() * (max - min+1) + min); // 10-20
console.log(Math.floor(Math.random() * (max - min+1) + min)); // 10-20
