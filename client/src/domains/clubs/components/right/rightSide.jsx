import React, {useEffect, useState} from 'react';
import './rightSide.css';
import {Search} from '@mui/icons-material';
import GymCard from '../gymCard/gymCard';
import axios from 'axios';

function RightSide() {
    const [clubs, setClubs] = useState([]);
    useEffect(()=>{
        const fetchClubs = async() =>{
            const res = await axios.get('/api/clubs');
            setClubs(res.data);
        }
        fetchClubs();
    })

    return ( 
        <div className="clubsRightSide">
            <div className="clubsCenter"> 
                {clubs.map((c)=>(
                    <GymCard key={c._id} club={c}/>
                ))}      
            </div>            
        </div>
     );
}

export default RightSide;
