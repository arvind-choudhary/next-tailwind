import { mongoose } from "../mongo/mongo.init";
import { asyncUtil } from "../utils/async.util";
import { generateHash } from '../utils/bycrpt.util';
import { ErrorHandler } from "../utils/error.util";

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
        unique: true,
        required: [true, 'Field is required']
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Field is required']
    }

});

userSchema.pre('save', async function (next) {
    console.log(this)
    if (this.password) {
        const hashPassword = await generateHash(this.password).catch((error) => next(new ErrorHandler({ error, statusCode: 500, message: 'Password hash issue'})));
        this.password = hashPassword;
    }
    next();
})

const userModel =  mongoose.models.users || model('users', userSchema);
export { userModel }

