import react from 'react'
import './App.css';

import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js'
import Projects from './components/Projects/Projects.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
