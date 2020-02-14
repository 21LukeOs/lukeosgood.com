import React from 'react';
import { education } from './constants';
import School from './School';
import './Education.scss';

const Education = () => {
  return (
    <div className="box education">
      <h3>Education</h3>
      {education.map((school, index) => (
        <School {...school} key={index} />
      ))}
    </div>
  );
};


export default Education;