import React, { useRef, useContext } from 'react';
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';
import '../social.css';
import './login.css';

function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, error, dispatch } = useContext(AuthContext);

    const submit = async (e) =>{
        e.preventDefault();
        loginCall(
            {email:email.current.value, password:password.current.value},
            dispatch
        );
    }
    
    return(
        <div className='loginContainer'>
            <form className='loginForm' onSubmit={submit}>
                <div className="loginHeading">Login</div>
                {error && <div className='error'>{error}</div>}
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
                <button className='loginSubmit' type='submit'>
                    {isFetching ? "Loading" : "Login"}
                </button>
            </form>
        </div>        
    )
}

export default Login;