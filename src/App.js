import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/hero/Homepage'
import About from './components/about/About';
import CourseSumm from './components/developer/CourseSumm';
import Joinus from './components/subscribe/Joinus';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/joinus" element={<Joinus/>}></Route>
        <Route exact path="/coursesumm" element={<CourseSumm/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
