import React from 'react';
import './App.css';

// Components
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
    <div className='landing'>
      <p className="brand-statement">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit autem architecto eveniet quae minima excepturi eligendi commodi quisquam sequi voluptates?</p>
    </div>
    <div className='projects'>
      <Projects />
    </div>
    <div className='contact'>
      <Contact />
    </div>
  </>
  )
}

export default App;
