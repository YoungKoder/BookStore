import mongoose, { Schema } from 'mongoose';
import { User } from '../entityInnerfaces/user.interface';
import { Role } from '../../shared/enums/role.enum';

const UserSchema: Schema = new Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
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
    createdDate:{
        type:Date,
        default:Date.now
    },
    role:{
        type:Role,
        required: true,
        default:Role.User
    },
    removed_at:{
        type:Boolean,
        defafult:false
    }
});

const userModel = mongoose.model<User>('User', UserSchema);
export default userModel;