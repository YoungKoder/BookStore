export class WrongCredentialsException extends Error {
    message:string;
    status:number = 401;
    constructor(){
        super();
        this.message = "wrong credential user data";
    }
}