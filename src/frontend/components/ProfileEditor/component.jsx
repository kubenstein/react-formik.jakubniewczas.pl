import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import FunctionLink from 'components/FunctionLink';
import PasswordStrengthMeter from 'components/PasswordStrengthMeter';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './styles.css';

const ProfileEditor = ({ email, firstName, lastName, onReturnClick, onSubmit, validate }) => (
  <Formik
    initialValues={{ email, firstName, lastName, newPassword: '', plainTextPassword: false }}
    validate={validate}
    onSubmit={onSubmit}
  >
    {({
      values: { plainTextPassword },
      errors,
      setFieldValue,
    }) => (
      <Form className="profileWrapper">
        <Avatar />
        <FunctionLink className="actionBtn" onClick={onReturnClick}>⇠return&nbsp;</FunctionLink>

        <div className="field">
          <span className="label">email: </span>
          <ErrorMessage className="error" name="email" component="span" />
          <Field
            className={errors.email ? 'erroredInput' : 'input'}
            type="email"
            name="email"
            autoComplete="off"
          />
        </div>

        <div className="field">
          <span className="label">first name: </span>
          <ErrorMessage className="error" name="firstName" component="span" />
          <Field
            className={errors.firstName ? 'erroredInput' : 'input'}
            type="text"
            name="firstName"
            autoComplete="off"
          />
        </div>

        <div className="field">
          <span className="label">last name: </span>
          <ErrorMessage className="error" name="lastName" component="span" />
          <Field
            className={errors.lastName ? 'erroredInput' : 'input'}
            type="text"
            name="lastName"
            autoComplete="off"
          />
        </div>

        <div className="field">
          <span className="label">new password: </span>
          <ErrorMessage className="error" name="newPassword" component="span" />
          <div styleName="password">
            <Field
              className={errors.newPassword ? 'erroredInput' : 'input'}
              type={plainTextPassword ? 'text' : 'password'}
              name="newPassword"
              autoComplete="off"
            />
            <FunctionLink
              styleName="showPasswordBtn"
              className="fas fa-eye"
              onClick={() => setFieldValue('plainTextPassword', !plainTextPassword)}
            />
          </div>
          <PasswordStrengthMeter />
        </div>

        <button className="actionBtn" type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

ProfileEditor.propTypes = {
  onReturnClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ProfileEditor;
