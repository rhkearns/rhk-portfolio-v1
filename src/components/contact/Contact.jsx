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
      </div>
      <div className="links">
        <a href="https://drive.google.com/file/d/1Q093oBEnTF30uBxsiWy0EvILTSbQ72RM/view?usp=sharing" target='_blank' rel='noopener noreferrer'><img src={resume} alt='resume' id="resume-icon"/></a>
        <a href="mailto:ryankearns217@gmail.com" target='_blank' rel='noopener noreferrer'><img src={envelope} alt="email" id="email-icon"/></a>
        <a href="https://www.linkedin.com/in/ryanhkearns/" target='_blank' rel='noopener noreferrer'><img src={LILogo} alt="LinkedIn Logo" id="li-logo"/></a>
        <a href="https://github.com/rhkearns" target='_blank' rel='noopener noreferrer'><img src={GHLogo} alt="GitHub Logo" id="gh-logo"/></a>
      </div>
    </div>
  )
}

export default Contact