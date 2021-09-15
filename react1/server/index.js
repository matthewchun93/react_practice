const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const routesHandler = require('./routes/handler');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', routesHandler)

//mongoose DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.log(err);
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})