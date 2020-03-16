export class WrongAuthenticationTokenException extends Error{
    message:string;
    status:number = 401;
    constructor(){
        super();
        this.message = "token is wrong or in already expired";
    }
}