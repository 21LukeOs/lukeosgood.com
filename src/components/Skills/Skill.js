import React from 'react';
import './Skills.scss';
import PropTypes from 'prop-types';


const Skill = ({ label, list }) => {
  return (
    <div className="skill">
      <h4>{label}</h4>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Skill.propTypes = {
  label: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}


export default Skill;
