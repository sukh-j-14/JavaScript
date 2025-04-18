// // const tinder =new Object();//by constructor //singleton

// const tinderUser={
//     Id: "Sukh-j-14",
//     name:"Sukh",
//     age: 21,
//     isLoggedIn: true
// };
// const regularUser={
//     email: "Sukh@gmail.com",
//     fullname:{
//         userfullName:{
//             firstName: "Sukhpreet",
//             LastName: "Singh"
//         }
//     },
//     age: 24
// }
// console.log(regularUser.fullname.userfullName.firstName); //? syntax if type also exists
// console.log(regularUser["fullname"]["userfullName"]["firstName"]); //correct syntax

// const obj1={1:"a",2:"a"};
// const obj2={3:"c",4:"d"};
// // const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2); //target, source
// console.log(obj3);
// console.log(obj1);

// const obj4= {...obj1,...obj2}; //spread
// // console.log(obj4); //better

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName: "JS in Hindi",
    price: 99,
    courseInstructor: "hitesh"
}
const {courseInstructor: Instructor}=course;
console.log(Instructor); //make new name destructuring
//apis in json
// {
//     "name": "Sukh",
//     "coursename": "js",
//     "price": "free"
// }

//apis in array of objects
// [
//     {

//     }
//     {

//     }
//     {

//     }
// ]
//json formatter