import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Anchor } from '../src/components';

test('Anchor renders an <a> element.', () => {
  const wrapper = shallow(
    <Anchor href='#' />
  );

  expect(wrapper).toContainMatchingElement('a');
});
