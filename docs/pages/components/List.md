---
title: List
description: furl's List component.
---

Lists allow you to display short content in a bullet-point or numbered format.

### Examples

<listexamples></listexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem } from 'furl-components';

ReactDOM.render(
  <div>
    <List listStyle='disc'>
      <ListItem>Apples</ListItem>
      <ListItem>Oranges</ListItem>
      <ListItem>Strawberries</ListItem>
    </List>
    <List 
      ordered 
      listStyle='decimal'
      data={[ 'Wake up', 'Eat breakfast', 'Go to work' ]}
    />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>List props</caption>
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
      <td class="font-c">ordered</td>
      <td colspan="3">render ordered list</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">listStyle</td>
      <td colspan="3">list style</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">list data source</td>
      <td>array(string)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate a list either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* A `List` only accepts children of the `ListItem` component type.
* `data` only accepts an array of string values.
* `ordered` determines if the rendered list is an unordered list (`<ul>`) or an ordered list (`<ol>`).
* `listStyle`'s allowed values depend on the value of `ordered`. 
* `listStyle` can be one of the following, when `ordered` is `false`: `'circle'`, `'disc'`, `'square'`, `'triangle'`, `'checkmark'`, `'xmark'` or emtpy/undefined.
* `listStyle` can be one of the following, when `ordered` is `true`: `'decimal'`, `'decimal-leading-zero'`, `'lower-latin'`, `'lower-roman'`, `'upper-latin'`, `'upper-roman'` or emtpy/undefined.