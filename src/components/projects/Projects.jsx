import React from 'react';
import './projects.css'
import Card from 'react-bootstrap/Card'
import readrs from '../../images/projectThumbnails/readrs.png'
import boxitup from '../../images/projectThumbnails/boxitup.png'
import quiz from '../../images/projectThumbnails/quiz.png'

const Projects = () => {
  return (
    <div className='project-list'>
      <a href="https://boxitup-rhk.herokuapp.com/">
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={boxitup} className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Box It Up</Card.Title>
            <Card.Text className="card-text">
              A full-stack CRUD app, using Python with the Django web framework, designed to help movers keep track of their many boxes.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://readrs.herokuapp.com/">
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={readrs} className='card-img'/>
          <Card.Body>
            <Card.Title className="card-title">Readrs</Card.Title>
            <Card.Text className="card-text">
              A full-stack CRUD app, using the MEN Stack, designed to let book lovers sort and catagorize their books.
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://quiz-for-the-nerds.netlify.app/">
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img variant='top' src={quiz} className='card-img'/>
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