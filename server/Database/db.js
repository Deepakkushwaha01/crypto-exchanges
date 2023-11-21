import mongoose from "mongoose";

const db = async () => {

    const url = `${process.env.DB}`


    try {
        await mongoose.connect(url);
        console.log("Connected to Database");
    } catch (error) {
        console.log("failed to Connect with Database");
    }
}

export default db;