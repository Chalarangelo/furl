import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted } from '../src/components';

test('Paragraph renders a <p> element.', () => {
  const wrapper = shallow(
    <Paragraph>Hello</Paragraph>
  );

  expect(wrapper).toContainMatchingElement('p');
});

test('Text renders a <span> element.', () => {
  const wrapper = shallow(
    <Text>Hello</Text>
  );

  expect(wrapper).toContainMatchingElement('span');
});

test('Text renders a <small> element when passed the appropriate prop.', () => {
  const wrapper = shallow(
    <Text textStyle='small'>Hello</Text>
  );

  expect(wrapper).toContainMatchingElement('small');
});

test('Text renders a <strong> element when passed the appropriate prop.', () => {
  const wrapper = shallow(
    <Text textStyle='bold'>Hello</Text>
  );

  expect(wrapper).toContainMatchingElement('strong');
});

test('Text renders a <em> element when passed the appropriate prop.', () => {
  const wrapper = shallow(
    <Text textStyle='italics'>Hello</Text>
  );

  expect(wrapper).toContainMatchingElement('em');
});

test('Quote renders a <blockquote> element.', () => {
  const wrapper = shallow(
    <Quote>Hello</Quote>
  );

  expect(wrapper).toContainMatchingElement('blockquote');
});

test('Preformatted renders a <pre> element.', () => {
  const wrapper = shallow(
    <Preformatted>Hello</Preformatted>
  );

  expect(wrapper).toContainMatchingElement('pre');
});

test('Code renders a <code> element.', () => {
  const wrapper = shallow(
    <Code>Hello</Code>
  );

  expect(wrapper).toContainMatchingElement('code');
});

test('Kbd renders a <kbd> element.', () => {
  const wrapper = shallow(
    <Kbd>Hello</Kbd>
  );

  expect(wrapper).toContainMatchingElement('kbd');
});

test('Title renders a <h1> element by default.', () => {
  const wrapper = shallow(
    <Title>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h1');
});

test('Title renders a <h1> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={1}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h1');
});

test('Title renders a <h2> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={2}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h2');
});

test('Title renders a <h3> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={3}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h3');
});

test('Title renders a <h4> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={4}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h4');
});

test('Title renders a <h5> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={5}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h5');
});

test('Title renders a <h6> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={6}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('h6');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={1} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title1');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={2} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title2');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={3} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title3');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={4} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title4');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={5} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title5');
});

test('Title renders a <span> element given the right prop.', () => {
  const wrapper = shallow(
    <Title level={6} semantic={false}>Hello</Title>
  );

  expect(wrapper).toContainMatchingElement('span.title6');
});
