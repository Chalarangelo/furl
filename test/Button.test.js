import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from '../src/components';

test('Button renders a <button> element with the badge class.', () => {
  const wrapper = mount(
    <Button>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button');
});

test('Button renders a <button> element with the appropriate color modifier.', () => {
  const wrapper = mount(
    <Button color='primary'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button.primary');
});


test('Button renders a <button> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <Button size='large'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button.large');
});

test('Button renders a <button> element with the appropriate text modifier.', () => {
  const wrapper = mount(
    <Button text='uppercase'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button.uppercase');
});

test('Button renders a <button> element with the appropriate shape modifier.', () => {
  const wrapper = mount(
    <Button shape='rounded'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button.rounded');
});

test('Button renders an <a> element with the appropriate class.', () => {
  const wrapper = mount(
    <Button type='link' href='https://google.com'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('a.button');
});

test('Button renders an <button> element of type submit.', () => {
  const wrapper = mount(
    <Button type='submit' >Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button[type="submit"]');
});

test('Button renders an <button> element of type reset.', () => {
  const wrapper = mount(
    <Button type='reset' >Button</Button>
  );

  expect(wrapper).toContainMatchingElement('button[type="reset"]');
});

test('Button renders an <span> element when its className is with-dropdown.', () => {
  const wrapper = mount(
    <Button className='with-dropdown'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('span.with-dropdown');
});