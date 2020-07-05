export interface ModalsState{
    modal:Array<Modal>,
    // modalWithSignInFormOpen:Boolean,
    // modalWithSignUpFormOpen:Boolean,
    // modalWithMessageToConfirmAuth:Boolean,
    // modalWithRecoverPasswordForm:Boolean
}
interface Modal{
    content:any,
    id:number
}