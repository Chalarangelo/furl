---
title: Breadcrumbs
description: furl's Breadcrumbs component.
---

Breadcrumbs create hierearchical representation and navigation.

### Examples

<breadcrumbexamples></breadcrumbexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumbs, Breadcrumb, Hyperlink } from 'furl-components';

ReactDOM.render(
  <div>
    <Breadcrumbs separator='>'>
      <Breadcrumb><Hyperlink href='/my-files'>My files</Hyperlink></Breadcrumb>
      <Breadcrumb>My documents</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs data={[
      { href: '#', title: 'My files' },
      'My documents'
    ]} />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Breadcrumbs props</caption>
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
      <td class="font-c">separator</td>
      <td colspan="3">breadcrumbs separator style</td>
      <td>string</td>
      <td class='font-c'>'/'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">breadcrumbs data source</td>
      <td>array(string/object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate breadcrumbs either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* `Breadcrumbs` only accepts children of the `Breadcrumb` component type.
* `data` only accepts an array of values, each of which can either be a string or an object. Objects in the `data` array must contain a `title`, optionally a `href` value and any other props that you want to pass.
