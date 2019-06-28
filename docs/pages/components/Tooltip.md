---
title: Tooltip
description: furl's Tooltip component.
---

Tooltips provide additional information when hovering over content.

### Examples

<tooltipexamples></tooltipexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip, Paragraph } from 'furl-components';

ReactDOM.render(
  <Paragraph>
    A cappuccino is an <Tooltip content='A type of coffee.' position='right'>espresso</Tooltip>-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam).
  </Paragraph>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Component props</caption>
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
      <td class="font-c">content</td>
      <td colspan="3">tooltip content</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">position</td>
      <td colspan="3">tooltip position</td>
      <td>string</td>
      <td class='font-c'>'top'</td>
    </tr>
  </tbody>
</table>

### Notes

* `position` can be one of the following: `'top'`, `'bottom'`, `'left'` or `'right'`.