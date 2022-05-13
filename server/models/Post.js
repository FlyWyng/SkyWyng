const mongoose = require('mongoose');

const commentsSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    comment:{
        type: String,
        required: true
    }
});

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    description:{
        type:String,
        max: 1000
    },
    img:{
        type: String
    },
    likes:{
        type: Array,
        default: []
    },
    comments:{
        type: [commentsSchema],
        default: []
    }
},{timestamps:true});

const Post = mongoose.model('Post', postSchema);

exports.Post = Post;