import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Divider } from '../src/components';

test('Divider (horizontal) renders an <hr> element.', () => {
  const wrapper = shallow(
    <Divider />
  );

  expect(wrapper).toContainMatchingElement('hr');
});

test('Divider (vertical) renders an <span> element with the "divider" class.', () => {
  const wrapper = shallow(
    <Divider vertical/>
  );

  expect(wrapper).toContainMatchingElement('span.divider');
});
