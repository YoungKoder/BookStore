import nodemailer, { Transporter } from "nodemailer";
import { User } from "../shared/interfaces/entityInnerfaces/user.interface";
import { getMaxListeners } from "cluster";

export const setConfig = async ():Promise<nodemailer.Transporter>=>{
    // const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, 
        secure:true,
        service:"gmail",
        auth: {
            user: `nomailertest@gmail.com`,
            pass: `qwerty2122`
        }
    });
};

export const sendMail = async(userFromRequest:User)=>{
    const transporter = await setConfig();
    transporter.sendMail({
        from:`"Node js" <nomailertest@gmail.com>`,
        to: `${userFromRequest.email}`,
        subject: "Congratulations you are successfully signedUp on our site",
        html: `
        <h2>Grads! You are successfuly signedUp on our site</h2>

        <p>Your data is:</p>
        <ul>
            <li>
                <p>Login: ${userFromRequest.userName}</p>
            </li>
        </ul>

        <p>To finish the registration pls visit <a href="http://localhost:8081/auth/register/confirmEmail">this page</a></p>
        `
    });  
}

