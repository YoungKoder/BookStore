import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!Hlff" );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
