---
title: Hyperlink
description: furl's Hyperlink component.
---

Hyperlinks allow users to navigate to different URLs, both internal and external.

### Examples

<hyperlinkexamples></hyperlinkexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Paragraph, Hyperlink } from 'furl-components';

ReactDOM.render(
  <Paragraph>
    <Hyperlink href='https://google.com'>Opens in same tab.</Hyperlink>
    <Hyperlink href='https://google.com' openIn='_blank'>Opens in new tab.</Hyperlink>
    <Hyperlink href='https://google.com' openIn='external'>Opens in new tab with noopener noreferrer.</Hyperlink>
  </Paragraph>, 
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
      <td colspan="3">hyperlink url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">openIn</td>
      <td colspan="3">target of the anchor<br>possible values: <span class="font-c">'self', 'blank', 'external'</span></td>
      <td>string</td>
      <td class='font-c'>'self'</td>
    </tr>
  </tbody>
</table>