import React from 'react';
import PropTypes from 'prop-types';
import Profile from 'components/Profile';

const App = ({ editMode }) => (
  editMode ? <h1>Edit mode</h1> : <Profile />
);

App.propTypes = {
  editMode: PropTypes.bool,
};

export default App;
