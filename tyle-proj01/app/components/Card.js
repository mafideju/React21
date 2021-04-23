import React from 'react';
import PropTypes from 'prop-types';

function Card ({ header, subheader, avatar, href, name, children }) {
  return (
    <div className='card bg-light'>
      {header    && (<h4 className='header-lg center-text'>{header}</h4>)}
      {avatar    && (<img className='avatar' src={avatar} alt={`Avatar for ${name}`} />)}
      {subheader && (<h4 className='center-text'>{subheader}</h4>)}
      {name      && (<h2 className='center-text'><a className='link' href={href}>{name}</a></h2>)}
      {/* RENDER COMPONENT */}
      {children}
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Card.defaultProps = {
  avatar: '',
  href: '',
  name: '',
}

export default Card;