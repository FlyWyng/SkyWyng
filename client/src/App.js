import './App.css';
// import Login from './domains/social/login/login';
// import Register from './domains/social/register/register';
// import Home from './domains/social/pages/home/home';
// import BlogsHome from './domains/blogs/home/blogsHome';
import { Routes,Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ClubsHome from './domains/clubs/home/clubsHome';
import ClubsAdmin from './domains/clubs/admin/clubsAdmin';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className='App'>
        {/* <Routes>
          <Route path='/' element={user ? <Home/> : <Login/> }/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='blogs' element={<BlogsHome/>}/>
          <Route path='clubs' element={<ClubsHome/>}/>
          <Route path='clubs/admin' element={<ClubsAdmin/>}/>
        </Routes> */}
        <Routes>
          <Route path='/' element={user ? <ClubsHome/> : <ClubsHome/> }/>
          <Route path='login' element={<ClubsHome/>}/>
          <Route path='register' element={<ClubsHome/>}/>
          <Route path='blogs' element={<ClubsHome/>}/>
          <Route path='clubs' element={<ClubsHome/>}/>
          <Route path='clubs/admin946625' element={<ClubsAdmin/>}/>
        </Routes>     
    </div>
  );
}

export default App;
