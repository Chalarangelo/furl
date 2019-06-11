import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Checkbox } from '../src/components';

test('Checkbox renders an <input> element of type checkbox.', () => {
  const wrapper = mount(
    <Checkbox>Hello</Checkbox>
  );

  expect(wrapper).toContainMatchingElement('input[type="checkbox"]');
});
