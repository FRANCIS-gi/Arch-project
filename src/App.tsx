import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
