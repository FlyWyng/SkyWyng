import './App.css';
import Login from './domains/social/login/login';
import Register from './domains/social/register/register';
import Home from './domains/social/pages/home/home';
import BlogsHome from './domains/blogs/home/blogsHome';
import { Routes,Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Login/> }/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='blogs' element={<BlogsHome/>}/>
        </Routes>     
    </div>
  );
}

export default App;
