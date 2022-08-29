const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.send('hello, this is auth route');
})


//register 

router.get('/register', async (req, res) => {
    let user = await new User({
        username: 'john doe',
        email: 'john@gmail.com',
        password: '12345',
    })
    await user.save();
    res.send('ok')
})

//login

module.exports = router;