const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { UserRouter } = require('./routes/user');
 const { usermiddleware } = require('./middleware/usermiddleware');
require('dotenv').config();
//itha me te config madhun yetay ka check kelo ./config
const {JWT_SECRET_USER} = require('./config')
//ani itha print karun pahilo tr mg ala 
console.log(JWT_SECRET_USER)
app.use(express.json());



//itha me te usermiddleware delte kelo karan ajun signupch kelo nahi mg kay garaj tachyi
//  app.use('/user', usermiddleware);
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

