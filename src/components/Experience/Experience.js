import React from 'react';
import Job from './Job';
import { jobs } from './constants';
import './Experience.scss';

const Experience = () => {
  return (
    <div className="box experience">
      <h3>Experience</h3>
      {jobs
        .map((job, index) => (
          <Job {...job} key={index} />
        ))}
    </div>
  );
};


export default Experience;
