import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './clubsAdmin.css';
import AdminClubCard from './adminClubCard/adminClubCard';
import CreateClub from './createClub';
import {AddCircle} from '@mui/icons-material';

function ClubsAdmin() {
    
    const [isAddNewClub , setAddNewClub] = useState(false);
    const [clubs, setClubs] = useState([]);
    useEffect(()=>{
        const fetchClubs = async() =>{
            const res = await axios.get('/api/clubs');
            setClubs(res.data);
        }
        fetchClubs();
    })

    const toggleIsAddNewClub  = () => {
        setAddNewClub(isAddNewClub ? false : true);
    }
    
    return(
        <div className='clubsAdminContainer'>
            <div className="clubsAdminContainerLeft">
                <div className="clubsAdminContainerLeftHeader">SkyWyng</div>
                <div className="clubsAdminContainerLeftDescription">Admin Panel</div>
                <div className="clubsAdminContainerADDClubButton" onClick={toggleIsAddNewClub}>Add Club<AddCircle/></div>
                {isAddNewClub && 
                    <div>
                        <div className="AdminClubsBlackOverlay" onClick={toggleIsAddNewClub }></div>
                        <CreateClub/>
                    </div>
                }

            </div>
            <div className="clubsAdminContainerRight">
                {clubs.map((c)=>(
                    <AdminClubCard key={c._id} club={c}/>
                ))}
                {clubs.map((c)=>(
                    <AdminClubCard key={c._id} club={c}/>
                ))}
                {clubs.map((c)=>(
                    <AdminClubCard key={c._id} club={c}/>
                ))}
            </div>
        </div>        
    );
}

export default ClubsAdmin;