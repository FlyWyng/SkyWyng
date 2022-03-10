import React, { useRef, useContext } from 'react';
import { loginCall } from '../../../apiCalls';
import { AuthContext } from '../../../context/AuthContext';
import '../social.css';

function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const submit = async (e) =>{
        e.preventDefault();
        loginCall(
            {email:email.current.value, password:password.current.value},
            dispatch
        );
    }
    console.log(user);
    return(
        <div className='container'>
            <h2>Login</h2>
            <form className='form' onSubmit={submit}>
                {error && <div className='error'>{error}</div>}
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
                <button className='submit' type='submit'>
                    {isFetching ? "Loading" : "Login"}
                </button>
            </form>
        </div>        
    )
}

export default Login;