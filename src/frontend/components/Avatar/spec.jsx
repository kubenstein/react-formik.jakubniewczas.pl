import React from 'react';
import { mount } from 'enzyme';

import Avatar from './component';

describe('<Avatar />', () => {
  it('renders proper image', () => {
    const wrapper = mount(
      <Avatar
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        fullName="Kuba Niewczas"
      />,
    );
    expect(wrapper.html()).to.include('src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Kuba Niewczas');
  });
});
