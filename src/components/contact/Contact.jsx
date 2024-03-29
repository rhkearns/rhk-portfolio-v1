import React from 'react';
import LILogo from '../../images/siteLogos/LI-In-Bug.png';
import GHLogo from '../../images/siteLogos/GitHub-Mark-120px-plus.png';
import headshot from '../../images/headshot/headshot.jpg';
import envelope from '../../images/siteLogos/Envelope-cropped.png';
import resume from '../../images/siteLogos/Resume-cropped.png';
import './contact.scss';

const Contact = () => {
	return (
		<div className="contact-section">
			<div className="headshot-container">
				<img src={headshot} alt="Ryan Kearns Headshot" className="headshot" />
			</div>
			<div className="links">
				<a
					href="https://drive.google.com/file/d/1Fl5m8k_4VL5zhK-CnV9Rb9Ps6zdyLGJ3/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={resume} alt="resume" className="icons" id="resume-icon" />
				</a>
				<a
					href="mailto:ryankearns217@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={envelope} alt="email" className="icons" id="email-icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/ryanhkearns/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={LILogo}
						alt="LinkedIn Logo"
						className="icons"
						id="li-logo"
					/>
				</a>
				<a
					href="https://github.com/rhkearns"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={GHLogo} alt="GitHub Logo" className="icons" id="gh-logo" />
				</a>
			</div>
		</div>
	);
};

export default Contact;
