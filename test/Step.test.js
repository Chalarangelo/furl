import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Step, StepItem } from '../src/components';

test('Step renders a <nav> element of the appropriate class.', () => {
  const wrapper = mount(
    <Step>
      <StepItem>A</StepItem>
      <StepItem>B</StepItem>
    </Step>
  );

  expect(wrapper).toContainMatchingElement('nav.step');
});

test('Step renders a <nav> element with the given children.', () => {
  const wrapper = mount(
    <Step>
      <StepItem>A</StepItem>
      <StepItem>B</StepItem>
    </Step>
  );

  expect(wrapper).toContainMatchingElements(2, 'span.step-item');
});