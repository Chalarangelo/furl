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

test('Button renders an <a> element with the appropriate target and attributes.', () => {
  const wrapper = mount(
    <Button type='link' href='https://google.com' openIn='external'>Button</Button>
  );

  expect(wrapper).toContainMatchingElement('a.button[target="_blank"]');
  expect(wrapper).toContainMatchingElement('a.button[rel="noopener noreferrer"]');
});

test('Button renders an <a> element without a href if it is passed the disabled prop.', () => {
  const wrapperA = mount(
    <Button type='link' href='https://google.com' disabled>Button</Button>
  );
  const wrapperB = mount(
    <Button type='link' href='https://google.com' openIn='external' disabled>Button</Button>
  );

  expect(wrapperA).not.toContainMatchingElement('a[href="https://google.com"]');
  expect(wrapperB).not.toContainMatchingElement('a[href="https://google.com"]');
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

test('Button renders with the given aria-label.', () => {
  const wrapperA = mount(
    <Button aria-label='label'>Button</Button>
  );
  const wrapperB = mount(
    <Button type='link' href='https://google.com' aria-label='label'>Button</Button>
  );
  const wrapperC = mount(
    <Button type='link' href='https://google.com' openIn='external' aria-label='label'>Button</Button>
  );
  const wrapperD = mount(
    <Button type='submit' aria-label='label'>Button</Button>
  );
  const wrapperE = mount(
    <Button type='reset' aria-label='label'>Button</Button>
  );
  const wrapperF = mount(
    <Button className='with-dropdown' aria-label='label'>Button</Button>
  );

  expect(wrapperA).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperB).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperC).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperD).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperE).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperF).toContainMatchingElement('[aria-label="label"]');
});

test('Button renders with an aria-label that uses title as fallback.', () => {
  const wrapperA = mount(
    <Button title='label'>Button</Button>
  );
  const wrapperB = mount(
    <Button type='link' href='https://google.com' title='label'>Button</Button>
  );
  const wrapperC = mount(
    <Button type='link' href='https://google.com' openIn='external' title='label'>Button</Button>
  );
  const wrapperD = mount(
    <Button type='submit' title='label'>Button</Button>
  );
  const wrapperE = mount(
    <Button type='reset' title='label'>Button</Button>
  );
  const wrapperF = mount(
    <Button className='with-dropdown' title='label'>Button</Button>
  );

  expect(wrapperA).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperB).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperC).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperD).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperE).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperF).toContainMatchingElement('[aria-label="label"]');
});

test('Button renders with an aria-label that uses name as fallback.', () => {
  const wrapperA = mount(
    <Button name='label'>Button</Button>
  );
  const wrapperB = mount(
    <Button type='link' href='https://google.com' name='label'>Button</Button>
  );
  const wrapperC = mount(
    <Button type='link' href='https://google.com' openIn='external' name='label'>Button</Button>
  );
  const wrapperD = mount(
    <Button type='submit' name='label'>Button</Button>
  );
  const wrapperE = mount(
    <Button type='reset' name='label'>Button</Button>
  );
  const wrapperF = mount(
    <Button className='with-dropdown' name='label'>Button</Button>
  );

  expect(wrapperA).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperB).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperC).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperD).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperE).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperF).toContainMatchingElement('[aria-label="label"]');
});

test('Button renders with an aria-label that uses id as fallback.', () => {
  const wrapperA = mount(
    <Button id='label'>Button</Button>
  );
  const wrapperB = mount(
    <Button type='link' href='https://google.com' id='label'>Button</Button>
  );
  const wrapperC = mount(
    <Button type='link' href='https://google.com' openIn='external' id='label'>Button</Button>
  );
  const wrapperD = mount(
    <Button type='submit' id='label'>Button</Button>
  );
  const wrapperE = mount(
    <Button type='reset' id='label'>Button</Button>
  );
  const wrapperF = mount(
    <Button className='with-dropdown' id='label'>Button</Button>
  );

  expect(wrapperA).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperB).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperC).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperD).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperE).toContainMatchingElement('[aria-label="label"]');
  expect(wrapperF).toContainMatchingElement('[aria-label="label"]');
});
