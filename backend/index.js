const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { userRouter } = require('./routes/user');
const { usermiddleware } = require('./middleware/usermiddleware');


app.use(express.json());

app.use('/user', userRouter);
app.use('/user', usermiddleware);



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
        process.exit(1);
    }
}
module.exports = connectDB



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

