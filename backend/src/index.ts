import express from "express";
import dotenv from "dotenv";
import { User } from './dataAccess/entityInnerfaces/user.interface';
import userModel  from "./dataAccess/entityModels/user.model";
import { getMaxListeners } from "cluster";
import mongoose from "mongoose";
import { addConnection } from "./dataAccess/database/databaseConect";
import routes from "./shared/routes/routes";
dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(routes);

addConnection();
console.log("Mongoose connected");
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });

const user: User = new userModel({
    email: "takkk@m.com",
    first_name: "Max",
    last_name: "Bill",
    password_hash: "ertygfdtr",
    role: "user"
})

userModel.create(user);

user.save((err):Error=>{
   mongoose.disconnect();

    if(err) return new Error(); 
    console.log("Сохранен обьект", user);
})

app.get( "/", ( req, res ) => {
    res.send( "Hello world!Hlff" );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
