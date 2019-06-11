import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Collapse, Hyperlink } from '../src/components';

test('Collapse renders a <details> element with the appropriate structure.', () => {
  const wrapper = mount(
    <Collapse title="Don't do it">
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Collapse>
  );

  expect(wrapper).toContainMatchingElement('details.collapse');
  expect(wrapper).toContainMatchingElement('details summary');
  expect(wrapper).toContainMatchingElement('details .collapse-content');
});

test('Collapse renders a <details> element with the appropriate modifier.', () => {
  const wrapper = mount(
    <Collapse title="Don't do it" fill='flat'>
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Collapse>
  );

  expect(wrapper).toContainMatchingElement('.collapse.flat');
});