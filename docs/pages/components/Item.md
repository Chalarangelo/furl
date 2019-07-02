---
title: Item
description: furl's Item component.
---

Items present post-like content in a familiar format.

**Items are powered by [react-timy](https://www.npmjs.com/package/react-timy).**

### Examples

<itemexamples></itemexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Item } from 'furl-components';

ReactDOM.render(
  <Item
      author='Joe Henderson'
      date={new Date('11/03/2019')}
      media='profile-joe.jpg'
      data='I have posted this amazing article here. Check it out!'
    />
    <Item
      author='Sophie Gray'
      date={new Date('12/03/2019')}
      media='profile-sophia.jpg'
      data='Dude, this is awesome. Thanks so much.'
    />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Item props</caption>
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
      <td class="font-c">media</td>
      <td colspan="3">item media url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">item content</td>
      <td>string/object</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">date</td>
      <td colspan="3">item creation date</td>
      <td>Date</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">author</td>
      <td colspan="3">item author</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate an item either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* `data` accepts either a string or an object, which allows you to pass it a React component tree.
* If `date` is not provided, the component will use the current date and time.