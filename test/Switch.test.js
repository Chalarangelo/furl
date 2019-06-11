import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Switch } from '../src/components';

test('Switch renders an <input> element of type checkbox.', () => {
  const wrapper = mount(
    <Switch>Hello</Switch>
  );

  expect(wrapper).toContainMatchingElement('input[type="checkbox"]');
});
