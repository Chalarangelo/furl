import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Grid } from '../src/components';

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
