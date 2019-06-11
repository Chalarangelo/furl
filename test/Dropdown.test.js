import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Dropdown, Hyperlink } from '../src/components';

test('Dropdown renders a <details> element with the appropriate structure.', () => {
  const wrapper = mount(
    <Dropdown text="Dropdown">
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Dropdown>
  );

  expect(wrapper).toContainMatchingElement('details');
  expect(wrapper).toContainMatchingElement('details summary');
  expect(wrapper).toContainMatchingElement('details .dropdown-content')
});

test('Dropdown renders a <details> element with the reverse class.', () => {
  const wrapper = mount(
    <Dropdown text="Dropdown" reverse>
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Dropdown>
  );

  expect(wrapper).toContainMatchingElement('details.reverse');
});
