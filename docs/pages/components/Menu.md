---
title: Menu
description: furl's Menu component.
---

Menus provide a way for users to navigate your application.

### Examples

<menuexamples></menuexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, MenuItem } from 'furl-components';

ReactDOM.render(
  <div>
    <Menu type='horizontal'>
      <MenuItem href='#item1'>Item 1</MenuItem>
      <MenuItem selected href='#item2'>Item 2</MenuItem>
      <MenuItem href='#item3'>Item 3</MenuItem>
      <MenuItem>
        <Dropdown title='Item 4 (Dropdown)'>
          <MenuItem>Item 4.1</MenuItem>
          <MenuItem>Item 4.2</MenuItem>
          <MenuItem>Item 4.3</MenuItem>
        </Dropdown>
      </MenuItem>
    </Menu>
    <Menu type='vertical' highlight='right' data={[
      'Item 1', { selected: true, title: 'Item 2' }, 'Item 3', 'Item 4'
    ]} />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Menu props</caption>
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
      <td class="font-c">type</td>
      <td colspan="3">menu orientation</td>
      <td>string</td>
      <td class='font-c'>'horizontal'</td>
    </tr>
    <tr>
      <td class="font-c">highlight</td>
      <td colspan="3">menu highlight position</td>
      <td>string</td>
      <td class='font-c'>'top'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>MenuItem props</caption>
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
      <td colspan="3">menu item hyperlink url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">openIn</td>
      <td colspan="3">target of the menu item></td>
      <td>string</td>
      <td class='font-c'>'self'</td>
    </tr>
    <tr>
      <td class="font-c">selected</td>
      <td colspan="3">menu item selected style</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">onClick</td>
      <td colspan="3">menu item onclick event></td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate a menu either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* A `Menu` only accepts children of the `MenuItem` component type.
* `data` only accepts an array of values, each of which can either be a string or an object. Objects in the `data` array must contain a `title`, optionally a `selected` value and any other props that you want to pass.
* A `MenuItem` can contain a `Dropdown` as its single child. `Dropdown` is integrated with `Menu` to provide a consistent user experience.
* `type` can be either `'horizontal'` or `'vertical'`.
* `highlight` can be either `'top'` or `'bottom'`, when `type` is `'horizontal'`.
* `highlight` can be either `'left'` or `'right'`, when `type` is `'vertical'`.
* `openIn` accepts the following values: `'self'`, `'blank'` or `'external'`.
