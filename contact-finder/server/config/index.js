if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const connectionURI = process.env.MONGO_URI;

const mongoose = require('mongoose');

async function connectDB() {
    try {
        const db = await mongoose.connect(connectionURI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log('db connected');
    } catch (err) {
        console.log(err);
        process.exit(404);
    }
}

module.exports = connectDB;
