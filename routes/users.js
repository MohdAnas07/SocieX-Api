const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hello, this is user page');
})

module.exports = router;