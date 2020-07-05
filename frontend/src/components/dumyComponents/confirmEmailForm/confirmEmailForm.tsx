import React from"react";
import { FormWrapper } from "../formWrapper/formWrapper";

export const ConfirmEmail:React.SFC<{}>=()=>{
    return(
        <FormWrapper isAuth={false} title="Confirm your email">
            {
                {
                    content: 
                    <div>
                        <p>We have sent an e-mail with a confirmation link 
                    to you email address, in order to complete the sign-up process, please click the confirmation link.</p>
                        <p>If you do  not receive a confirmation e-mail, please check your spam folder. 
                            Also please verify that you entered a valid email address in our sign-up form</p>
                    </div>
                }
            }
        </FormWrapper>
    )
}