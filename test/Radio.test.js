import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Radio } from '../src/components';

test('Radio renders an <input> element of type radio.', () => {
  const wrapper = mount(
    <Radio>Hello</Radio>
  );

  expect(wrapper).toContainMatchingElement('input[type="radio"]');
});
