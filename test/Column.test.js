import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Column } from '../src/components';

test('Column renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Column size={1}>
    </Column>
  );

  expect(wrapper).toContainMatchingElement('div.grid-col-xs-1');
  expect(wrapper).toContainMatchingElement('div.grid-col-sm-1');
  expect(wrapper).toContainMatchingElement('div.grid-col-md-1');
  expect(wrapper).toContainMatchingElement('div.grid-col-lg-1');
});

test('Column renders a <div> element with the appropriate responsive classes.', () => {
  const wrapper = shallow(
    <Column size={[1,2,3,4]}>
    </Column>
  );

  expect(wrapper).toContainMatchingElement('div.grid-col-xs-1');
  expect(wrapper).toContainMatchingElement('div.grid-col-sm-2');
  expect(wrapper).toContainMatchingElement('div.grid-col-md-3');
  expect(wrapper).toContainMatchingElement('div.grid-col-lg-4');
});

test('Column renders a <div> element with the appropriate custom classes.', () => {
  const wrapper = shallow(
    <Column size={[0.1, 0.2, 0.3, 0.4]}>
    </Column>
  );

  expect(wrapper).toContainMatchingElement('div.grid-col-xs-c01');
  expect(wrapper).toContainMatchingElement('div.grid-col-sm-c02');
  expect(wrapper).toContainMatchingElement('div.grid-col-md-c03');
  expect(wrapper).toContainMatchingElement('div.grid-col-lg-c04');
});

test('Column renders a <div> element with the appropriate custom classes.', () => {
  const wrapper = shallow(
    <Column size={['10px', '20px', '30px', '40px']}>
    </Column>
  );

  expect(wrapper).toContainMatchingElement('div.grid-col-xs-p10px');
  expect(wrapper).toContainMatchingElement('div.grid-col-sm-p20px');
  expect(wrapper).toContainMatchingElement('div.grid-col-md-p30px');
  expect(wrapper).toContainMatchingElement('div.grid-col-lg-p40px');
});