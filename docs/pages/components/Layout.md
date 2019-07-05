---
title: Layout
description: furl's Layout component.
---

Layouts create a top-level shell for your application.

### Examples

<layoutexamples></layoutexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Header, Sidebar, Content } from 'furl-components';

ReactDOM.render(
  <Layout 
    sidebar='right' 
    header='top'
    contentSize={[1.0, 1.0, 0.8, 0.85]}
  >
    <Header outline='bottom'>Header</Header>
    <Sidebar outline='left'>Sidebar</Sidebar>
    <Content>Content</Content>
  </Layout>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Layout props</caption>
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
      <td class="font-c">header</td>
      <td colspan="3">layout header position</td>
      <td>string/array(string)</td>
      <td class='font-c'>'top'</td>
    </tr>
    <tr>
      <td class="font-c">sidebar</td>
      <td colspan="3">layout sidebar position</td>
      <td>string/array(string)</td>
      <td class='font-c'>'left'</td>
    </tr>
    <tr>
      <td class="font-c">contentSize</td>
      <td colspan="3">layout content size</td>
      <td>number/array(number)</td>
      <td class='font-c'>[1.0, 1.0, 0.75, 0.8]</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Header props</caption>
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
      <td class="font-c">outline</td>
      <td colspan="3">header outline</td>
      <td>string</td>
      <td class='font-c'>'none'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Sidebar props</caption>
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
      <td class="font-c">outline</td>
      <td colspan="3">sidebar outline</td>
      <td>string</td>
      <td class='font-c'>'none'</td>
    </tr>
  </tbody>
</table>

### Notes

* A `Layout` component only accepts children of the `Header`, `Sidebar` or `Content` component types.
* `Sidebar` will automatically collapse for whatever screen size `contentSize` is `1.0`, providing a menu button to open it up.
* `header`, `sidebar` and `contentSize` can either accept a single value or an array of 4 values, specifiying the different values for each screen size.
* The value(s) of `header` can be either `'top'` or `'bottom'`.
* The value(s) of `sidebar` can be either `'left'` or `'right'`.
* The value(s) of `contentSize` can be any decimcal value between `0.0` and `1.0`.
* A header's `outline` can be one of the following: `'none'`, `'top'` or `'bottom'`.
* A sidebar's `outline` can be one of the following: `'none'`, `'left'` or `'right'`.
