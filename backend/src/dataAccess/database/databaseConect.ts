import mongoose from 'mongoose';
import {config} from "../../config";


export function addConnection(){
    const url = config.DB_CONNECTION_STRING + config.DB_NAME;
    return new Promise((resolve, reject)=>{
        resolve(()=> mongoose.connect(url))
    })
}