import React from "react";
import { FormWrapper } from "../formWrapper/formWrapper";

export const PasswordAssistanceConfirmationMessage:React.SFC<{}> = ()=>{
    return(
        <FormWrapper isAuth={false} title="Password assistance">
            {
                {
                    content: 
                        <div>
                            <p>
                                You will receive on e-mail with a new password to login onto your e-mail box stated in your Personal Profile
                            </p>
                            <p>
                                Please contact our administrator if you don't receive an e-mail message with a new password.
                            </p>
                        </div>
                }
            }
        </FormWrapper>
    )
}