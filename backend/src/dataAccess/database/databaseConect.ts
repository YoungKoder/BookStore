import mongoose from 'mongoose';
// import {config} from "../../config";


export function addConnection(){
    const url = process.env.DB_CONNECTION_STRING + process.env.DB_NAME;
    mongoose.connect(url)
    .then(() => console.log("Conection was succes"))
    .catch((err) => console.error(err))
}