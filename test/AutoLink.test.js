import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AutoLink from '../src/utilities/AutoLink';

test('AutoLink renders an <a> element from a link.', () => {
  const wrapper = mount(
    <AutoLink text='I am a test with a link to https://www.google.com/.'/>
  );

  expect(wrapper).toContainMatchingElement('a');
});


test('AutoLink renders an <a> element from a link without http.', () => {
  const wrapper = mount(
    <AutoLink text='I am a test with a link to www.google.com/.' />
  );

  expect(wrapper).toContainMatchingElement('a');
});