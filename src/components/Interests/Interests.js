import React from 'react';
import { interests } from './constants';
import Interest from './Interest';
import './Interests.scss';

const Interests = () => {
  return (
    <div className="box interests">
      <h3>Personal Interests</h3>
      <ul>
        {interests.map(interest => (
          <Interest {...interest} key={interest.type} />
        ))}
      </ul>
    </div>
  );
};


export default Interests;
