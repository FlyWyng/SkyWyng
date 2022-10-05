import './adminClubCard.css';
import React, { useRef, useState, useEffect } from 'react';
import {Edit, Delete, Done, Clear} from '@mui/icons-material';
import axios from 'axios';

function AdminClubCard({club}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const gymId = useRef();
    const gymName = useRef();
    const owner = useRef();
    const trainers = useRef();
    const timings = useRef();
    const fees = useRef();
    const description = useRef();
    const address = useRef();
    const contact = useRef();
    const rating = useRef();

    const toggleIsExpanded = () => {
        setIsExpanded(isExpanded ? false : true);
    }

    const handleEditClub = async() => {
        try{
            if(isEditable){
                club.gymId = gymId.current.value;
                club.gymName = gymName.current.value;
                club.owner = owner.current.value;
                club.trainers = JSON.parse(trainers.current.value);
                club.timings = JSON.parse(timings.current.value);
                club.fees = JSON.parse(fees.current.value);
                club.description = description.current.value;
                club.contact = contact.current.value;
                club.rating = rating.current.value;
                console.log(club);
                await axios.put('/api/clubs/'+club._id, club);
                window.location.reload();
                return;
            }
            setIsEditable(true);
        }catch(err){
            console.log(err);
        }
    }

    const handleDeleteClub = async() =>{
        try{
            if(isEditable){
                setIsEditable(false);
                return;
            }
            await axios.delete('/api/clubs/'+club._id, {data: { gymId: club.gymId}} );
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return (  
        <div className="AdminClubCardContianer">
            <div className="AdminClubTitle" onClick={toggleIsExpanded}>
                <span className="AdminClubText">{club.gymId}</span> 
                <span className="AdminClubText">{club.gymName}</span>
            </div>
            { isExpanded &&
                <div>
                    <div className="AdminClubsBlackOverlay" onClick={toggleIsExpanded}></div>
                    <div className="AdminClubInfo">
                        <div className="AdminClubInfoHeader">{club.gymName}</div>
                        <div className="AdminClubInfoTable">
                            <table>
                                <tr>
                                    <td>GymID</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.gymId} ref={gymId}/> :
                                            <span>{club.gymId}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>GymName</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.gymName} ref={gymName}/> :
                                            <span>{club.gymName}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Owner</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.owner} ref={owner}/> :
                                            <span>{club.owner}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trainers</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={JSON.stringify(club.trainers)} ref={trainers}/> :
                                            <span>{JSON.stringify(club.trainers,null,4)}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Timings</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={JSON.stringify(club.timings)} ref={timings}/> :
                                            <span>{JSON.stringify(club.timings,null,4)}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fees</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={JSON.stringify(club.fees)} ref={fees}/> :
                                            <span>{JSON.stringify(club.fees,null,4)}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.description} ref={description}/> :
                                            <span>{club.description}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.address} ref={address}/> :
                                            <span>{club.address}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.contact} ref={contact}/> :
                                            <span>{club.contact}</span>
                                        }   
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>
                                        {  isEditable ? <input type="text" className="AdminClubInfoInputField" defaultValue={club.rating} ref={rating}/> :
                                            <span>{club.rating}</span>
                                        }   
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="AdminClubInfoButtons">
                            <button className="AdminClubInfoButtonEdit" onClick={handleEditClub}>
                                {isEditable ? <span>Accept</span> : <span>Edit</span>}
                                {isEditable ? <Done/> : <Edit/>}
                            </button>
                            <button className="AdminClubInfoButtonDelete" onClick={handleDeleteClub}>
                                {isEditable ? <span>Cancel</span> : <span>Delete</span>}
                                {isEditable ? <Clear/> : <Delete/>}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default AdminClubCard;