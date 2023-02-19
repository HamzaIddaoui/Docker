const Mongo_URL = 'mongodb+srv://hamzaiddaoui99:4chgexbmrgAVJbzi@cluster0.vcb7saz.mongodb.net/sample_analytics'
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(Mongo_URL)
        console.log(`Mongo DB Connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB