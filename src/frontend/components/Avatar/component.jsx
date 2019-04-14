import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Avatar = ({ imgSrc, fullName }) => (
  <img src={imgSrc} alt={`${fullName} avatar`} />
);

Avatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default Avatar;
