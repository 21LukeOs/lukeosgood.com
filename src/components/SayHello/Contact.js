import React from 'react';
import './SayHello.scss';
import PropTypes from 'prop-types';


const Contact = ({ icon, link, url, type, isPrivate }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact${isPrivate ? ' private' : ''}`}
    >
      <img src={icon} alt={type} />
      <span>{link}</span>
    </a>
  );
};

Contact.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool.isRequired
}


export default Contact;
