const name="Sukhpreet Singh";
const repocount= 100;
console.log(name + " has " + repocount + " repositories");

// this is outdated use string interpolation
console.log(`${name} has ${repocount} repositories`);

const gameName= new String("Call of Duty");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("o"));

const newSring =gameName.substring(0, 6);
console.log(newSring);
console.log(gameName.slice(-8, -4));

const newString = gameName.replace("Call", "Battle");
console.log(newString);
console.log(gameName.includes("Call"));
console.log(gameName.startsWith("Call"));

const str= "    Hello World    ";
console.log(str.trim());

console.log(gameName.split("l")); // split by space