---
title: Search
description: furl's Search component.
---

Search helps users find the content they are looking for.

### Examples

<searchexamples></searchexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Paragraph, Title } from 'furl-components';

ReactDOM.render(
  <Search placeholder='Search...' withIcon size='large'>
    <Title level={4}>Search Results</Title>
    <Paragraph>Found 6 results...</Paragraph>
  </Search>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Search props</caption>
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
      <td class="font-c">size</td>
      <td colspan="3">search size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">withIcon</td>
      <td colspan="3">render with icon</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">disabled</td>
      <td colspan="3">search disabled state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">placeholder</td>
      <td colspan="3">search placeholder text</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">name</td>
      <td colspan="3">search name</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">onChange</td>
      <td colspan="3">search onchange event></td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
