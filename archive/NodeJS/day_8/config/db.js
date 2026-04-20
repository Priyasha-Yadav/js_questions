const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully!');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}

module.exports = connectDB;


// const mongoose = require('mongoose');

// const DbConnection = mongoose.connect('mongodb://localhost:27017/ecommerce')
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(error => console.log("Connection Error", error))

// module.exports = { DbConnection }