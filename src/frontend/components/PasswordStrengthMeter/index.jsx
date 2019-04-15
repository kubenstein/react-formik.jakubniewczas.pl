import React from 'react';
import PropTypes from 'prop-types';
import { connect as formikConnect, getIn } from 'formik';

import calculatePasswordScore from './calculate-password-score';
import Component from './component';

const ConnectedComponent = ({ formik }) => {
  const error = getIn(formik.errors, 'newPassword');
  const value = getIn(formik.values, 'newPassword');
  const score = calculatePasswordScore({ value, isValid: !error });
  const show = value.length > 0;

  return <Component score={score} show={show} />;
};

ConnectedComponent.propTypes = {
  formik: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default formikConnect(ConnectedComponent);
