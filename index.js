const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');

const PORT = process.env.PORT || 5000

dotenv.config()

// local mongo compass db connection ==============>>
require('./db/config')

//mongo atlas db connection ====================>>
// const URL = 'mongodb+srv://Anas07:HqSsHeDDcgb4ceLE@cluster0.qdvydom.mongodb.net/social?retryWrites=true & w=majority'


// mongoose.connect(URL,
//     {
//         useNewUrlParser: true, useUnifiedTopology: true
//     },
//     () => {
//         console.log('database connected successfully ');
//     }
// )

// middleware ===============

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(5000, () => {
    console.log('server is listening at port 8800')
})