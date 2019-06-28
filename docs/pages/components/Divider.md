---
title: Divider
description: furl's Divider component.
---

Dividers separate different content.

### Examples

<dividerexamples></dividerexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Divider, Paragraph } from 'furl-components';

ReactDOM.render(
  <>
    <Paragraph>This is some content <Divider vertical /> This is some other content</Paragraph>
    <Divider />
    <Paragraph>This is some entirely different content.</Paragraph>
  </>
  <Something></Something>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Divider props</caption>
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
      <td class="font-c">vertical</td>
      <td colspan="3">divider alignment</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>