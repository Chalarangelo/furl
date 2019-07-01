---
title: Icon
description: furl's Icon component.
---

Icons provide visual context for the content they surround.

**Icons are powered by [Feather](https://feathericons.com/).**

### Examples

<iconexamples></iconexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'furl-components';

ReactDOM.render(
  <Icon 
    name='bell'
    width={32}
    height={32}
    stroke='#ff8c69'
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Icon props</caption>
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
      <td class="font-c">name</td>
      <td colspan="3">icon name</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">width</td>
      <td colspan="3">icon width</td>
      <td>int/string</td>
      <td class='font-c'>24</td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">icon height</td>
      <td>int/string</td>
      <td class='font-c'>24</td>
    </tr>
    <tr>
      <td class="font-c">viewBox</td>
      <td colspan="3">icon view box</td>
      <td>string</td>
      <td class='font-c'>'0 0 24 24'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">icon fill color</td>
      <td>string</td>
      <td class='font-c'>'none'</td>
    </tr>
    <tr>
      <td class="font-c">stroke</td>
      <td colspan="3">icon stroke color</td>
      <td>string</td>
      <td class='font-c'>'currentColor'</td>
    </tr>
    <tr>
      <td class="font-c">strokeWidth</td>
      <td colspan="3">icon stroke width</td>
      <td>number</td>
      <td class='font-c'>2</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 12px'>strokeLinecap</td>
      <td colspan="3">icon stroke linecap</td>
      <td>string</td>
      <td class='font-c'>'round'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 12px'>strokeLinejoin</td>
      <td colspan="3">icon stroke likejoin</td>
      <td>string</td>
      <td class='font-c'>'round'</td>
    </tr>
  </tbody>
</table>

### Notes

* You can find a full list of all the available icon `name` values [here](https://feathericons.com/).
* `width` and `height` accept any valid CSS value, including CSS variables.
* `viewBox`, `fill`, `stroke`, `strokeWidth` and `strokeLinecap` accept any valid CSS value for each of these properties.
