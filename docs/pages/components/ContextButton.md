---
title: ContextButton
description: furl's ContextButton component.
---

A Context Button provides a way to interact with your application on a global level.

### Examples

<contextbuttonexamples></contextbuttonexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ContextButton, Icon } from 'furl-components';

ReactDOM.render(
  <ContextButton 
      verticalPosition='bottom' 
      horizontalPosition='right' 
      color='primary'
    >
      <Icon name='plus' />
    </ContextButton>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>ContextButton props</caption>
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
      <td colspan="3">context button color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">context button size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">text</td>
      <td colspan="3">context button text transformaton</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:11px'>verticalPosition</td>
      <td colspan="3">context button vertical position</td>
      <td>string</td>
      <td class='font-c'>'bottom'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:10px'>horizontalPosition</td>
      <td colspan="3">context button horizontal position</td>
      <td>string</td>
      <td class='font-c'>'right'</td>
    </tr>
    <tr>
      <td class="font-c">onClick</td>
      <td colspan="3">context button onclick event></td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `text` can be either `'normal'` or `'uppercase'`.
* `verticalPosition` can be one of the following: `'top'`, `'centerr'` or `'bottom'`.
* `horizontalPosition` can be one of the following: `'left'`, `'center'` or `'right'`.