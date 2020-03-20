import nodemailer, { Transporter } from "nodemailer";
import { User } from "../shared/interfaces/entityInnerfaces/user.interface";

export const setConfig = async ():Promise<nodemailer.Transporter>=>{
    return nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'joelle48@ethereal.email',
            pass: 'pBHhXpWKWdnfh4pUtE'
        }
    });
};

export const sendMail = async(user:User)=>{
    
    const transporter = await setConfig();
    transporter.sendMail({
        from:`"Node js" <joelle48@ethereal.email>`,
        to: `${user.email}`,
        subject: "Some subject",
        text: "This message was sent from NodeJS server"
    })
}

