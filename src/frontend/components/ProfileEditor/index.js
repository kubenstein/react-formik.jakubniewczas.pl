import connect from 'lib/appState/connect';

import Component from './component';
import validate from './validate';

const mapStateToProps = ({ email, firstName, lastName }, _props, updateState) => ({
  email,
  firstName,
  lastName,
  validate,
  onCloseClick: () => updateState({ editMode: false }),
  submit: (values) => {
    // eslint-disable-next-line no-shadow
    const { email, firstName, lastName, newPassword } = values;
    updateState({ email, firstName, lastName, editMode: false });
    if (newPassword) updateState({ password: newPassword });
  },
});

export default connect(mapStateToProps)(Component);
