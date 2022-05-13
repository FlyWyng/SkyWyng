const { response } = require('express');
const express = require('express');
const { Blog } = require('../../models/Blogs/Blog');
//const { User } = require('../models/User');
const router = express.Router();

router.post('/', async(req,res)=>{
    try{
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    }catch(err){
        res.status(500).send(err);
    }
});

router.get('/', async(req,res)=>{
    try{
        const blogsArray = await Blog.find();
        res.status(200).json(blogsArray);
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports = router;