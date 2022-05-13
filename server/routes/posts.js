const { response } = require('express');
const express = require('express');
const auth = require('../middleware/auth');
const { Post } = require('../models/post');
const { User } = require('../models/User');
const router = express.Router();

router.post('/', async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

router.put('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("the post has been updated.");
        }else{
            res.status(403).json("you can only update your posts.");
        }
    }catch(err){
        response.status(500).json(err);
    }
});

router.delete('/:id',auth,async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted.");
        }else{
            res.status(403).json("you can only delete your posts.");
        }
    }catch(err){
        response.status(500).json(err);
    }
});

//like a post
router.put('/:id/like', async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {like: req.body.userId}});
            res.status(200).json("The post has been liked.");
        }else{
            await post.updateOne({$pull: {like: req.body.userId}});
            res.status(200).json("The post has been disliked.");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).send(post);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/timeline/:userId', async(req,res)=>{
    let postArr = [];
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id});
        // const friendPosts = await Promise.all(
        //     currentUser.followings.map((friendId)=>{
        //         return Post.find({userId: friendId});
        //     })
        // );
        // res.status(200).json(userPost.concat(...friendPosts));
        res.status(200).json(userPosts);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;