import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PasswordStrengthMeter = ({ score, show }) => (
  <div styleName={show ? 'meterWrapper' : 'meterWrapperHidden'}>
    <div styleName="bar" style={{ width: `${score * 100}%` }} />
    <span>weak</span>
    <span>strong</span>
  </div>
);

PasswordStrengthMeter.propTypes = {
  score: PropTypes.number.isRequired,
  show: PropTypes.bool,
};

export default PasswordStrengthMeter;
