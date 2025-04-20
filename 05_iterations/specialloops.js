//for of

// const arr=[8,2,3,4,5];
// for (const i of arr){ //for of
//     console.log(i);
// }
// const greetings="Hello World";
// for (const greet of greetings){
//     console.log(`Each char is ${greet} `);
// }

//maps

const map =new Map; //objects //ordered
map.set("IN", "INDIA");
map.set("USA","UNITED STATES OF INDIA");
// console.log(map);

// map.set("IN","india"); //updated but not added
// console.log(map);

// for (const [key ,value] of map){
//     console.log(key, ':-' , value);
// }
for (const key in map){ //returns nothing //map is nor iterable
    console.log(key);
}


// const myObject={
//     'game1': 'nfs',
//     'game2': 'Spiderman'
// }
// for (const [key ,value] of myObject){   //OBJECT NOT ITERABLE BY FOR OF
//     console.log(key, ':-' , value);
// }