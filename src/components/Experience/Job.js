import React from 'react';
import './Experience.scss';
import PropTypes from 'prop-types';


const Job = ({
  start_date,
  end_date,
  position,
  company,
  location,
  description,
  achievements,
}) => {
  return (
    <div className='job'>
      <div className="dates">
        {start_date} - {end_date ? end_date : 'Present'}
      </div>
      <div className="details">
        <h4>{position}</h4>
        <h5>
          {company} - {location}
        </h5>

        {description && <p className="description">{description}</p>}
        {achievements && achievements.length > 0 && (
          <ul className="achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Job.propTypes = {
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  achievements: PropTypes.array
}


export default Job;
