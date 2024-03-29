const _ = require('lodash');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Invalid email or password.');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password.');
        
        const token = user.generateAuthToken();
        res.cookie("token", token, {httpOnly:true}).status(200).send(user);
    }
    catch(ex){
        res.send(ex);
        console.log(ex);
    }
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(512).required()
    });

    return schema.validate(req);
}

module.exports = router;