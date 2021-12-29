import React from 'react';
import LILogo from '../../images/siteLogos/LI-In-Bug.png'
import GHLogo from '../../images/siteLogos/GitHub-Mark-120px-plus.png'
import headshot from '../../images/headshot/headshot.jpg'
import envelope from '../../images/siteLogos/Envelope-cropped.png'
import resume from '../../images/siteLogos/Resume-cropped.png'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-section">
      <div className='headshot-container'>
        <img src={headshot} alt="Ryan Kearns Headshot" className='headshot'/>
        {/* <h3>Ryan H Kearns</h3> */}
      </div>
      <div className="links">
        <a href="https://docs.google.com/document/d/1atdX-pdKJCal04UBLpt59AHstj4MyhqH/edit?usp=sharing&ouid=115905962327170111225&rtpof=true&sd=true"><img src={resume} alt='resume' id="resume-icon"/></a>
        <a href="mailto:ryankearns217@gmail.com"><img src={envelope} alt="email" id="email-icon"/></a>
        <a href="https://www.linkedin.com/in/ryanhkearns/"><img src={LILogo} alt="LinkedIn Logo" id="li-logo"/></a>
        <a href="https://github.com/rhkearns"><img src={GHLogo} alt="GitHub Logo" id="gh-logo"/></a>
      </div>
    </div>
  )
}

export default Contact