import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../social.css';
import axios from 'axios';
import './register.css';

function Register() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const [error, setError] = useState();

    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match!");
        }else{
            const user={
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post('http://localhost:5000/api/register', user);
                navigate("/login");
            }catch(err){
                setError(err.response.data);
            }
            
        }
    }
    
    return(
        <div className='registerContainer'>         
            <form className='registerForm' onSubmit={submit}>
                <div className="registerHeading">Register</div>
                {error && <div className='error'>{error}</div>}
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={name}
                        required
                    />
                    <label>Name</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="text" 
                        ref={email}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField' 
                        type="password" 
                        ref={password}
                        required
                    />
                    <label>Password</label>
                </div>
                <div className="input-container">
                    <input className = 'inputField'
                        type="password" 
                        ref={passwordAgain}
                        required
                    />
                    <label>Confirm Password</label>
                </div>
                <button className='submit' type='submit'>
                    Register
                </button>
            </form>
        </div>        
    )
}

export default Register;