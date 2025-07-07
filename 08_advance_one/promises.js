// fetch('https://api.github.com/users/sukh-j-14').then().catch().finally();


// Above is consuming promises 

const promiseOne= new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve();                                                  // call resolve to connect with .then
    },2000);
});                                                                 // promise bnana

promiseOne.then(function(){
    console.log("Promise Consumed");
})


// new Promise( (resolve,reject) => {
//     setTimeout(()=>{
//         console.log("Async Task 2");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Async 2 resolved");
// });

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

