---
title: Popover
description: furl's Popover component.
---

Popovers provide additional information when clicking on content.

### Examples

<popoverexamples></popoverexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, Paragraph } from 'furl-components';

ReactDOM.render(
  <Paragraph>
    A cappuccino is an <Popover content='A type of coffee.' position='right'>espresso</Popover>-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam (microfoam).
  </Paragraph>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Popover props</caption>
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
      <td colspan="3">popover content</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">position</td>
      <td colspan="3">popover position</td>
      <td>string</td>
      <td class='font-c'>'top'</td>
    </tr>
  </tbody>
</table>

### Notes

* `position` can be one of the following: `'top'`, `'bottom'`, `'left'` or `'right'`.