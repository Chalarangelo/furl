import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Graph } from '../src/components';

test('Graph renders a <canvas> element.', () => {
  const wrapper = shallow(
    <Graph data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} />
  );

  expect(wrapper).toContainMatchingElement('canvas');
});

test('Graph renders a <figure> element containing a <canvas> and a <figcaption>.', () => {
  const wrapper = shallow(
    <Graph type='curve' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} alt='Trend of the game' withCaption />
  );

  expect(wrapper).toContainMatchingElement('figure');
  expect(wrapper).toContainMatchingElement('figure > canvas');
  expect(wrapper).toContainMatchingElement('figure > figcaption');
});
