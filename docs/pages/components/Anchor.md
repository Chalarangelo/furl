---
title: Anchor
description: furl's Anchor component.
---

Anchors allow you to quickly create anchor hyperlinks on a page.

### Examples

<anchorexamples></anchorexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Title, Anchor } from 'furl-components';

ReactDOM.render(
  <Title id="hello" level={3}>Hello<Anchor href='#hello'/></Title>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Anchor props</caption>
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
      <td class="font-c">href</td>
      <td colspan="3">anchor target</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>