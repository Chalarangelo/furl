---
title: Loader
description: furl's Loader component.
---

Loaders inform users that something is loading.

### Examples

<loaderexamples></loaderexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from 'furl-components';

ReactDOM.render(
  <Loader color='secondary' size='large' />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Loader props</caption>
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
      <td colspan="3">loader color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">loader size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
  </tbody>
</table>

### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be either `'normal'` or `'large'`.