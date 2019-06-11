import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ContextButton } from '../src/components';

test('ContextButton renders a <button> element with the badge class.', () => {
  const wrapper = mount(
    <ContextButton>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button');
});

test('ContextButton renders a <button> element with the appropriate color modifier.', () => {
  const wrapper = mount(
    <ContextButton color='primary'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button.context-button');
});


test('ContextButton renders a <button> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <ContextButton size='large'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button.context-button.large');
});

test('ContextButton renders a <button> element with the appropriate text modifier.', () => {
  const wrapper = mount(
    <ContextButton text='uppercase'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button.context-button.uppercase');
});

test('ContextButton renders a <button> element with the appropriate shape modifier.', () => {
  const wrapper = mount(
    <ContextButton shape='rounded'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button.context-button.rounded');
});

test('ContextButton renders an <a> element with the appropriate class.', () => {
  const wrapper = mount(
    <ContextButton type='link' href='https://google.com'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('a.button.context-button');
});

test('ContextButton renders an <button> element of type submit.', () => {
  const wrapper = mount(
    <ContextButton type='submit' >ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button[type="submit"].context-button');
});

test('ContextButton renders an <button> element of type reset.', () => {
  const wrapper = mount(
    <ContextButton type='reset' >ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('button[type="reset"].context-button');
});

test('ContextButton renders an <span> element when its className is with-dropdown.', () => {
  const wrapper = mount(
    <ContextButton className='with-dropdown'>ContextButton</ContextButton>
  );

  expect(wrapper).toContainMatchingElement('span.with-dropdown.context-button');
});