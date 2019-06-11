import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption, Button } from '../src/components';

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

test('Table does not render direct children other than Table*.', () => {
  const wrapper = mount(
    <Table>
      <TableHead></TableHead>
      <Button></Button>
    </Table>
  );

  expect(wrapper).not.toContainMatchingElement('button');
});

test('TableHead renders a <thead> element.', () => {
  const wrapper = shallow(
    <TableHead>
    </TableHead>
  );

  expect(wrapper).toContainMatchingElement('thead');
});

test('TableHead does not render direct children other than TableRows.', () => {
  const wrapper = mount(
    <TableHead>
      <TableRow></TableRow>
      <Button></Button>
    </TableHead>
  );

  expect(wrapper).not.toContainMatchingElement('button');
});

test('TableBody renders a <tbody> element.', () => {
  const wrapper = shallow(
    <TableBody>
    </TableBody>
  );

  expect(wrapper).toContainMatchingElement('tbody');
});

test('TableBody does not render direct children other than TableRows.', () => {
  const wrapper = mount(
    <TableBody>
      <TableRow></TableRow>
      <Button></Button>
    </TableBody>
  );

  expect(wrapper).not.toContainMatchingElement('button');
});

test('TableRow renders a <tr> element.', () => {
  const wrapper = shallow(
    <TableRow>
    </TableRow>
  );

  expect(wrapper).toContainMatchingElement('tr');
});

test('TableRow does not render direct children other than TableCells.', () => {
  const wrapper = mount(
    <TableRow>
      <TableCell></TableCell>
      <Button></Button>
    </TableRow>
  );

  expect(wrapper).not.toContainMatchingElement('button');
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