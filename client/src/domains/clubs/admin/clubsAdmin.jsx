import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ClubsAdmin() {
    const gymName = useRef();
    const gymId = useRef();
    const gymOwner = useRef();
    const timings = useRef();
    const fees = useRef();
    const address = useRef();
    const description = useRef();

    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        
        const feesArray = fees.current.value.split(',');
        const timingsArray = timings.current.value.split(',');
        const Gym={
            gymId: gymId.current.value,
            gymName: gymName.current.value,
            owner: gymOwner.current.value,
            timings: timingsArray,
            fees: feesArray,
            address: address.current.value,
            description: description.current.value
        }
        try{
            await axios.post('/api/clubs', Gym);
            navigate("/clubs");
        }catch(err){
            console.log(err);
        }       
    }
    
    return(
        <div className='gymAdminContainer'>
            <h2>Register Gym</h2>
            <form className='form' onSubmit={submit}>
                <input className = 'inputField' 
                        type="text" 
                        placeholder='Gym Name'
                        ref={gymName}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Gym ID' 
                        ref={gymId}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Gym Owner Name' 
                        ref={gymOwner}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Timings' 
                        ref={timings}
                        required
                    />
                    <input className = 'inputField' 
                        type="text"
                        placeholder='Fees' 
                        ref={fees}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Address' 
                        ref={address}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Description' 
                        ref={description}
                        required
                    />
                    <button className='submit' type='submit'>
                        Register
                    </button>
            </form>
        </div>        
    );
}

export default ClubsAdmin;