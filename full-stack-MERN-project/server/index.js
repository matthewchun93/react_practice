import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// require('dotenv/config');
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.REACT_APP_PORT || 8001

mongoose.connect("mongodb+srv://user-1:yJNIBmMSKmCvfKMx@cluster0.ofd5q.mongodb.net/mernDB?retryWrites=true&w=majority")
.then(() => app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
}))
.catch((error) => {
  console.log(error)
})