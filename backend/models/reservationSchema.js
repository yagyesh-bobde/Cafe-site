import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first name should contain min 3 character"],
        maxLength:[30,"firstname cannot have more than 30 character"],
    },
    lastname:{
    type:String,
        required:true,
        minLength:[3,"first name should contain min 3 character"],
        maxLength:[30,"firstname cannot have more than 30 character"],
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"provide a valid email"],

    },
    phone:{
        type:Number,
            required:true,
            minLength:[10,"phone number should contain only 10 digits"],
            maxLength:[10,"firstname cannot have more than 30 character"],
        },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },

})

export const Reservation=mongoose.model("Reservation",reservationSchema)