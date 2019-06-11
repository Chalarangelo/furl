import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Sidebar } from '../src/components';

test('Sidebar renders an <aside> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Sidebar>
    </Sidebar>
  );

  expect(wrapper).toContainMatchingElement('aside.layout-sidebar');
});

