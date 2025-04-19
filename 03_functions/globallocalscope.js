// // var c=300;
// let a =300;
// if (true){
//     let a=10;
//     const b=20;
//     console.log(a);
//     // c=30;
// }
// console.log(a);
// // console.log(b);
// // console.log(c);

//nested scope
function one(){
    const userName="Sukh";
    function two(){
        const website="youtube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();
 
//+++++++++++++++++ interesting +++++++++++++++++
addOne(2); //Here, it doesn't give error
function addOne(num){
    return num+1;
}
addOne(5);
// addTwo(5); //here , it gives error
const addTwo= function(num){
    return num+2;
}
addTwo(5);