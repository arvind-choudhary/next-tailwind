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

    profilePic: {
        type: String,
        trim: true,
        required: [ true, 'Field is required']
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Field is required'],
    },

    password: {
        type: String,
        required: [true, 'Field is required'],
    }

}, { timestamps: true })