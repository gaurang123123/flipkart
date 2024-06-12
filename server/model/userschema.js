import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required : true,
        trim : true,
        max: 20
    },
    lastname:{
        type: String,
        required : true,
        trim : true,
        max: 20
    },
    email:{
        type: String,
        required : true,
        trim : true,
        unique : true,
        lowercase: true
    },
    phone:{
        type: String,
        required : true,
        trim : true,
        max: 10
    },
    password:{
        type: String,
        required : true,
        trim : true,
        max: 20
    },
    role:{
        type: Number,
        default: 0
    },

},{timestamps : true});

const user = mongoose.model('user',userschema);
export default user;