import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { StateProvider } from 'lib/appState';
import Profile from './component';

describe('<Profile />', () => {
  it('renders data preview', () => {
    const wrapper = mount(
      <StateProvider>
        <Profile
          email="niewczas.jakub@gmail.com"
          firstName="Jakub"
          lastName="Niewczas"
          onEditClick={() => {}}
        />
      </StateProvider>,
    );
    expect(wrapper.html()).to.include('<span class="value">niewczas.jakub@gmail.com</span>');
    expect(wrapper.html()).to.include('<span class="value">Jakub Niewczas</span>');
  });

  it('triggers onEditClick on clicking edit button', () => {
    const onEditClick = sinon.spy();

    const wrapper = mount(
      <StateProvider>
        <Profile
          email="niewczas.jakub@gmail.com"
          firstName="Jakub"
          lastName="Niewczas"
          onEditClick={onEditClick}
        />
      </StateProvider>,
    );

    wrapper.find('a.actionBtn').simulate('click');
    expect(onEditClick).to.have.been.calledOnce();
  });
});
