const mongoose = require("mongoose")
const connectDB=async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        // res.sendstatus(200).send({
        //     message: "Database connected"
        // })
        console.log(`Database is connected`.bgGreen.white)
    } catch (error) {
        // res.sendstatus(504).send({
        //     message: `Internal Server error ${error}`,
        //     success: false,
        //     description: `Database not connected`,
        // })
        console.log(`Error occurred ${error}`.bgRed.white)
    }

}
module.exports = connectDB