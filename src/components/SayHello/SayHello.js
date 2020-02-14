import React from 'react';
import Contact from './Contact';
import { contacts } from './constants';
import './SayHello.scss';
import PropTypes from 'prop-types';


const SayHello = ({ showPrivateDetails }) => {
  return (
    <div className="box say-hello">
      <h3>Say Hello</h3>
      {contacts
        .filter(contact =>
          contact.isPrivate ? showPrivateDetails : true
        )
        .map(contact => (
          <Contact {...contact} key={contact.type} />
        ))}
    </div>
  );
};

SayHello.propTypes = {
  showPrivateDetails: PropTypes.bool.isRequired
}


export default SayHello;
