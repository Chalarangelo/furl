import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Tab, TabItem } from '../src/components';

test('Content renders a <div> element of the appropriate class and with the appropriate structure.', () => {
  const wrapper = mount(
    <Tab>
    </Tab>
  );

  expect(wrapper).toContainMatchingElement('div.tab-container');
  expect(wrapper).toContainMatchingElement('div.tab-controls');
  expect(wrapper).toContainMatchingElement('div.tab-content');
});

test('Content renders a <nav> element with the given children.', () => {
  const wrapper = mount(
    <Tab openIndex={2}>
      <TabItem title='Lorem Ipsum' id='lorem-ipsum'><p>...</p></TabItem>
      <TabItem title='Dolor Sit Amet'><p>...</p></TabItem>
      <TabItem title='Peprendur'><p>...</p></TabItem>
      <TabItem title='Nulla sit etiam'><p>...</p></TabItem>
    </Tab>
  );

  expect(wrapper).toContainMatchingElement('div.tab-container');
  expect(wrapper).toContainMatchingElements(4, 'div.tab-controls button');
  expect(wrapper).toContainMatchingElement('div.tab-controls #lorem-ipsum');
});