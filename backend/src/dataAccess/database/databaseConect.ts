import mongoose from 'mongoose';
import {config} from "../../config";


export function addConnection(){
    const url:string = "mongodb+srv://DbBookStore:qwerty2122@cluster0.5318w.mongodb.net/BookStoreBD";
    mongoose.connect(url)
    .then(() => console.log("Conection was succes"))
    .catch((err) => console.error(err));
}