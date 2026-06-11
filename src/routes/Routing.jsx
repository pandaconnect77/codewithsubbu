import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Social from "../pages/social";
import Images from '../pages/Images'
const Routing = () => {
  return (
           
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<>
                   <Home/>
                   <Images/>
                </>}/>
                <Route path="/about" element={<About/>}/>
               <Route path="/courses" element={<Courses/>}/> 
               <Route path="/social" element={<Social/>}/>
            </Routes>
            <Footer/>
        </Router>
    
    
    
  )
}

export default Routing;