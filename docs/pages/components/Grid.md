---
title: Grid
description: furl's Grid component.
---

Grids display content in an organized fashion.

### Examples

<gridexamples></gridexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {  Grid, Row, Column as Col } from 'furl-components';

ReactDOM.render(
  <Grid>
    <Row>
      <Col size={3}><div>3</div></Col>
      <Col size={7}><div>7</div></Col>
      <Col size={2}><div>2</div></Col>
    </Row>
    <Row>
      <Col><div>fluid</div></Col>
      <Col><div>fluid</div></Col>
      <Col><div>fluid</div></Col>
      <Col><div>fluid</div></Col>
      <Col><div>fluid</div></Col>
    </Row>
    <Row>
      <Col size={[1,3,4,'fluid']}><div>left</div></Col>
      <Col size={[10,7,6,'fluid']}><div>center</div></Col>
      <Col size={[1,2,2,'fluid']}><div>right</div></Col>
    </Row>
    <Row>
      <Col size={0.23}>23%</Col>
      <Col size={0.17}>17%</Col>
      <Col size={0.11}>11%</Col>
      <Col size={0.49}>49%</Col>
    </Row>
  </Grid>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Grid props</caption>
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
      <td class="font-c">justify</td>
      <td colspan="3">grid main axis item alignment</td>
      <td>string</td>
      <td class='font-c'>'start'</td>
    </tr>
    <tr>
      <td class="font-c">align</td>
      <td colspan="3">grid cross axis item alignment</td>
      <td>string</td>
      <td class='font-c'>'start'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Column props</caption>
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
      <td class="font-c">size</td>
      <td colspan="3">column width</td>
      <td>string/number/array(string/number)</td>
      <td class='font-c'>'fluid'</td>
    </tr>
  </tbody>
</table>

### Notes

* A `Grid` only accepts children of the `Row` component type.
* A `Row` only accepts children of the `Column` component type.
* `justify` can be one of the following: `'start'`, `'end'`, `'center'`, `'between'`, `'around'` or `'evenly'`.
* `align` can be one of the following: `'start'`, `'end'`, `'center'`, `'stretch'` or `'baseline'`.
* A column's `size` can either be a single value or an array of 4 values. 
* The value(s) of `size` can be either a string (e.g `'fluid'`, `'200px'`, `'var(--ls-200p)'`, `'calc(100vw - 20px)'` or any other valid CSS value), an integer between `1` and `12` (inclusive) denoting the total number of the 12 logical columns the column should occupy or a a decimal value between `0.0` and `1.0` (inclusive) denoting a percentage of the row's width.