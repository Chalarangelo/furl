import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Alert } from '../src/components';

test('Alert renders a <div> element with the alert class.', () => {
  const wrapper = mount(
    <Alert>Alert</Alert>
  );

  expect(wrapper).toContainMatchingElement('div.alert');
});

test('Alert renders a <div> element with the appropriate color modifier.', () => {
  const wrapper = mount(
    <Alert color='primary'>Alert</Alert>
  );

  expect(wrapper).toContainMatchingElement('div.alert.primary');
});


test('Alert renders a <div> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <Alert size='large'>Alert</Alert>
  );

  expect(wrapper).toContainMatchingElement('div.alert.large');
});

test('Alert renders a <div> element with the appropriate shape modifier.', () => {
  const wrapper = mount(
    <Alert shape='rounded'>Alert</Alert>
  );

  expect(wrapper).toContainMatchingElement('div.alert.rounded');
});
