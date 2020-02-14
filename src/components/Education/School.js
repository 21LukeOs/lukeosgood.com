import React from 'react';
import './Education.scss';
import PropTypes from 'prop-types';


const School = ({ graduation_year, school, location, description }) => {
  return (
    <div className="school">
      <div className="year">{graduation_year}</div>
      <div className="details">
        <h4>{school}</h4>
        <h5>{location}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

School.propTypes = {
  graduation_year: PropTypes.number.isRequired,
  school: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default School;