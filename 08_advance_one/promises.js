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

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            userName: "Chai",
            email : "test@example.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const PromiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error) {
            resolve(
                {
                userName : "Sukh-j-14",
                password : "12345678"
                }
            )
        } else{
            reject('ERROR: Something went wrong');
        }
    },500)
});

PromiseFour
.then(function(user){
    return user.userName;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Kuch toh ho hi gya hai promise ka");
})


