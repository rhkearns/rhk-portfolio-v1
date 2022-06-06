import React from 'react';
import './projects.scss';
import projectData from './projectData';
import Card from 'react-bootstrap/Card';
import readrs from '../../images/projectThumbnails/readrs.png';
import boxitup from '../../images/projectThumbnails/boxitup.png';
import quiz from '../../images/projectThumbnails/quiz.png';
import folio from '../../images/projectThumbnails/Folio-bulb.png';
import splitski from '../../images/projectThumbnails/splitski.png';
import streamlined from '../../images/projectThumbnails/streamlined.png';

const Projects = () => {
	const findImage = image => {
		switch (image) {
			case 'streamlined':
				return streamlined;
			case 'folio':
				return folio;
			case 'splitski':
				return splitski;
			case 'boxitup':
				return boxitup;
			case 'readrs':
				return readrs;
			case 'quiz':
				return quiz;
			default:
				break;
		}
	};

	return (
		<div className="project-list">
			{projectData.map(project => (
				<a href={project.link} target="_blank" rel="noopener noreferrer">
					<Card className="card">
						<Card.Img
							variant="top"
							src={findImage(project.image)}
							alt={project.imageLabel}
							className="card-img"
						/>
						<Card.Body>
							<Card.Title className="card-title">{project.title}</Card.Title>
							<Card.Text className="card-text">{project.description}</Card.Text>
						</Card.Body>
					</Card>
				</a>
			))}
		</div>
	);
};

export default Projects;
