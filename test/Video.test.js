import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Video } from '../src/components';

test('Image renders an <video> element.', () => {
  const wrapper = shallow(
    <Video src='...' />
  );

  expect(wrapper).toContainMatchingElement('video');
});

test('Image renders a <figure> element containing an <video> and a <figcaption>.', () => {
  const wrapper = mount(
    <Video src='...' withCaption alt='Demo video' />
  );

  expect(wrapper).toContainMatchingElement('figure');
  expect(wrapper).toContainMatchingElement('figure > video');
  expect(wrapper).toContainMatchingElement('figure > figcaption');
});
