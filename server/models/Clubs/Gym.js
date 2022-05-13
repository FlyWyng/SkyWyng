const mongoose = require('mongoose');

const gymSchema = mongoose.Schema({
    gymId:{
        type: String,
        required: true
    },
    gymName:{
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    trainers:{
        type: Array,
        default: []
    },
    timings:{
        type: Array,
        default: []
    },
    fees:{
        type: Array,
        default: []
    },
    img: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 512
    },
    address: {
        type: String
    }
},
{timestamps: true}
);

const Gym = mongoose.model('Gym', gymSchema);

exports.Gym = Gym;