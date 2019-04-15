import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PasswordStrengthMeter = ({ score }) => (
  <div>{score}</div>
);

PasswordStrengthMeter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default PasswordStrengthMeter;
