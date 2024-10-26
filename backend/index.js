const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { UserRouter } = require('./routes/user');
 const { usermiddleware } = require('./middleware/usermiddleware');
require('dotenv').config();


app.use(express.json());

 app.use('/user', usermiddleware);
app.use('/user', UserRouter);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}

connectDB();



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

