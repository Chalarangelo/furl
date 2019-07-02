---
title: ButtonGroup
description: furl's ButtonGroup component.
---

Button groups provide a way to group interactions.

### Examples

<buttongroupexamples></buttongroupexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, Button } from 'furl-components';

ReactDOM.render(
  <div>
    <ButtonGroup 
      color='primary' 
      fill='solid'
      size='large'
      text='uppercase'
    >
      <Button>A</Button>
      <Button>B</Button>
      <Button>C</Button>
      <Button>D</Button>
    </ButtonGroup>
    <ButtonGroup 
      color='success' 
      fill='grafient' 
      shape='rounded'
      data={['A', 'B', 'C', 'D']} 
    />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>ButtonGroup props</caption>
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
      <td colspan="3">button group color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">button group size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">button group fill style</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">button group shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">text</td>
      <td colspan="3">button group text transformation</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">button group data source</td>
      <td>array(object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* You can populate a button group either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* A `ButtonGroup` only accepts children of the `Button` component type.
* `data` only accepts an array of string orobject values. Objects in the `data` array must contain a `content` value and any other props you might want to pass. `content` can either be a string or an object, allowing you to pass React component trees.
* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be one of the following: `'small'`, `'normal'` or `'large'` and will override the `size` property of any of the component's children.
* `fill` can be one of the following: `'flat'`, `'solid'`, `'light'`, `'gradient'`, `'outline'`, `'ghost'` or `'link'` and will override the `fill` property of any of the component's children.
* `shape` can be either `'normal'` or `'rounded'` and will override the `shape` property of any of the component's children.
* `text` can be either `'normal'` or `'uppercase'` and will override the `text` property of any of the component's children.
