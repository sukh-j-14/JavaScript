console.log("2">1); //true
console.log("12">2); //true

console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null<0); //false
console.log(null<=0); //true
console.log(undefined==null); //true
console.log(undefined===null); //false //strict check
console.log(undefined>0); //false
console.log(undefined>=0); //false
console.log(undefined<0); //false
console.log(undefined<=0); //false
console.log(undefined==false); //false

console.log(1==="1"); //false
console.log(1===true); //false
console.log(1==true); //true
