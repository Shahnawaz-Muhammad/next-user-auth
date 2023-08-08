import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Mongodb Connected Successfully")
        })

        connection.on("error", (err) => {
            console.log("Mongodb Connected Error. Please make sure Mongodb is connected.", + err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong", error)
    }
}