import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Calendar } from '../src/components';

test('Calendar renders the correct HTML structure.', () => {
  const wrapper = shallow(
    <Calendar />
  );

  expect(wrapper).toContainMatchingElement('div.calendar-container');
  expect(wrapper).toContainMatchingElement('div.calendar-header');
  expect(wrapper).toContainMatchingElements(2, '.calendar-arrow-button');
  expect(wrapper).toContainMatchingElement('div.calendar-grid');
});

test('Calendar selects the correct date.', () => {
  const wrapper = shallow(
    <Calendar date={new Date('01/01/2020')}/>
  );

  expect(wrapper.find('.calendar-month')).toHaveText('January 2020');
  expect(wrapper.find('.calendar-date.in-month.highlighted')).toHaveText('1');
  expect(wrapper.find('.calendar-date.in-month.highlighted')).toHaveProp({ title: 'Wed Jan 01 2020' });
});