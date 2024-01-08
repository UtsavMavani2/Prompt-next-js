import mongoose from "mongoose";

let isConnected = false;

export const connectToDB =async () => {
    mongoose.set('strictQuery',true)

    if (isConnected) {
        console.log('====================================');
        console.log("MongoDB is already connected");
        console.log('====================================');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODG_URI,
            {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology:true,               
            }
        )
        isConnected = true;
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}