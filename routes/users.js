const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


// UPDATE USER
router.put('/update/:id', async (req, res) => {
    // for checking update only their account credentials 
    if (req.body.userId === req.params.id) {

        // if password going to update then we have to encrypt that first
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json(error)
            }
        }

        // here we updating whole user body
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json("account has been updated")

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json("you can update only your account")

    }

})

// DELETE USER

router.put('/update/:id', async (req, res) => {
    // for checking update only their account credentials 
    if (req.body.userId === req.params.id) {

        // here we deleting user 
        try {
            const user = await User.findByIdAndUpdate(req.params.id)
            res.status(200).json("account has been deleted Successfully")

        } catch (error) {
            res.status(500).json(error)
        }

    } else {
        res.status(403).json("you can update only your account")

    }

})

// GET A USER 
// FOLLOW A USER
// FOLLOWING A USER

module.exports = router;