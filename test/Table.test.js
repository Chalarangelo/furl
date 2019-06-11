import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption } from '../src/components';

test('Table renders a <table> element.', () => {
  const wrapper = shallow(
    <Table>
    </Table>
  );

  expect(wrapper).toContainMatchingElement('table');
});

test('Table renders a <table> element with the appropriate modifier.', () => {
  const wrapper = shallow(
    <Table tableStyle='bordered'>
    </Table>
  );

  expect(wrapper).toContainMatchingElement('table.bordered');
});

test('TableHead renders a <thead> element.', () => {
  const wrapper = shallow(
    <TableHead>
    </TableHead>
  );

  expect(wrapper).toContainMatchingElement('thead');
});

test('TableBody renders a <tbody> element.', () => {
  const wrapper = shallow(
    <TableBody>
    </TableBody>
  );

  expect(wrapper).toContainMatchingElement('tbody');
});

test('TableRow renders a <tr> element.', () => {
  const wrapper = shallow(
    <TableRow>
    </TableRow>
  );

  expect(wrapper).toContainMatchingElement('tr');
});

test('TableCaption renders a <caption> element.', () => {
  const wrapper = shallow(
    <TableCaption>
    </TableCaption>
  );

  expect(wrapper).toContainMatchingElement('caption');
});

test('TableCell renders a <td> element.', () => {
  const wrapper = shallow(
    <TableCell>
    </TableCell>
  );

  expect(wrapper).toContainMatchingElement('td');
});

test('TableCell renders a <th> element when given the heading prop.', () => {
  const wrapper = shallow(
    <TableCell heading>
    </TableCell>
  );

  expect(wrapper).toContainMatchingElement('th');
});