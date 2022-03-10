import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import '../social.css';
import axios from 'axios';

function Register() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();

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
                console.log(err);
            }
            
        }
    }
    
    return(
        <div className='container'>
            <h2>Register</h2>
            <form className='form' onSubmit={submit}>
                <input className = 'inputField' 
                        type="text" 
                        placeholder='Name'
                        ref={name}
                        required
                    />
                    <input className = 'inputField' 
                        type="email" 
                        placeholder='Email' 
                        ref={email}
                        required
                    />
                    <input className = 'inputField' 
                        type="password" 
                        placeholder='Password' 
                        ref={password}
                        required
                    />
                    <input className = 'inputField' 
                        type="password" 
                        placeholder='Re-enter Password' 
                        ref={passwordAgain}
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