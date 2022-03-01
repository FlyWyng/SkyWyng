import './App.css';
import Login from './domains/social/login/login';
import Register from './domains/social/register/register';
import Home from './domains/social/pages/home/home';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const user = localStorage.getItem('token');
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
