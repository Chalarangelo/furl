import React from 'react';
import { shall, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  CreditCardInput,
  PhoneInput,
  CurrencyInput,
  TimeInput,
  DateInput,
  ColorInput
} from '../src/components';

test('CreditCardInput renders an <input> element.', () => {
  const wrapper = mount(
    <CreditCardInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('PhoneInput renders an <input> element.', () => {
  const wrapper = mount(
    <PhoneInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('CurrencyInput renders an <input> element.', () => {
  const wrapper = mount(
    <CurrencyInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('TimeInput renders an <input> element.', () => {
  const wrapper = mount(
    <TimeInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('DateInput renders an <input> element.', () => {
  const wrapper = mount(
    <DateInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('ColorInput renders an <input> element.', () => {
  const wrapper = mount(
    <ColorInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="color"]');
});