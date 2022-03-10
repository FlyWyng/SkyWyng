import './App.css';
import Login from './domains/social/login/login';
import Register from './domains/social/register/register';
import Home from './domains/social/pages/home/home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home/> : <Register/>}/>
          <Route path='login' element={user ? <Home/> : <Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
