import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Image } from '../src/components';

test('Image renders an <img> element.', () => {
  const wrapper = shallow(
    <Image src='https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' />
  );

  expect(wrapper).toContainMatchingElement('img');
});

test('Image renders a <figure> element containing an <img> and a <figcaption>.', () => {
  const wrapper = mount(
    <Image src='https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' withCaption alt='Image by Garrick Sangil on Unsplash' />
  );

  expect(wrapper).toContainMatchingElement('figure');
  expect(wrapper).toContainMatchingElement('figure > img');
  expect(wrapper).toContainMatchingElement('figure > figcaption');
});
