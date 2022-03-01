import React, { useState } from 'react';
import '../social.css';
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({email:"", password:""});
    const [error, setError] = useState("");

    const submit = async (e) =>{
        e.preventDefault();
        try{
            console.log(user);
            const response = await axios.post('http://localhost:3000/api/login', user);
            localStorage.setItem("token",response.data);
            window.location = "/"
            console.log(response);
        }catch(ex){
            console.log(ex);
            setError(ex.message);
        }
    }

    return(
        <div className='container'>
            <h2>Login</h2>
            <form className='form' onSubmit={submit}>
                {error && <div className='error'>{error}</div>}
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
                    Login
                </button>
            </form>
        </div>        
    )
}

export default Login;