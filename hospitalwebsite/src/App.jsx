import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from './components/Header.jsx/Header.jsx';
import Service from './components/Service/Service.jsx';
import News from './components/News/News.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {

  return (
    <div>
        <Navbar />
        <Header />
        <Service />
        <News />
        <Footer />
        
    </div>
  )
}

export default App
