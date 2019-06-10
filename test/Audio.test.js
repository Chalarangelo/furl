import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Audio } from '../src/components';

test('Image renders an <audio> element.', () => {
  const wrapper = shallow(
    <Audio src='...' />
  );

  expect(wrapper).toContainMatchingElement('audio');
});

test('Image renders a <figure> element containing an <audio> and a <figcaption>.', () => {
  const wrapper = mount(
    <Audio src='...' withCaption alt='Demo Audio' />
  );

  expect(wrapper).toContainMatchingElement('figure');
  expect(wrapper).toContainMatchingElement('figure > audio');
  expect(wrapper).toContainMatchingElement('figure > figcaption');
});
