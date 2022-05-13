const config = require("config");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

const register = require('./routes/register');
const login = require('./routes/login');
const home = require('./routes/users');
const posts = require('./routes/posts');
const blogs = require('./routes/blogs/blogs');
const clubs = require('./routes/clubs/clubs');

if(!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/wyng')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(()=>console.error('could not connect to MongoDB...'));


app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/images', express.static(path.join(__dirname, 'public/images')));
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images");
    },
    filename:function(req,file,cb){
        cb(null,req.body.name);
    }
});
const upload = multer({storage});
app.post('/api/upload',upload.single('file'),(req,res)=>{
    try{
        return res.status(200).json('file uploaded successfully');
    }catch(err){
        console.log(err);
    }
})

app.use('/api/home', home);
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/posts', posts);
app.use('/api/blogs', blogs);
app.use('/api/clubs', clubs);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));