---
title: Table
description: furl's Table component.
---

Tables display data in a tabular format.

### Examples

<tableexamples></tableexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption } from 'furl-components';

ReactDOM.render(
  <div>
    <Table tableStyle='striped'>
      <TableCaption>People</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableCaption>Horizontal table</TableCaption>
      <TableBody>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Adam</TableCell>
          <TableCell>Jane</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Surname</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Doe</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Age</TableCell>
          <TableCell>27</TableCell>
          <TableCell>32</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table
      data={[
        { name: 'John', surname: 'Smith', age: 42 },
        { name: 'Adam', surname: 'Smith', gender: 'male' }
      ]}
      propertyNames={['name', 'surname', 'age']}
      title='People'
      sortable
    />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Table props</caption>
  <thead>
    <tr>
      <th>Property</th>
      <th colspan="3">Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-c">tableStyle</td>
      <td colspan="3">table style</td>
      <td>string</td>
      <td class='font-c'>'none'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">table data source</td>
      <td>array(object)</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 13px'>propertyNames</td>
      <td colspan="3">table dat source selected property names</td>
      <td>array(string)</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">sortable</td>
      <td colspan="3">table sortable property</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>TableCell props</caption>
  <thead>
    <tr>
      <th>Property</th>
      <th colspan="3">Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-c">heading</td>
      <td colspan="3">table cell heading style</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">colSpan</td>
      <td colspan="3">table cell column span</td>
      <td>int</td>
      <td class='font-c'>1</td>
    </tr>
    <tr>
      <td class="font-c">rowSpan</td>
      <td colspan="3">table cell row span</td>
      <td>int</td>
      <td class='font-c'>1</td>
    </tr>
  </tbody>
</table>


### Notes

* You can populate a table either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* A `Table` only accepts children of the `TableCaption`, `TableHead` or `TableBody` component types.
* `TableBody` and `TableHead` components only accept children of the `TableCell` component type.
* `data` only accepts an array of objects.
* `propertyNames` and `sortable` only apply if the table is populated using `data`.
* `propertyNames` only accepts an array of strings, corresponding to keys of the objects in `data`.
* If `propertyNames` is not specified, the component will automatically pick all shared keys of the objects in `data`.
* `sortable` determines if the rendered table will have controls for sorting its contents.
* `tableStyle` can be one of the following: `'none'`, `'bordered'` or `'striped'`.