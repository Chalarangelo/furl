---
title: Collapse
description: furl's Collapse component.
---

Collapse allows users to show or hide a piece of content.

### Examples

<collapseexamples></collapseexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse } from 'furl-components';

ReactDOM.render(
  <Collapse fill='flat' title='Terms of use'>
      These are our and conditions for use of platform.
    </Collapse>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Collapse props</caption>
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
      <td class="font-c">title</td>
      <td colspan="3">collapse title</td>
      <td>string</td>
      <td class='font-c'>'Show/hide content'</td>
    </tr>
    <tr>
      <td class="font-c">isOpen</td>
      <td colspan="3">collapse open state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">fill style</td>
      <td>string</td>
      <td class='font-c'>'solid'</td>
    </tr>
    <tr>
      <td class="font-c">onClick</td>
      <td colspan="3">collapse onclick event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* `fill` can be either `'flat'` or `'solid'`.