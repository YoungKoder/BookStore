import express from "express";
import dotenv from "dotenv";
//import {conectDb, addConnection} from "../src/dataAccess/database/databaseConect";
import { User } from '../src/dataAccess/entityInnerfaces/userInterface';
import userModel  from "./dataAccess/entityModels/userModel";
import { getMaxListeners } from "cluster";
import mongoose from "mongoose";
import { addConnection } from "./dataAccess/database/databaseConect";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

//conectDb();
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
