import React from 'react';
import './App.css';

// Components
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import html5 from './images/icons/html5.png';
import css3 from './images/icons/css3.png';
import javascript from './images/icons/javascript.png';
import nodejs from './images/icons/nodejs.png';
import python from './images/icons/python.png';
import react from './images/icons/react.png';
import redux from './images/icons/reduxLogo.png';

function App() {
	return (
		<div className="body">
			<div className="landing">
				<h1>Ryan H Kearns</h1>
				<p className="brand-statement">
					A thoughtful and solutions-driven software developer, with a passion
					for creating enjoyable experiences for all. Through attention to
					detail and creative problem solving, I strive to find new and
					inventive ways of approaching every situation. Both routine and
					unusual occurrences bring out my best work, adapting to new situations
					with the same care I bring to the ordinary. My background in
					team-oriented organizations has allowed me to learn new skills and
					perspectives, and coworkers have seen my diligence and reliability in
					my work.
				</p>
				<div className="techs">
					<img src={html5} alt="html5" />
					<img src={css3} alt="css3" />
					<img src={javascript} alt="javascript" />
					<img src={nodejs} alt="nodejs" />
					<img src={react} alt="react" />
					<img src={redux} alt="redux" />
					<img src={python} alt="python" />
				</div>
			</div>
			<div className="projects">
				<Projects />
			</div>
			<div className="contact">
				<Contact />
			</div>
		</div>
	);
}

export default App;
