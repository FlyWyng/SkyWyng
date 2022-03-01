import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../social.css';
import axios from 'axios';

function Register() {
    const [user, setUser] = useState({name:"", email:"", password:""});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        try{
            console.log(user);
            const response = await axios.post('http://localhost:3000/api/register', user);
            navigate("/login");
            console.log(response);
        }catch(ex){
            console.log(ex);
            setError(ex.message);
        }
    }
    
    return(
        <div className='container'>
            <h2>Register</h2>
            <form className='form' onSubmit={submit}>
                {error && <div className='error'>{error}</div>}
                <input className = 'inputField' 
                        type="text" 
                        placeholder='Name' 
                        value={user.name} 
                        onChange={(n) => setUser({...user, name:n.target.value})}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Email' 
                        value={user.email} 
                        onChange={(e) => setUser({...user, email:e.target.value})}
                        required
                    />
                    <input className = 'inputField' 
                        type="text" 
                        placeholder='Password' 
                        value={user.password} 
                        onChange={(p) => setUser({...user, password:p.target.value})}
                        required
                    />
                    <button className='submit' type='submit'>
                        Register
                    </button>
            </form>
        </div>        
    )
}

export default Register;