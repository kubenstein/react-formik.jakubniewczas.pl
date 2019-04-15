import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from 'lib/appState';

import 'assets';

import App from 'components/App';

const initialState = {
  editMode: false,
  email: 'niewczas.jakub@gmail.com',
  firstName: 'Jakub',
  lastName: 'Niewczas',
  password: 'qw3rty',
};

ReactDOM.render(
  <StateProvider initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('app'),
);
