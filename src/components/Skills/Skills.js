import React from 'react';
import Skill from './Skill';
import { skills } from './constants';
import './Skills.scss';

const Skills = () => {
  return (
    <div className="box skills">
      <h3>Skills</h3>
      {skills.map(skill => (
        <Skill {...skill} key={skill.type} />
      ))}
    </div>
  );
};


export default Skills;
