import React from 'react';
import './Projects.scss';
import PropTypes from 'prop-types';


const Project = ({ label, url, description }) => {
	return (
		<li className='project'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'>
				<span className='bold'>{label}</span>
			</a>
			: {description}
		</li>
	);
};

Project.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default Project;
