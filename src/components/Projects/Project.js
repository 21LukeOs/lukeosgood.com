import React from 'react';
import extLink from '../../assets/external-link.svg';
import './Projects.scss';
import PropTypes from 'prop-types';

const Project = ({ label, url, description, github }) => {
	return (
		<li className='project'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'>
				<span className='bold'>
					<img src={extLink} alt='external link' /> {label}
				</span>
			</a>
			: {description}{' '}
			{github ? (
				<a
					href={github}
					target='_blank'
					rel='noopener noreferrer'
					className='github-link'>
					<span className='bold'>
						<img src={extLink} alt='external link' /> GitHub
					</span>
				</a>
			) : null}
		</li>
	);
};

Project.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	github: PropTypes.string
};

export default Project;
