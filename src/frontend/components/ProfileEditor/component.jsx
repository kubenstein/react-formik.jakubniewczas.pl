import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import FunctionLink from 'components/FunctionLink';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './styles.css';

const ProfileEditor = ({ email, firstName, lastName, onCloseClick, submit, validate }) => (
  <Formik
    initialValues={{ email, firstName, lastName, newPassword: '', plainTextPassword: false }}
    validate={validate}
    onSubmit={submit}
  >
    {({
      values: { plainTextPassword },
      touched: { newPassword: isNewPasswordTouched },
      setFieldValue,
      setFieldTouched,
      handleChange,
    }) => (
      <Form>
        <Avatar />
        <FunctionLink onClick={onCloseClick}>close</FunctionLink>

        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <Field type="text" name="firstName" />
        <ErrorMessage name="firstName" component="div" />

        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName" component="div" />

        <Field
          type={plainTextPassword ? 'text' : 'password'}
          name="newPassword"
          onChange={(e) => {
            setFieldTouched('newPassword');
            handleChange(e);
          }}
        />
        <FunctionLink onClick={() => setFieldValue('plainTextPassword', !plainTextPassword)}>
          {plainTextPassword ? 'hide password' : 'see password'}
        </FunctionLink>
        {isNewPasswordTouched && (
          <div>password strength meter</div>
        )}
        <ErrorMessage name="newPassword" component="div" />

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

ProfileEditor.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ProfileEditor;
