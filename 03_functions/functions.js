function sayMyName(){
    console.log("Sukh");
}
//function calls
sayMyName();//CALL

function addTwoNumbers(number1 , number2){
    console.log(`Result: ${number1+number2}`);
}
const Result=addTwoNumbers(3,5);
console.log(Result);
//return statement
function addTwoNumbers1(number1 , number2){
    return number1+number2;
}
   
const Result1=addTwoNumbers1(3,5);
console.log(Result1);

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log(`Please Enter Username`);
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Sukh"));
console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num){
    return num;
}
console.log(calculateCartPrice(100,200,300,500));
//Handling Objects
const user={
    userName:"Sukh",
    price:199
}
function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    userName: "Sukhpreet Singh",
    price: 399,
});
//Handling array
const array=[1,2,3,4,5,6]
console.log(returnArray(array));
function returnArray(getArray){
    return getArray[2];
}

