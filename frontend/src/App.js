import './App.css';
import React  from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import TimeLine from './components/Admin/TimeLine';
import Youtube from './components/Admin/Youtube';
import Project from './components/Admin/Project';
import Loader from './components/Loader/Loader';
import NotFound from './components/Not Found/NotFound';




function App() {

  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector((state)=>state.login)

  const {loading , user} = useSelector((state)=>state.user)


  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto", "Ubuntu Mono","Josefin Sans"]
      }
    })


    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch])

  return (
    <Router>
       {loading ? (<Loader/>):(
        <>
        <Header/>
     <Routes>
      <Route extact path='/contact' element={<Contact/>} />
      <Route extact path='/account' element={isAuthenticated ? <AdminPanel/>:<Login/>} />
      <Route extact path='/admin/timeline' element={isAuthenticated ? <TimeLine/>:<Login/>} />
      <Route extact path='/admin/youtube' element={isAuthenticated ? <Youtube/>:<Login/>} />
      <Route extact path='/admin/project' element={isAuthenticated ? <Project/>:<Login/>} />
      <Route path='*' element={<NotFound/>} />
     </Routes>
     <Footer/>
        </>
       )}
    </Router>
  );
}

export default App;
