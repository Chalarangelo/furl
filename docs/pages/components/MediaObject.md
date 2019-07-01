---
title: MediaObject
description: furl's Media object component.
---

MediaObjects allow you to accompany textual content using an image.

### Examples

<mediaobjectexamples></mediaobjectexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { MediaObject, Paragraph, Text } from 'furl-components';

ReactDOM.render(
  <div>
    <MediaObject 
      media='profile-joe.jpg' 
      data='Joe Henderson: I have posted this amazing article here. Check it out!'
    />
    <MediaObject media='profile-sophia.jpg' mediaClassName='avatar circle'>
      <Paragraph><Text textStyle='bold'>Sophie Gray</Text><br />Dude, this is awesome. Thanks so much.</Paragraph>
    </MediaObject>
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>MediaObject props</caption>
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
      <td colspan="3">media url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">mediaWidth</td>
      <td colspan="3">media width</td>
      <td>int/string</td>
      <td class='font-c'>'ls-200p'</td>
    </tr>
    <tr>
      <td class="font-c">mediaHeight</td>
      <td colspan="3">media height</td>
      <td>int/string</td>
      <td class='font-c'>'ls-200p'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:12px'>mediaClassName</td>
      <td colspan="3">media class</td>
      <td>int/string</td>
      <td class='font-c'>'ls-200p'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">media object data source</td>
      <td>string/object</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate a media object either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* `data` accepts either a string or an object, which allows you to pass it a React component tree.
* `mediaWidth` and `mediaHeight` accept any valid CSS value, including CSS variables.