const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if(user) return res.status(400).send('User already registered.');

        user = new User(_.pick(req.body, ['name','email', 'password']));
        const salt = await bcrypt.genSalt(9);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = user.generateAuthToken();
        res.header('x-auth-token', token).send(_.pick(user, ['_id','name','email']));
    }
    catch(ex){
        res.send(ex);
        console.log(ex);
    }
});

module.exports = router;