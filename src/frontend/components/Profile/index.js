import connect from 'lib/appState/connect';

import Component from './component';

const mapStateToProps = ({ email, firstName, lastName }, _props, updateState) => ({
  email,
  firstName,
  lastName,
  onEditClick: () => updateState({ editMode: true }),
});

export default connect(mapStateToProps)(Component);
