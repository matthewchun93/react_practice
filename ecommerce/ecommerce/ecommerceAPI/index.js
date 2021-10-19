const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URI)
.then(() => console.log('DB connected successfully'))
.catch((err) => {
    console.log(err)
})

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})