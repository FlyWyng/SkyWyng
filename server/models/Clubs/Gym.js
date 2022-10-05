const mongoose = require('mongoose');
const Joi = require('joi');

const gymSchema = mongoose.Schema({
    gymId:{
        type: String,
        required: true,
        unique: true
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
        default: [],
        required: true
    },
    timings:{
        type: Array,
        default: [],
        required: true
    },
    fees:{
        type: Array,
        default: [],
        required: true
    },
    img: {
        type: String,
        required: true
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
        type: Number
    }
},
{timestamps: true}
);

const Gym = mongoose.model('Gym', gymSchema);

function validateClub(user) {
    const schema = Joi.object({
        gymName: Joi.string().min(5).max(50).required(),
        owner: Joi.string().min(5).max(50).required(),
        trainers: Joi.array().items(Joi.string().min(5).max(50)),
        timings: Joi.array().items(Joi.string().min(5).max(50)),
        fees: Joi.array().items(Joi.number()).required(),
        img: Joi.string().min(5).max(100).required(),
        description: Joi.string().min(5).max(512).required(),
        address: Joi.string().min(5).max(255).required(),
        contact: Joi.string().min(5).max(100).required()
    });

    return schema.validate(user);
}

exports.Gym = Gym;
exports.validate = validateClub;