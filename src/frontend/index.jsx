import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from 'lib/appState';

import 'assets';

import Form from 'components/Form';

const initialState = {
  email: 'niewczas.jakub@gmail.com',
  firstName: 'Jakub',
  lastName: 'Niewczas',
  password: 'qw3rty',
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <Form />
  </StateProvider>,
  document.getElementById('app'),
);
