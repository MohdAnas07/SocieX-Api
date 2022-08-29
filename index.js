const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');


dotenv.config()

const PORT = process.env.PORT || 8800


mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('mongoDb Connected');
    }
)

// middleware ===============

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);



app.listen(PORT, () => {
    console.log('server is listening at port 5000')
})