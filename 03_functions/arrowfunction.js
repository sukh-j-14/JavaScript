// const user={
//     userName: "Sukh",
//     price : 999,
//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to website`);
//     }
// }
// user.welcomeMessage();
// user.userName="Sneha";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let userName= "Sukh";
//     console.log(this.userName);
//     console.log(this); //lots of functions

// }
// chai();

// const chai= () => {
//     let userName= "Sukh";
//     console.log(userName);
//     console.log(this); //{}
// }
// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4));

//Implicit return 

// const addTwo=(num1,num2)=>  (num1+num2);
const addTwo=(num1,num2)=>  ({userName: "hitesh"});
console.log(addTwo(3,4)); 

const myArray=[1,2,3,4,5];
// myArray.forEach(fucntion(){});
// myArray.forEach(()=>());

