import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PaginationItem, Pagination, Button } from '../src/components';

test('Pagination renders a <div> element with the appropriate class and the given children.', () => {
  const wrapper = mount(
    <Pagination>
      <Button>Previous</Button>
      <PaginationItem>1 of 6</PaginationItem>
      <Button>Next</Button>
    </Pagination>
  );

  expect(wrapper).toContainMatchingElement('div.pagination');
  expect(wrapper).toContainMatchingElements(2, 'button');
  expect(wrapper).toContainMatchingElement('span.pagination-item');
});

test('Pagination renders a <div> element with the appropriate class and the given children, passing down the appropriate modifiers.', () => {
  const wrapper = mount(
    <Pagination size='large' shape='rounded'>
      <Button>Previous</Button>
      <PaginationItem>1 of 6</PaginationItem>
      <Button>Next</Button>
    </Pagination>
  );

  expect(wrapper).toContainMatchingElement('div.pagination.large.rounded');
  expect(wrapper).toContainMatchingElements(2, 'button.large.rounded');
  expect(wrapper).toContainMatchingElement('span.pagination-item.large.rounded');
});
