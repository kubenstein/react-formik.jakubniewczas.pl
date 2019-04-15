import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { StateProvider } from 'lib/appState';
import ProfileEditor from './component';
import validate from './validate';

describe('<ProfileEditor />', () => {
  it('renders data form', () => {
    const wrapper = mount(
      <StateProvider>
        <ProfileEditor
          email="niewczas.jakub@gmail.com"
          firstName="Jakub"
          lastName="Niewczas"
          onReturnClick={() => {}}
          onSubmit={() => {}}
          validate={() => {}}
        />
      </StateProvider>,
    );
    expect(wrapper.html()).to.include('name="email"');
    expect(wrapper.html()).to.include('name="firstName"');
    expect(wrapper.html()).to.include('name="lastName"');
  });

  it('triggers onReturnClick callback', () => {
    const onReturnClick = sinon.spy();
    const wrapper = mount(
      <StateProvider>
        <ProfileEditor
          email="niewczas.jakub@gmail.com"
          firstName="Jakub"
          lastName="Niewczas"
          onReturnClick={onReturnClick}
          onSubmit={() => {}}
          validate={() => {}}
        />
      </StateProvider>,
    );

    wrapper.find('a.actionBtn').simulate('click');
    expect(onReturnClick).to.have.been.calledOnce();
  });

  it('triggers onSubmit callback', (done) => {
    const onSubmit = sinon.spy();
    const wrapper = mount(
      <StateProvider>
        <ProfileEditor
          email="niewczas.jakub@gmail.com"
          firstName="Jakub"
          lastName="Niewczas"
          onReturnClick={() => {}}
          onSubmit={onSubmit}
          validate={() => ({})}
        />
      </StateProvider>,
    );

    wrapper.find('button').simulate('submit');
    setTimeout(() => {
      expect(onSubmit).to.have.been.calledOnce();

      const onSubmitArgs = onSubmit.getCall(0).args[0];
      expect(onSubmitArgs).to.include({
        email: 'niewczas.jakub@gmail.com',
        firstName: 'Jakub',
        lastName: 'Niewczas',
        newPassword: '',
      });
      done();
    }, 0);
  });

  describe('validation', () => {
    it('returns firstName error if blank', () => {
      const errors = validate({ firstName: '' });
      expect(errors.firstName).to.be.eq('Required');
    });

    it('returns lastName error if blank', () => {
      const errors = validate({ lastName: '' });
      expect(errors.lastName).to.be.eq('Required');
    });

    it('returns email error if blank', () => {
      const errors = validate({ email: '' });
      expect(errors.email).to.be.eq('Required');
    });

    it('returns email error if wrong format', () => {
      const errors = validate({ email: 'abc@@example.com' });
      expect(errors.email).to.be.eq('Invalid email address');
    });

    it('accepts blank newPassword', () => {
      const errors = validate({ newPassword: '' });
      expect(errors.newPassword).to.be.undefined();
    });

    it('returns newPassword error if too short', () => {
      const errors = validate({ newPassword: '1234' });
      expect(errors.newPassword).to.be.eq('Too short, min 5 characters');
    });
  });
});
