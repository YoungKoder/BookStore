import mongoose from 'mongoose';
import {config} from "../../config";


export function addConnection(){
    const url:string = "mongodb://localhost:27017/BookStoreBD";
    mongoose.connect(url)
    .then(() => console.log("Conection was succes"))
    .catch((err) => console.error(err));
}