---
title: Badge
description: furl's Badge component.
---

Badges help you present tags, categories or other short-form content.

### Examples

<badgeexamples></badgeexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Badge } from 'furl-components';

ReactDOM.render(
  <Badge color='secondary' size='large' shape='rounded' fill='outline'>
    Rockstar
  </Badge>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Badge props</caption>
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
      <td colspan="3">badge color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">badge size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">fill style</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">badge shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">text</td>
      <td colspan="3">badge text transformaton</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
  </tbody>
</table>


### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be either `'normal'` or `'large'`.
* `fill` can be one of the following: `'flat'`, `'outline'` or `'light'`.
* `shape` can be either `'normal'` or `'rounded'`.
* `text` can be either `'normal'` or `'uppercase'`.
