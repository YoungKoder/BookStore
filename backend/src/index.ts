import express from "express";
import https from "https";
import dotenv from "dotenv";
import { ClientRequest } from "http";

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

const options = {
    hostname:'flaviocopes.com',
    port,
    path:'/todos',
    method: 'GET'
}

const req:ClientRequest = https.request(options,(res)=>{

    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error',(error)=>{
    console.error(error)
})

req.end();