import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Menu, MenuItem, Dropdown } from '../src/components';

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

test('MenuItem renders an <a> element of the appropriate class.', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem href='.' />
    </Menu>
  );

  expect(wrapper).toContainMatchingElement('nav a.button.menu-item');
});

test('MenuItem renders a <button> element with the appropriate modifier.', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem selected/>
    </Menu>
  );

  expect(wrapper).toContainMatchingElement('nav button.menu-item.selected');
});

test('MenuItem renders a <span> element with the appropriate modifier.', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem>
        <Dropdown></Dropdown>
      </MenuItem>
    </Menu>
  );

  expect(wrapper).toContainMatchingElement('nav span.menu-item.with-dropdown');
});
