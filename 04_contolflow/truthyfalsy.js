const userEmail= " ";
if (userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
}
//falsy values

// false , 0,-0,BigInt 0n,"",null,undefined,NaN

// "0" truthy ,"false"," ",[], {}, function(){}

//Nullish Coalescing Operator

let val1;
// val1= null ?? 10;
// // console.log(val1);
var1= undefined ?? 15;
console.log(var1);

//Ternary Operator