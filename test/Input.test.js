import React from 'react';
import { shall, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  TextInput, 
  EmailInput,
  UrlInput,
  PasswordInput,
  NumberInput,
  SelectInput,
  ComboboxInput,
  Option,
  FileInput,
  RatingInput,
  SliderInput
} from '../src/components';

test('TextInput renders an <input> element.', () => {
  const wrapper = mount(
    <TextInput />
  );

  expect(wrapper).toContainMatchingElement('input');
});

test('TextInput renders an <input> element with the small class.', () => {
  const wrapper = mount(
    <TextInput size='small'/>
  );

  expect(wrapper).toContainMatchingElement('input.small');
});

test('TextInput renders an <input> element with the rounded class.', () => {
  const wrapper = mount(
    <TextInput shape='rounded'/>
  );

  expect(wrapper).toContainMatchingElement('input.rounded');
});

test('TextInput renders a <textarea> element when passed the mutliline prop.', () => {
  const wrapper = mount(
    <TextInput multiline />
  );

  expect(wrapper).toContainMatchingElement('textarea');
});

test('EmailInput renders an <input> element of email type.', () => {
  const wrapper = mount(
    <EmailInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="email"]');
});

test('UrlInput renders an <input> element of url type.', () => {
  const wrapper = mount(
    <UrlInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="url"]');
});

test('PasswordInput renders an <input> element of password type.', () => {
  const wrapper = mount(
    <PasswordInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="password"]');
});

test('PasswordInput renders an <input> element that does not reveal its contents when given the disabled prop.', () => {
  const wrapper = mount(
    <PasswordInput disabled withRevealer/>
  );

  wrapper.find('button').simulate('click');
  expect(wrapper).toContainMatchingElement('input[type="password"]');

});

test('NumberInput renders an <input> element of number type.', () => {
  const wrapper = mount(
    <NumberInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="number"]');
});

test('SelectInput renders a <select> element.', () => {
  const wrapper = mount(
    <SelectInput placeholder='0'>
      <Option>a</Option>
      <Option selected>b</Option>
      <Option>c</Option>
    </SelectInput>
  );

  expect(wrapper).toContainMatchingElement('select');
  expect(wrapper).toContainMatchingElements(3,'option');
});

test('SelectInput renders a multiple <select> element.', () => {
  const wrapper = mount(
    <SelectInput multiple placeholder='0'>
      <Option>a</Option>
      <Option selected>b</Option>
      <Option>c</Option>
    </SelectInput>
  );

  expect(wrapper).toContainMatchingElement('select[multiple]');
  expect(wrapper).toContainMatchingElements(3, 'option');
});

test('ComboboxInput renders a <input> element and a <datalist> element.', () => {
  const wrapper = mount(
    <ComboboxInput>
      <Option>Chocolate</Option>
      <Option>Coconut</Option>
      <Option selected>Mint</Option>
      <Option>Strawberry</Option>
      <Option>Vanilla</Option>
    </ComboboxInput>
  );

  expect(wrapper).toContainMatchingElement('input');
  expect(wrapper).toContainMatchingElement('datalist');
  expect(wrapper).toContainMatchingElements(5, 'datalist option');
});

test('FileInput renders an <input> element of file type.', () => {
  const wrapper = mount(
    <FileInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="file"]');
});

test('RatingInput renders an <input> element of number type.', () => {
  const wrapper = mount(
    <RatingInput onChange={() => {}}/>
  );

  expect(wrapper).toContainMatchingElement('input[type="number"]');
});

test('SliderInput renders an <input> element of range type.', () => {
  const wrapper = mount(
    <SliderInput />
  );

  expect(wrapper).toContainMatchingElement('input[type="range"]');
});