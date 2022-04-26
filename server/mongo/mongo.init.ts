import mongoose from "mongoose";

export default (async function DB () {
    //  return the old connection of mongoose
    if (global.dbConnection) {
        console.log("Connected");
        return;
    }
    await mongoose.connect(process.env.MONGO_URI).then((value) => { global.dbConnection = value; console.log("Connected 1");}).catch(console.error); 
}());

export { mongoose }