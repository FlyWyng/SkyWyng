const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    category:{
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 512
    },
    content: {
        type: String,
        required: true
    },
    likes:{
        type: Array,
        default: []
    },
    comments:{
        type: Array,
        default: []
    },
    watch:{
        type: Array,
        default: []
    }
},
{timestamps: true}
);

const Blog = mongoose.model('Blog', blogSchema);

exports.Blog = Blog;