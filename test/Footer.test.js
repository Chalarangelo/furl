import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Footer } from '../src/components';

test('Footer renders a <footer> element.', () => {
  const wrapper = shallow(
    <Footer>
    </Footer>
  );

  expect(wrapper).toContainMatchingElement('footer');
});

