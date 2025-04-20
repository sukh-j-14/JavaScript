const myObject={
    'js':'javascript',
    'py':'python'
};
//for in

for (const key in myObject){ //returns only keys
    console.log(key);
}
for (const key in myObject){ //returns values
    console.log(myObject[key]);
}
const programming=["js","rb"]; //returns indexes
for (const key in programming){
    console.log(key);
}
for (const key in programming){ //returns values
    console.log(programming[key]);
}