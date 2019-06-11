import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Menu, MenuItem } from '../src/components';

test('Menu renders a <nav> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Menu>
    </Menu>
  );

  expect(wrapper).toContainMatchingElement('nav.menu');
});

test('MenuItem renders a <button> element of the appropriate class.', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem />
    </Menu>
  );

  expect(wrapper).toContainMatchingElement('nav button.menu-item');
});
