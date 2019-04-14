import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ email, firstName, lastName }) => ({
  email,
  firstName,
  lastName,
});

export default connect(mapStateToProps)(Component);
