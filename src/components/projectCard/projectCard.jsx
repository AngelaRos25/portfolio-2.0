import { DataProjects } from '../../data/dataProjects';

import './projectCard.css'

function ProjectCard() {
  return (
    <div className='project-card'>
      <h2>Ecco alcuni progetti a cui ho lavorato:</h2>
      <div className='card-container'>
        {DataProjects.map(project =>
          <div className='a-card' key={project.title}>
            <img src={project.image} className='img' alt="Card image" />
            <div className='content-overlay'>
              <h3 className='card-title'>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.code} target='_blank'><button>code</button></a>
              <a href={project.href} target='_blank'><button>project</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard