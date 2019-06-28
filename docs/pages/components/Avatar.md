---
title: Avatar
description: furl's Avatar component.
---

Avatars display a user's profile picture.

### Examples

<avatarexamples></avatarexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar } from 'furl-components';

ReactDOM.render(
  <Avatar src='user.src' shape='rounded' size='small' />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Avatar props</caption>
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
      <td class="font-c">src</td>
      <td colspan="3">avatar source url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">avatar size</td>
      <td>string</td>
      <td class='font-c'>'medium'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">avatar shape</td>
      <td>string</td>
      <td class='font-c'>'circle'</td>
    </tr>
  </tbody>
</table>


### Notes

* `size` can be one of the following: `'extra-small'`, `'small'`, `'medium'`, `'large'` or `'extra-large'`.
* `shape` can be one of the following: `'circle'`, `'rounded'` or  `'square'`.