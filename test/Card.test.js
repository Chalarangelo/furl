import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card, CardSection, Paragraph } from '../src/components';

test('Card renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Card>
    </Card>
  );

  expect(wrapper).toContainMatchingElement('div.card');
});

test('CardSection renders a <div> element of the appropriate class.', () => {
  const wrapper = mount(
    <Card>
      <CardSection />
    </Card>
  );

  expect(wrapper).toContainMatchingElement('div.card-section');
});

test('CardSection renders a <div> element of the appropriate class when passed a media prop.', () => {
  const wrapper = mount(
    <Card>
      <CardSection media="." />
    </Card>
  );

  expect(wrapper).toContainMatchingElement('div.card-media-section');
});

test('Card automatically converts valid elements to CardSection.', () => {
  const wrapper = mount(
    <Card>
      <Paragraph>Test</Paragraph>
    </Card>
  );

  expect(wrapper).toContainMatchingElement('p.card-section');
});

test('Card automatically converts image elements to media CardSection.', () => {
  const wrapper = mount(
    <Card>
      <Image src='.' />
    </Card>
  );

  expect(wrapper).toContainMatchingElement('div.card-media-section');
});

test('Card automatically converts strings to CardSection.', () => {
  const wrapper = mount(
    <Card>
      Test
    </Card>
  );

  expect(wrapper).toContainMatchingElement('p.card-section');
});