function sayMyName(){
    console.log("Sukh");
}
sayMyName();//CALL

function addTwoNumbers(number1 , number2){
    console.log(`Result: ${number1+number2}`);
}
const Result=addTwoNumbers(3,5);
console.log(Result);

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