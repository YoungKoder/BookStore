export class UserWithThisEmailAlreadyExist extends Error {
    message:string
    constructor(){
        super();
        this.message = "user with this email already exist";
    }
}