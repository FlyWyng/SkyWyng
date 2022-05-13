const { response } = require('express');
const express = require('express');
const auth = require('../../middleware/auth');
const { Gym } = require('../../models/clubs/gym');
const { User } = require('../../models/User');
const router = express.Router();

router.post('/', async(req,res)=>{
    try{
        const newClub = new Gym(req.body);
        const savedClub = await newClub.save();
        res.status(200).json(savedClub);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/',async(req,res)=>{
    try{
        const clubs = await Gym.find();
        res.status(200).json(clubs);
    }catch(err){
        res.status(500).json(err);
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const gym = await Gym.findById(req.params.id);
        if(gym.gymId === req.body.gymId){
            await gym.updateOne({$set:req.body});
            res.status(200).json("the gym has been updated.");
        }else{
            res.status(403).json("you cannot update the gym.");
        }
    }catch(err){
        response.status(500).json(err);
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const gym = await Gym.findById(req.params.id);
        if(gym.gymId === req.body.gymId){
            await gym.deleteOne();
            res.status(200).json("the gym has been deleted.");
        }else{
            res.status(403).json("you cannot delete the gym.");
        }
    }catch(err){
        response.status(500).json(err);
    }
});

module.exports = router;