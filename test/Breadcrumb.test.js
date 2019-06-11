import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Breadcrumb, BreadcrumbItem } from '../src/components';

test('Breadcrumb renders a <nav> element of the appropriate class.', () => {
  const wrapper = mount(
    <Breadcrumb>
    </Breadcrumb>
  );

  expect(wrapper).toContainMatchingElement('nav.breadcrumb');
});

test('Breadcrumb renders a <div> element with the given children.', () => {
  const wrapper = mount(
    <Breadcrumb>
      <BreadcrumbItem>A</BreadcrumbItem>
      <BreadcrumbItem>B</BreadcrumbItem>
    </Breadcrumb>
  );

  expect(wrapper).toContainMatchingElements(2, 'span.breadcrumb-item');
  expect(wrapper).toContainMatchingElement('span.breadcrumb-separator');
});