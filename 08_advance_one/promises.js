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

const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error) {
            resolve(
                {
                userName : "javascript",
                password : "123"
                }
            )
        } else{
            reject('ERROR: JS went wrong');
        }
    },1000)
});

// let's use other method for handling like asyncawait

async function consumePromiseFive(){
    try{
        const response= await promiseFive;                 // error mtlb reject ko khud se handle krlo with try catch
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response=await fetch('https://api.github.com/users/sukh-j-14');
//         // console.log(response);
//         const data= await response.json();           // isko bhi time lgta hai isko bhi await krwao
//         console.log(data);
//     } catch(e){
//         console.log("E", e);
//     }
// }
// getAllUsers();

// ab upr likhe function .then .catch se krte hein

// fetch returns a promise 

fetch('https://api.github.com/users/sukh-j-14')
.then((response)=>{
    return response.json();
}).then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error));

//same async await jaisa hi aya


