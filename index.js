import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/userRoute.js';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000;
const monogUrl = process.env.MONGO_URL;

const dbConnect = async (url) => {
    await mongoose.connect(url);
}

dbConnect(monogUrl).then(() => {
    console.log("Connected to MongoDB")
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.log("Failed to connect Mongodb.")
})

app.use('/api/v1', router)

app.use((req, res, next) => {
    res.send('Route not found!');
})
