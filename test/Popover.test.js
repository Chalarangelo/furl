import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Popover } from '../src/components';

test('Popover renders a <span> element with the "popover" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text'>Hello.</Popover>
  );

  expect(wrapper).toContainMatchingElement('span.popover');
});

test('Popover renders a <span> element with the "popover-bubble" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='top'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('click');
  expect(wrapper).toContainMatchingElement('span.popover-bubble');
});

test('Popover renders a <span> element with the "popover-bubble" class when focused.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='top'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('focus');
  expect(wrapper).toContainMatchingElement('span.popover-bubble');
});

test('Popover does not render a <span> element with the "popover-bubble" class when unfocused.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='top'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('focus');
  wrapper.find('.popover-trigger').simulate('blur');
  expect(wrapper).not.toContainMatchingElement('span.popover-bubble');
});

test('Popover renders a <span> element with the "popover-top" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='top'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('click');
  expect(wrapper).toContainMatchingElement('span.popover-top');
});

test('Popover renders a <span> element with the "popover-left" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='left'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('click');
  expect(wrapper).toContainMatchingElement('span.popover-left');
});

test('Popover renders a <span> element with the "popover-right" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='right'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('click');
  expect(wrapper).toContainMatchingElement('span.popover-right');
});

test('Popover renders a <span> element with the "popover-bottom" class.', () => {
  const wrapper = mount(
    <Popover content='Simple text' position='bottom'>Hello.</Popover>
  );

  wrapper.find('.popover-trigger').simulate('click');
  expect(wrapper).toContainMatchingElement('span.popover-bottom');
});