import React from 'react';
import Card from 'react-bootstrap/Card'
import readrs from '../../images/projectThumbnails/readrs.png'
import boxitup from '../../images/projectThumbnails/boxitup.png'
import quiz from '../../images/projectThumbnails/quiz.png'

const Projects = () => {
  return (
    <div className='project-list'>
      <h1>Projects</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={boxitup} />
        <Card.Body>
          <Card.Title>Box It Up</Card.Title>
          <Card.Text>
            A full-stack CRUD app, using Python with the Django web framework, designed to help movers keep track of their many boxes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={readrs} />
        <Card.Body>
          <Card.Title>Readrs</Card.Title>
          <Card.Text>
            A full-stack CRUD app, using the MEN Stack, designed to let book lovers sort and catagorize their books.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={quiz} />
        <Card.Body>
          <Card.Title>Quiz for the Nerds</Card.Title>
          <Card.Text>
            A simple quiz game designed to test nerds on their knowledge of the most popular franchises, using vanilla JavaScript.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Projects