import React from 'react';
import PropTypes from 'prop-types';
import ProfileEditor from 'components/ProfileEditor';
import Profile from 'components/Profile';

const App = ({ editMode }) => (
  editMode ? <ProfileEditor /> : <Profile />
);

App.propTypes = {
  editMode: PropTypes.bool,
};

export default App;
