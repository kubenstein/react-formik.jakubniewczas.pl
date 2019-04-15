import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import FunctionLink from 'components/FunctionLink';

import './styles.css';

const Profile = ({ email, firstName, lastName, onEditClick }) => (
  <div className="profileWrapper">
    <Avatar />
    <div className="field">
      <span className="label">email: </span>
      <span className="value">{email}</span>
    </div>

    <div className="field">
      <span className="label">name: </span>
      <span className="value">{`${firstName} ${lastName}`}</span>
    </div>

    <div className="field">
      <span className="label">password: </span>
      <span className="value">✲✲✲✲</span>
    </div>
    <FunctionLink className="actionBtn" onClick={onEditClick}>Edit Profile</FunctionLink>
  </div>
);

Profile.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Profile;
