---
title: Dropdown
description: furl's Dropdown component.
---

Dropdowns toggle the display of a list of items.

### Examples

<dropdownexamples></dropdownexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Hyperlink } from 'furl-components';

ReactDOM.render(
  <Dropdown title='Reverse dropdown' reverse>
    <Hyperlink href='#one'>Item 1</Hyperlink>
    <Hyperlink href='#two'>Item 2</Hyperlink>
    <Hyperlink href='#three'>Item 3</Hyperlink>
  </Dropdown>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Dropdown props</caption>
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
      <td colspan="3">dropdown title</td>
      <td>string</td>
      <td class='font-c'>'Show/hide content'</td>
    </tr>
    <tr>
      <td class="font-c">isOpen</td>
      <td colspan="3">dropdown open state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">reverse</td>
      <td colspan="3">dropdown reverse style</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>
