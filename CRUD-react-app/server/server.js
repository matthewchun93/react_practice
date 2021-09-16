const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const routesHandler = require('./routes/handler')

//config
// app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', routesHandler)

//connect mongoDB
mongoose.connect(process.env.DB_URI)
.then(()=>{
  console.log("Database Connected")
})
.catch((err) => {
  console.log(err);
})


const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})