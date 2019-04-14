import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Form = ({ email, firstName, lastName }) => (
  <div>
    <span>email: </span>
    <b>{email}</b>
    <br />

    <span>name: </span>
    <b>{`${firstName} ${lastName}`}</b>

    <br />
    <span>email: </span>
    <b>{email}</b>
    <br />

    <span>password: </span>
    <b>*****</b>
  </div>
);

Form.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Form;