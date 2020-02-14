import React from 'react';
import './Interests.scss';
import PropTypes from 'prop-types';


const Interest = ({ label, description }) => {
  return (
    <li className="interest">
      <span className="bold">{label}</span>: {description}
    </li>
  );
};

Interest.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default Interest;
