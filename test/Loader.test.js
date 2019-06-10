import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Loader } from '../src/components';

test('Loader renders a <span> element with the loader class.', () => {
  const wrapper = mount(
    <Loader />
  );

  expect(wrapper).toContainMatchingElement('span.loader');
});

test('Progress renders a <span> element with the appropriate color modifier.', () => {
  const wrapper = mount(
    <Loader color='primary' />
  );

  expect(wrapper).toContainMatchingElement('span.loader.primary');
});


test('Loader renders a <span> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <Loader size='large' />
  );

  expect(wrapper).toContainMatchingElement('span.loader.large');
});
