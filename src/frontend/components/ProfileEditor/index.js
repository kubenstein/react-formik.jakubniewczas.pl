import connect from 'lib/appState/connect';

import Component from './component';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.firstName) errors.firstName = 'Required';
  if (!values.lastName) errors.lastName = 'Required';
  if (values.newPassword && values.newPassword.length < 5) {
    errors.newPassword = 'Required';
  }

  return errors;
};

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
