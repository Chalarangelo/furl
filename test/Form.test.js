import React from 'react';
import { shall, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Form, FormLegend, FormLabel, TextInput } from '../src/components';

test('Form renders a <form> element.', () => {
  const wrapper = mount(
    <Form>
      <FormLegend>A Form</FormLegend>
      <FormLabel htmlFor='text-in'>Text</FormLabel>
      <TextInput id='text-in' placeholder='Text...' />
    </Form>
  );

  expect(wrapper).toContainMatchingElement('form');
});

test('FormLegend renders a <legend> element.', () => {
  const wrapper = mount(
    <Form>
      <FormLegend>A Form</FormLegend>
      <FormLabel htmlFor='text-in'>Text</FormLabel>
      <TextInput id='text-in' placeholder='Text...' />
    </Form>
  );

  expect(wrapper).toContainMatchingElement('legend');
});

test('FormLabel renders a <label> element.', () => {
  const wrapper = mount(
    <Form>
      <FormLegend>A Form</FormLegend>
      <FormLabel htmlFor='text-in'>Text</FormLabel>
      <TextInput id='text-in' placeholder='Text...' />
    </Form>
  );

  expect(wrapper).toContainMatchingElement('label');
});

test('Form renders a <form> element with the "light" class.', () => {
  const wrapper = shallow(
    <Form color='light' />
  );

  expect(wrapper).toContainMatchingElement('form.light');
});

test('Form renders a <form> element with the "large" class.', () => {
  const wrapper = shallow(
    <Form size='large' />
  );

  expect(wrapper).toContainMatchingElement('form.large');
});

test('Form renders a <form> element with the "solid" class.', () => {
  const wrapper = shallow(
    <Form fill='solid' />
  );

  expect(wrapper).toContainMatchingElement('form.solid');
});

test('Form renders a <form> element with the _blank target.', () => {
  const wrapper = mount(
    <Form target='blank' />
  );

  expect(wrapper).toContainMatchingElement('form[target="blank"]');
});