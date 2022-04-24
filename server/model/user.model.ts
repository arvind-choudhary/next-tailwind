import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'Field is required']
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'Field is required']
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Field is required']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Field is required']
    }

});

const userModel = model('users', userSchema);
export { userModel }