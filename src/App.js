
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Book from './components/Book';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/booknow' element={<Book/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
  );
};

export default App;
