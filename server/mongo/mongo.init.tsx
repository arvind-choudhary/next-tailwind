import mongoose from "mongoose";

export default async function DB () {

    //  return the old connection of mongoose
    if (mongoose.connection.db) {
        return mongoose.connection.db
    }

    return await mongoose.connect() 

}