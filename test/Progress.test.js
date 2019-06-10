import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Progress } from '../src/components';

test('Progress renders an <progress> element with appropriate attributes.', () => {
  const wrapper = shallow(
    <Progress value={25} max={100}/>
  );

  expect(wrapper).toContainMatchingElement('progress');
  expect(wrapper).toContainMatchingElement('progress[value=25]');
  expect(wrapper).toContainMatchingElement('progress[max=100]');
});

test('Progress has the correct props.', () => {
  const wrapper = shallow(
    <Progress value={25} max={100} />
  );

  expect(wrapper.find('progress')).toHaveProp({ value: 25 });
  expect(wrapper.find('progress')).toHaveProp({ max: 100 });
});

test('Progress renders an <progress> element with the appropriate color modifier.', () => {
  const wrapper = shallow(
    <Progress value={25} max={100} color='primary' />
  );

  expect(wrapper).toContainMatchingElement('progress.primary');
});


test('Progress renders an <progress> element with the appropriate size modifier.', () => {
  const wrapper = shallow(
    <Progress value={25} max={100} size='large' />
  );

  expect(wrapper).toContainMatchingElement('progress.large');
});
