// const coding=["js","ruby","java","python","cpp"];
// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item;  //doesn't returns anything
// })

// const myNums=[0,1,2,3,4,5,6,7,8,9];
// const newNums=myNums.filter((num)=>num>4); //it returns
// console.log(newNums);

// const newNums=myNums.filter((num)=>{
//     return num>4
// }); //it returns
// console.log(newNums);

// const newNums=[];
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// const ewNums= myNums.map((num)=>(num+10)); //map
// console.log(ewNums);

// const newNums= myNums.map((num)=>(num*10)).map((num)=>num+1).filter((num)=>(num>=40));

// console.log(newNums);

// const myNums=[1,2,3];
// const myTotal= myNums.reduce(function (acc,currval){
//     console.log(acc,currval);
//     return acc+currval;
// },0)
// console.log(myTotal);

const myNums=[1,2,3];
const myTotal= myNums.reduce((acc,currval)=>(currval+acc),0)
console.log(myTotal);
