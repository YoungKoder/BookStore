import mongoose, { Schema } from 'mongoose';
import { User } from '../entityInnerfaces/user.interface';

const UserSchema: Schema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    avatar:{
        type: String
    },
    first_name: { 
        type: String, 
        required: true 
    },
    last_name: { 
        type: String, 
        required: true 
    },
    password_hash:{
        type: String, 
        required: true
    },
    role:{
        type:String,
        required: true
    }
});

const userModel = mongoose.model<User>('User', UserSchema);
export default userModel;