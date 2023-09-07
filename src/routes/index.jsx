import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Idea, Projects, Signup, Signin, Favorites } from '../pages';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' exact element={<Projects />} />
        <Route path='/idea' element={<Idea />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
};

export default Routers;
