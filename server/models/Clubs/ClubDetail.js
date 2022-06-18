const mongoose = require('mongoose');

const clubDetailSchema = mongoose.Schema({
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
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
},
{timestamps: true}
);

const ClubDetail = mongoose.model('ClubDetail', clubDetailSchema);

exports.ClubDetail = ClubDetail;