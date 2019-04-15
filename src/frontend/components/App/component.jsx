import React from 'react';
import PropTypes from 'prop-types';
import ProfileEditor from 'components/ProfileEditor';
import Profile from 'components/Profile';

import './styles.css';

const App = ({ editMode }) => (
  <div styleName="appWrapper">
    {editMode ? <ProfileEditor /> : <Profile />}
  </div>
);

App.propTypes = {
  editMode: PropTypes.bool,
};

export default App;
