const config = require("config");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const routes = require('./routes/routes');
const users = require('./routes/users');
const auth = require('./routes/auth');

if(!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/wyng')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(()=>console.error('could not connect to MongoDB...'));

app.use(express.json());
app.use('/home', routes);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));