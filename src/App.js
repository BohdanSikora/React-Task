import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';


function App() {
  return ( 
    <div className ="App">
      <Navbar/>
      <Hero/>
      <MainPage/>
      <Footer/>
    </div>
    
  );
}

export default App;
