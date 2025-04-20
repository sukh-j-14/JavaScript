const coding=["js", "ruby","java","swift"]
// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index, arr)=>{
//     console.log(item, index,arr);
// })

const myCoding=[
    {
        languageName:'JavaScript',
        extension: 'js'
    },
    {
        languageName:'Python',
        extension: 'py'   
    },
    {
        languageName:'C++',
        extension: 'cpp'
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})