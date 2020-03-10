import express from "express";
import http from "http";

const app = express();

const port = 8083;

app.get( "/", ( req, res ) => {
    res.send( "Hello world!Hlfffffssdd" );
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
