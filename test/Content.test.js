import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Content } from '../src/components';

test('Content renders a <main> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Content>
    </Content>
  );

  expect(wrapper).toContainMatchingElement('main.layout-content');
});

