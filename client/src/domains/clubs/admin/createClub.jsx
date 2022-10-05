import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './createClub.css';

function CreateClub() {
    const gymName = useRef();
    const gymId = useRef();
    const gymOwner = useRef();
    const gymTrainers = useRef();
    const timings = useRef();
    const fees = useRef();
    const address = useRef();
    const contact = useRef();
    const description = useRef();
    const [error, setError] = useState();

    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        
        const feesArray = fees.current.value.split(',');
        const timingsArray = timings.current.value.split(',');
        const trainersArray = gymTrainers.current.value.split(',');
        const Gym={
            gymId: gymId.current.value,
            gymName: gymName.current.value,
            owner: gymOwner.current.value,
            trainers: trainersArray,
            timings: timingsArray,
            fees: feesArray,
            address: address.current.value,
            contact: contact.current.value,
            description: description.current.value,
            img: "123"
        }
        try{
            await axios.post('/api/clubs', Gym);
            navigate("/clubs");
        }catch(err){
            console.log(err.response.data.message);
            setError(err.response.data.message);
        }       
    }
    
    return(
        <div className='gymAdminContainer'>
            <form className='gymAdminForm' onSubmit={submit}>
                <div className="gymAdminHeading">Register Gym</div>
                {error && <div className='error'>{error}</div>}
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={gymId}
                        required
                    />
                    <label>Gym ID</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={gymName}
                        required
                    />
                    <label>Gym Name</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={gymOwner}
                        required
                    />
                    <label>Gym Owner</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={gymTrainers}
                        required
                    />
                    <label>Gym Trainers</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={timings}
                        required
                    />
                    <label>Timings</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text"
                        ref={fees}
                        required
                    />
                    <label>Fees</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text"  
                        ref={address}
                        required
                    />
                    <label>Address</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text"  
                        ref={contact}
                        required
                    />
                    <label>Contact</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={description}
                        required
                    />
                    <label>Description</label>
                </div> 
                <button className='submit' type='submit'>
                    Register
                </button>
            </form>
        </div>        
    );
}

export default CreateClub;