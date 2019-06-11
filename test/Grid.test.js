import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Grid, Row, Button } from '../src/components';

test('Grid renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Grid>
    </Grid>
  );

  expect(wrapper).toContainMatchingElement('div.grid-container');
});

test('Grid renders a <div> element of the appropriate modifiers.', () => {
  const wrapper = shallow(
    <Grid align='center' justify='center'>
    </Grid>
  );

  expect(wrapper).toContainMatchingElement('.grid-container.justify-center.align-center');
});

test('Grid does not render direct children other than Rows.', () => {
  const wrapper = mount(
    <Grid>
      <Row></Row>
      <Button></Button>
    </Grid>
  );

  expect(wrapper).not.toContainMatchingElement('button');
});
