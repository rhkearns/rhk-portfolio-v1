import React from 'react';
import './App.css';

// Components
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='fullpage'>
      <div className='landing'>
        <h1>Ryan H Kearns</h1>
        <p className="brand-statement">
          A thoughtful and solutions-driven software developer, with a passion for creating enjoyable experiences for all. Through attention to detail and creative problem solving, I strive to find new and inventive ways of approaching every situation. Both routine and unusual occurrences bring out my best work, adapting to new situations with the same care I bring to the ordinary. My background in team-oriented organizations has allowed me to learn new skills and perspectives, and coworkers have seen my diligence and reliability in my work.
        </p>
      </div>
      <div className='projects'>
        <Projects />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default App;
