import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Accordion, Collapse, Hyperlink } from '../src/components';

test('Accordion renders the appropriate structure.', () => {
  const wrapper = mount(
    <Accordion id="test">
      <Collapse title="Don't do it">
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Collapse>
      <Collapse title="Don't do it">
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Collapse>
    </Accordion>
  );

  expect(wrapper).toContainMatchingElements(2, 'details');
  expect(wrapper).toContainMatchingElements(2, 'details summary');
  expect(wrapper).toContainMatchingElements(2, 'details .collapse-content');
  expect(wrapper).toContainMatchingElement('.accordion');
});

test('Accordion renders a component with the appropriate modifier.', () => {
  const wrapper = mount(
    <Accordion id="test" fill='flat'>
      <Collapse title="Don't do it">
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Collapse>
      <Collapse title="Don't do it">
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Collapse>
    </Accordion>
  );

  expect(wrapper).toContainMatchingElement('.collapse.flat');
});
