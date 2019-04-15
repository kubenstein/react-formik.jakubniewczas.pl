import React from 'react';
import { mount } from 'enzyme';

import PasswordStrengthMeter from './component';
import calculatePasswordScore from './calculate-password-score';

describe('<PasswordStrengthMeter />', () => {
  it('renders the meter', () => {
    const wrapper = mount(
      <PasswordStrengthMeter score={0.1} show />,
    );
    expect(wrapper.html()).to.include('"meterWrapper"');
  });

  it('hides the meter', () => {
    const wrapper = mount(
      <PasswordStrengthMeter score={0.1} />,
    );
    expect(wrapper.html()).to.include('"meterWrapperHidden"');
  });

  it('renders proper score line', () => {
    const wrapper = mount(
      <PasswordStrengthMeter score={0.3} show />,
    );
    expect(wrapper.html()).to.include('"width: 30%;"');
  });

  describe('calculatePasswordScore', () => {
    it('returns 0 for invalid password', () => {
      expect(calculatePasswordScore({ value: 'dummy', isValid: false })).to.be.eq(0);
    });

    it('returns 0.5 for password +6 chars', () => {
      expect(calculatePasswordScore({ value: 'qwertyx', isValid: true })).to.be.eq(0.5);
    });

    it('returns 0.3 for password with digits', () => {
      expect(calculatePasswordScore({ value: '1', isValid: true })).to.be.eq(0.3);
    });

    it('returns 0.2 for password with special chars', () => {
      expect(calculatePasswordScore({ value: '&', isValid: true })).to.be.eq(0.2);
    });

    it('returns 1 for password strong password', () => {
      expect(calculatePasswordScore({ value: 'qwerty1!', isValid: true })).to.be.eq(1);
    });
  });
});
