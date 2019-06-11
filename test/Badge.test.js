import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Badge } from '../src/components';

test('Badge renders a <span> element with the badge class.', () => {
  const wrapper = mount(
    <Badge>Badge</Badge>
  );

  expect(wrapper).toContainMatchingElement('span.badge');
});

test('Badge renders a <span> element with the appropriate color modifier.', () => {
  const wrapper = mount(
    <Badge color='primary'>Badge</Badge>
  );

  expect(wrapper).toContainMatchingElement('span.badge.primary');
});


test('Badge renders a <span> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <Badge size='large'>Badge</Badge>
  );

  expect(wrapper).toContainMatchingElement('span.badge.large');
});

test('Badge renders a <span> element with the appropriate text modifier.', () => {
  const wrapper = mount(
    <Badge text='uppercase'>Badge</Badge>
  );

  expect(wrapper).toContainMatchingElement('span.badge.uppercase');
});

test('Badge renders a <span> element with the appropriate shape modifier.', () => {
  const wrapper = mount(
    <Badge shape='rounded'>Badge</Badge>
  );

  expect(wrapper).toContainMatchingElement('span.badge.rounded');
});
