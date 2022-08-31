const router = require('express').Router();
const User = require('../models/user');
const express = require('express');
const app = express();


app.use(express.json());

router.get('/', (req, res) => {
    res.send('hello, this is auth route');
})


//register Api 

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }

})

// login api

module.exports = router;