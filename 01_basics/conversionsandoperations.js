let score="33abc";
//if null then 0
//if undefined then NaN

console.log(typeof score);

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
//value converted but not in number

let isLoggedIn=undefined;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

let value= 3;
let negValue = -value;

console.log(negValue);

let str1= "hello";
let str2= " world";
let str3= str1+str2;
console.log(str3);

console.log(1+"2");
console.log(1+2+"3");
console.log("1"+2+3);

console.log(+true);
console.log(+"");

