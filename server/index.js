const config = require("config");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes/routes');
const register = require('./routes/register');
const login = require('./routes/login');
const home = require('./routes/user');

if(!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/wyng')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(()=>console.error('could not connect to MongoDB...'));

app.use(express.json());
app.use(cors());
app.use('/home', home);
app.use('/api/register', register);
app.use('/api/login', login);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));