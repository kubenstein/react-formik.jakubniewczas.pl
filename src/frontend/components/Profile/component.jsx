import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';

import './styles.css';

const Profile = ({ email, firstName, lastName }) => (
  <div>
    <Avatar />
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
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Profile;
