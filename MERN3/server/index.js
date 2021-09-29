import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);


const PORT = process.env.REACT_APP_PORT || 4000;

mongoose.connect(process.env.REACT_APP_DB_URI)
.then(() => app.listen(PORT, () => {
  console.log(`connected to ${PORT}`)
}))
.catch((error) => {
  console.log(error.message)
})