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

addConnection()
.then(() => console.log("Conection was succes"))
.catch((err) => console.error(err))


app.get( "/", ( req, res ) => {
    res.send( "Hello world!Hlff" );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
