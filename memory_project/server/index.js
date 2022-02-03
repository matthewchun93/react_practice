import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';

// routes imports
import postRoutes from "./routes/posts.js";

const app = express();

// routes
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.REACT_APP_PORT || 4000;

mongoose
  .connect(process.env.REACT_APP_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });

// mongoose.set("useFindAndModify", false);
