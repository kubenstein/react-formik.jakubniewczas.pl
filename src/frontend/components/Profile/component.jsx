import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import FunctionLink from 'components/FunctionLink';

import './styles.css';

const Profile = ({ email, firstName, lastName, onEditClick }) => (
  <div>
    <Avatar />
    <FunctionLink onClick={onEditClick}>Edit</FunctionLink>
    <br />
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

Profile.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Profile;
