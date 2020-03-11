import mongoose from 'mongoose';

export function addConnection(){
    mongoose.connect("mongodb://localhost:27017/usersdb");
}