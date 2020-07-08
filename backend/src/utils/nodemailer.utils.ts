import nodemailer, { Transporter } from "nodemailer";
import { User } from "../shared/interfaces/entityInnerfaces/user.interface";

export const sendMail = async(userFromRequest:User = undefined,newPass:String= undefined)=>{
    console.log(`>>> user from signUpform ${userFromRequest.email}`)
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mollie.klein12@ethereal.email',
            pass: 'NbzFKSjUGBTTuW7n2F'
        }
    });
    userFromRequest? 
        transporter.sendMail({
            from:`"Node js" <nodejs@example.com>`,
            to: "maksteslenko924@gmail.com",
            subject: "Congratulations you are successfully signedUp on our site",
            html: `
            <h2>Grads! You are successfuly signedUp on our site</h2>

            <p>Your data is:</p>
            <ul>
                <li>
                    <p>Login: ${userFromRequest.userName}</p>
                    <p>Password: ${userFromRequest.password_hash}</p>
                </li>
            </ul>

            <p>To finish the registration pls visit <a href="http://localhost:3000/http://localhost:3000/confirmEmailSuccess">this page</a></p>
            `
        }): null 
    newPass? transporter.sendMail({
        from:`"Node js" <nodejs@example.com>`,
        to: "maksteslenko924@gmail.com",
        subject: "Your new password",
        html: `
        <h2>Hello,</h2>

        <p>Your data is:</p>
        <ul>
            <li>s
                <p>Password: ${newPass}</p>
            </li>
        </ul>

        <p>To finish the registration pls visit <a href="http://localhost:3000/confirmEmail">this page</a></p>
        `
    }): null 
}

