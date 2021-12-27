import React from 'react';
import LILogo from '../../images/siteLogos/LI-In-Bug.png'
import GHLogo from '../../images/siteLogos/GitHub-Mark-120px-plus.png'
import headshot from '../../images/headshot/headshot.jpg'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-section">
      <div className='headshot-container'>
        <img src={headshot} alt="Ryan Kearns Headshot" className='headshot'/>
      </div>
      <div className="contact-info">
        <h1 id="header">Contact Information</h1>
        <h2><a href="https://docs.google.com/document/d/1atdX-pdKJCal04UBLpt59AHstj4MyhqH/edit?usp=sharing&ouid=115905962327170111225&rtpof=true&sd=true">Resume</a></h2>
        <div className="contacts">
          <h3 id="email">Email: <a href="mailto:ryankearns217@gmail.com"> ryankearns217@gmail.com</a></h3>
          <div className="links">
            <a href="https://www.linkedin.com/in/ryanhkearns/"><img src={LILogo} alt="LinkedIn Logo" id="li-logo"/></a>
            <a href="https://github.com/rhkearns"><img src={GHLogo} alt="GitHub Logo" id="gh-logo"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact