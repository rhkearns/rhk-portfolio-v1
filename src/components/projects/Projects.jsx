import React from 'react';
import './projects.css'
import Card from 'react-bootstrap/Card'
import readrs from '../../images/projectThumbnails/readrs.png'
import boxitup from '../../images/projectThumbnails/boxitup.png'
import quiz from '../../images/projectThumbnails/quiz.png'
import bulb from '../../images/projectThumbnails/Folio-bulb.png'

const Projects = () => {
  return (
    <div className='project-list'>
      <a href='https://folio-front24.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={bulb} alt='folio thumbnail' className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Folio</Card.Title>
            <Card.Text clasName="card-text">
              A full-stack CRUD app, built with React, designed to allow freelancers to track their clients and projects.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://boxitup-rhk.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={boxitup} alt='boxitup thumbnail' className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Box It Up</Card.Title>
            <Card.Text className="card-text">
              A full-stack CRUD app, using Python with the Django web framework, designed to help movers keep track of their many boxes.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://readrs.herokuapp.com/" target='_blank' rel='noopener noreferrer'>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={readrs} alt='readrs thumbnail' className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Readrs</Card.Title>
            <Card.Text className="card-text">
              A full-stack CRUD app, using the MEN Stack, designed to let book lovers sort and catagorize their books.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://quiz-for-the-nerds.netlify.app/" target='_blank' rel='noopener noreferrer'>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={quiz} alt='quiz for the nerds thumbnail' className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Quiz for the Nerds</Card.Title>
            <Card.Text className="card-text">
              A simple quiz game designed to test nerds on their knowledge of the most popular franchises, using vanilla JavaScript.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>

    </div>
  )
}

export default Projects