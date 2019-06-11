import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Row, Column, Button } from '../src/components';

test('Row renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Row>
    </Row>
  );

  expect(wrapper).toContainMatchingElement('div.grid-row');
});

test('Row does not render direct children other than Columns.', () => {
  const wrapper = mount(
    <Row>
      <Column></Column>
      <Button></Button>
    </Row>
  );

  expect(wrapper).not.toContainMatchingElement('button');
});
