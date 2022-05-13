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
            <div className="clubsNavBar">
                <div className="clubsNavBarOption">Latest</div>
                <div className="clubsNavBarOption">Top Rated</div>
                <div className="clubsNavBarOption">Most Viewed</div>
                <div className="clubsNavBarOption">Author</div>          
                <div className="clubsNavBarSearch">
                    <Search className='searchIcon'/>
                    <input placeholder='Seach for anything' className="searchInput"/>
                </div>
            </div>

            <div className="clubsCenter">
                <div className="clubsCenterLeft"> 
                    {clubs.map((c)=>(
                        <GymCard key={c._id} club={c}/>
                    ))}
                </div>
                <div className="clubsCenterRight">
                    <div className="clubsCenterRightLogin">
                        Login here.
                    </div>
                    <div className="clubsAds">
                        Ads here.
                    </div>
                </div>    
            </div>            
        </div>
     );
}

export default RightSide;
