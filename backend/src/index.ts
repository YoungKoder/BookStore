//import modules from package
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//import models and interfaces
import { User } from './dataAccess/entityInnerfaces/user.interface';
import userModel  from "./dataAccess/entityModels/user.model";

//import routes
import routes from "./shared/routes/routes";

import { addConnection } from "./dataAccess/database/databaseConect";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(bodyParser.json());
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
