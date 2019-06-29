---
title: Progress
description: furl's Progress component.
---

Progress displays the current progress of an operation.

### Examples

<progressexamples></progressexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from 'furl-components';

ReactDOM.render(
  <Progress value={65} max={100} color='success' />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Progress props</caption>
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
      <td colspan="3">progres color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">progres size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">value</td>
      <td colspan="3">progres value</td>
      <td>int</td>
      <td class='font-c'>0</td>
    </tr>
    <tr>
      <td class="font-c">max</td>
      <td colspan="3">progres maximum value</td>
      <td>int</td>
      <td class='font-c'>100</td>
    </tr>
  </tbody>
</table>

### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be either `'normal'` or `'large'`.