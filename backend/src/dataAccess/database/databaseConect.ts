import mongoose from 'mongoose';
import {config} from "../../config";


export function addConnection(){
    const url:string = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    mongoose.connect(url)
    .then(() => console.log("Conection was succes"))
    .catch((err) => console.error(err));
}