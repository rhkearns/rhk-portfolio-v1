import React from 'react';
import LILogo from '../../images/siteLogos/LI-In-Bug.png'
import GHLogo from '../../images/siteLogos/GitHub-Mark-120px-plus.png'
import headshot from '../../images/headshot/headshot.jpg'

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <div className='headshot'>
        <img src={headshot} alt="Ryan Kearns Headshot" />
      </div>
      <div className="contact-info">
        <h4>Email: ryankearns217@gmail.com</h4>
        <div className="links">
          <a href="https://www.linkedin.com/in/ryanhkearns/"><img src={LILogo} alt="LinkedIn Logo" /></a>
          <a href="https://github.com/rhkearns"><img src={GHLogo} alt="GitHub Logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact