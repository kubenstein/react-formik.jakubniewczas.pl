const emailValidationErrors = ({ email }) => {
  if (!email) return { email: 'Required' };
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return { email: 'Invalid email address' };
  }
  return null;
};

const firstNameValidationErrors = ({ firstName }) => {
  if (!firstName) return { firstName: 'Required' };
  return null;
};

const lastNameValidationErrors = ({ lastName }) => {
  if (!lastName) return { lastName: 'Required' };
  return null;
};

const newPasswordValidationErrors = ({ newPassword }) => {
  if (!newPassword) return null;

  if (newPassword.length < 5) return { newPassword: 'too short, min 5' };
  return null;
};

const validate = values => ({
  ...emailValidationErrors(values),
  ...firstNameValidationErrors(values),
  ...lastNameValidationErrors(values),
  ...newPasswordValidationErrors(values),
});

export default validate;
