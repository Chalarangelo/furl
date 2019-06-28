---
title: Alert
description: furl's Alert component.
---

Alerts draw the attention of users to important information.

### Examples

<alertexamples></alertexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'furl-components';

ReactDOM.render(
    <Alert color='primary' size='large' shape='rounded' fill='solid'>
      This is an alert.
    </Alert>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Alert props</caption>
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
      <td class="font-c">color</td>
      <td colspan="3">alert color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">alert size</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">fill style</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">alert shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
  </tbody>
</table>


### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `fill` can be one of the following: `'flat'`, `'gradient'` or `'solid'`.
* `shape` can be either `'normal'` or `'rounded'`.
