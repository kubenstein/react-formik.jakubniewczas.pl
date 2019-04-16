import connect from 'lib/appState/connect';

import Component from './component';
import validate from './validate';

const mapStateToProps = ({ email, firstName, lastName }, _props, updateState) => ({
  email,
  firstName,
  lastName,
  validate,
  onReturnClick: () => updateState({ editMode: false }),
  onSubmit: (values) => {
    // eslint-disable-next-line no-shadow
    const { email, firstName, lastName, newPassword } = values;
    updateState({ email, firstName, lastName, editMode: false });
    if (newPassword) updateState({ password: newPassword });

    // eslint-disable-next-line no-console
    console.log({ email, firstName, lastName, newPassword });
  },
});

export default connect(mapStateToProps)(Component);
