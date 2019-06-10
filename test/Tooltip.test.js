import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Tooltip } from '../src/components';

test('Tooltip renders a <span> element with the "tooltip" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='top'>Hello.</Tooltip>  
  );

  expect(wrapper).toContainMatchingElement('span.tooltip');
});

test('Tooltip renders a <span> element with the "tooltip-bubble" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='top'>Hello.</Tooltip>
  );

  wrapper.find('.tooltip-trigger').simulate('mouseOver');
  expect(wrapper).toContainMatchingElement('span.tooltip-bubble');
});

test('Tooltip renders a <span> element with the "tooltip-top" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='top'>Hello.</Tooltip>
  );

  wrapper.find('.tooltip-trigger').simulate('mouseOver');
  expect(wrapper).toContainMatchingElement('span.tooltip-top');
});

test('Tooltip renders a <span> element with the "tooltip-left" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='left'>Hello.</Tooltip>
  );

  wrapper.find('.tooltip-trigger').simulate('mouseOver');
  expect(wrapper).toContainMatchingElement('span.tooltip-left');
});

test('Tooltip renders a <span> element with the "tooltip-right" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='right'>Hello.</Tooltip>
  );

  wrapper.find('.tooltip-trigger').simulate('mouseOver');
  expect(wrapper).toContainMatchingElement('span.tooltip-right');
});

test('Tooltip renders a <span> element with the "tooltip-bottom" class.', () => {
  const wrapper = mount(
    <Tooltip content='Simple text' position='bottom'>Hello.</Tooltip>
  );

  wrapper.find('.tooltip-trigger').simulate('mouseOver');
  expect(wrapper).toContainMatchingElement('span.tooltip-bottom');
});