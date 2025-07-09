class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;               //maximum call stack size exceeded
    }
}
const Sukh= new User("Sukh","Sukh@1234");
console.log(Sukh.password);