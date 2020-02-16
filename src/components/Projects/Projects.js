import React from 'react';
import { projects } from './constants';
import Project from './Project';
import './Projects.scss';

const Projects = ({ addBreak }) => {
  return (
    <div className="box projects">
      <h3>Projects</h3>
      <ul>
        {projects.map(project => (
          <Project {...project} key={project.type} addBreak={addBreak} />
        ))}
      </ul>
    </div>
  );
};


export default Projects;
