import React from 'react';
import { mount } from 'enzyme';

import { StateProvider } from 'lib/appState';
import App from './component';

describe('<App />', () => {
  const initialState = {
    email: 'niewczas.jakub@gmail.com',
    firstName: 'Jakub',
    lastName: 'Niewczas',
  };

  it('renders Profile', () => {
    const wrapper = mount(
      <StateProvider initialState={initialState}>
        <App editMode={false} />
      </StateProvider>,
    );
    expect(wrapper.html()).to.include('Edit Profile');
  });

  it('renders ProfileEditor', () => {
    const wrapper = mount(
      <StateProvider initialState={initialState}>
        <App editMode />
      </StateProvider>,
    );
    expect(wrapper.html()).to.include('submit');
  });
});
