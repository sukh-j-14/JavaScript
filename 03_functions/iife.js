//immediately invoked function expression(iife) 

(function chai(){                   //named iife
    console.log("DB CONNECTED");
})(); //iife

(function aurcode(){                //named iife
    console.log("DB CONNECTED");
})(); //iife

( (name) =>{                        //unnamed iife
    console.log(`DB CONNECTED ${name}`);
})("Sukh");



