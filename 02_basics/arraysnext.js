//prototype when expanded
const marvel_heros=["thor","ironman"];
const dc_heroes=["flash","superman","batman"];

// marvel_heros.push(dc_heroes);
// console.log(marvel_heros); //pushed as array

const all_heroes= marvel_heros.concat(dc_heroes);
console.log(all_heroes); //cpncat works properly

const all_newheros =[...marvel_heros,...dc_heroes]; //spread operator
console.log(all_newheros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realanother_Array= another_array.flat(Infinity);
console.log(realanother_Array);
//FLAT flats the array

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Sukhpreet Singh"));

console.log(Array.from({Name: "Sukh"})); // Returns empty array bcz not specified

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
//of used when multiple elements
