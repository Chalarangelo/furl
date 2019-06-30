---
title: Switch
description: furl's Switch component.
---

Switches provide a simple visual toggler.

### Examples

<switchexamples></switchexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'furl-components';

ReactDOM.render(
  <Switch color='primary'>Turn lights on/off</Switch>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Switch props</caption>
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
      <td colspan="3">switch color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">disabled</td>
      <td colspan="3">switch disabled state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">checked</td>
      <td colspan="3">switch checked state</td>
      <td>boolean</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">name</td>
      <td colspan="3">switch name</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">onChange</td>
      <td colspan="3">switch onchange event></td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).