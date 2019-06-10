import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Search } from '../src/components';

test('Search renders an <input> element of the appropriate type.', () => {
  const wrapper = mount(
    <Search placeholder='Search...' />
  );

  expect(wrapper).toContainMatchingElement('input[type="search"]');
});

test('Search renders a <span> element with the appropriate icon.', () => {
  const wrapper = mount(
    <Search withIcon placeholder='Search...' />
  );

  expect(wrapper).toContainMatchingElement('span.icon');
});

test('Search renders its children.', () => {
  const wrapper = mount(
    <Search placeholder='Search...'>
      <h4>Results</h4>
      <p>Hello, hello, hello!</p>
    </Search>
  );

  expect(wrapper).toContainMatchingElement('div.search-result-box');
  expect(wrapper).toContainMatchingElement('h4');
  expect(wrapper).toContainMatchingElement('p');
});

test('Search renders its children (when passed the "withIcon" prop).', () => {
  const wrapper = mount(
    <Search withIcon placeholder='Search...'>
      <h4>Results</h4>
      <p>Hello, hello, hello!</p>
    </Search>
  );

  expect(wrapper).toContainMatchingElement('div.search-result-box');
  expect(wrapper).toContainMatchingElement('h4');
  expect(wrapper).toContainMatchingElement('p');
});
