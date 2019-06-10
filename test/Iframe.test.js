import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Iframe } from '../src/components';

test('Image renders an <iframe> element.', () => {
  const wrapper = shallow(
    <Iframe src='...' />
  );

  expect(wrapper).toContainMatchingElement('iframe');
});

test('Image renders a <figure> element containing an <iframe> and a <figcaption>.', () => {
  const wrapper = mount(
    <Iframe src='...' withCaption alt='Demo Iframe' />
  );

  expect(wrapper).toContainMatchingElement('figure');
  expect(wrapper).toContainMatchingElement('figure > iframe');
  expect(wrapper).toContainMatchingElement('figure > figcaption');
});
