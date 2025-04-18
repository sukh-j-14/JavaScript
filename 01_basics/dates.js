//dates in milliseconds from January 1,1970

// let myDate= new Date();
// console.log(myDate); // current date
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23,5,3);
// console.log(myCreatedDate);

let myCreatedDate= new Date("12-01-2014"); //yyyy-mm-dd or mm-dd-yyyy
console.log(myCreatedDate.toDateString());

let myTimeStamp= Date.now();
console.log(myTimeStamp); //in ms from studied above

console.log(myCreatedDate.getTime()); //to convert into ms from date and compare with timestamp Date.now()

console.log(Math.floor(Date.now()/1000)); //to convert in seconds

//getMonth() , getDay() , etc

console.log(myCreatedDate.toLocaleString('default',{
    weekday: "long",
}))




