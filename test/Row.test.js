import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Row } from '../src/components';

test('Row renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Row>
    </Row>
  );

  expect(wrapper).toContainMatchingElement('div.grid-row');
});
