require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)

    console.log("connected to database")
  } catch (error) {
    console.log("connection to DB failed")
    process.exit(1);
  }
}

module.exports = connectDB;