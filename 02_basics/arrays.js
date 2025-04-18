// // const myArr=[0,1,2,3,4,"true "];
// // console.log(typeof(myArr));

// //in JS arrays are resizeable and can contain different datatypes in it
// //if want real arrays use typed arrays

const myArr=[0,1,2,3,4,5];
// console.log(myArr[0]);

// //shallow copy same refrence 

// const myHeros=["Shaktiman", "Superman"];
// console.log(myHeros); 

// //IT CAN PRINT SIMPLY

// const myarr2= new Array(1,2,3,4,"Sukh");
// console.log(myarr2);

//Array methods

//Push , Pop , unshift -- inserts at beginning, shift --removes starting element
//includes , indexOf -- if not exists -1 , .join returns string
//slice , splice

console.log("A", myArr);
const mynewarr = myArr.slice(1,3);
console.log(mynewarr);
// mynewarr[0]=34;
// console.log(mynewarr);
console.log("B",myArr);

const mynewarr1 = myArr.splice(1,3);
console.log(mynewarr1);
console.log("C",myArr);

// SPLICE REMOVES THAT PORTION FROM ORIGINAL ARRAY
