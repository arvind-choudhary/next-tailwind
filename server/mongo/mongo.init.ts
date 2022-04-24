import mongoose from "mongoose";

export default async function DB () {
    //  return the old connection of mongoose
    if (mongoose.connection.db) {
        return true;
    }
    return await mongoose.connect(process.env.MONGO_URI).then(() => true).catch(console.error); 
}