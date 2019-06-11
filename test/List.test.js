import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { List, ListItem } from '../src/components';

test('List renders a <ul> element with the given children.', () => {
  const wrapper = mount(
    <List>
      <ListItem>A</ListItem>
      <ListItem>B</ListItem>
      <ListItem>C</ListItem>
    </List>
  );

  expect(wrapper).toContainMatchingElement('ul');
  expect(wrapper).toContainMatchingElements(3, 'li');
});

test('List renders an <ol> element with the given children.', () => {
  const wrapper = mount(
    <List ordered>
      <ListItem>A</ListItem>
      <ListItem>B</ListItem>
      <ListItem>C</ListItem>
    </List>
  );

  expect(wrapper).toContainMatchingElement('ol');
  expect(wrapper).toContainMatchingElements(3, 'li');
});

test('List renders a <ul> element with the appropriate style.', () => {
  const wrapper = mount(
    <List listStyle='disc'>
      <ListItem>A</ListItem>
      <ListItem>B</ListItem>
      <ListItem>C</ListItem>
    </List>
  );

  expect(wrapper).toContainMatchingElement('ul.disc');
});