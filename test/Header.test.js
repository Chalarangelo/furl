import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Header } from '../src/components';

test('Header renders a <header> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Header>
    </Header>
  );

  expect(wrapper).toContainMatchingElement('header.layout-header');
});

test('Header renders a <header> element with the appropriate modifier.', () => {
  const wrapper = shallow(
    <Header outline='border-bottom'>
    </Header>
  );

  expect(wrapper).toContainMatchingElement('header.layout-header.border-bottom');
});