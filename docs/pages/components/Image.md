---
title: Image
description: furl's Image component.
---

Images provide visual stimulation to users and help provide context for the content around them.

### Examples

<imageexamples></imageexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'furl-components';

ReactDOM.render(
  <Image
    src="./goat-image.jpg"
    alt="A happy goat"
    withCaption
    height={400}
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Image props</caption>
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
      <td colspan="3">image source url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">alt</td>
      <td colspan="3">image alternate text</td>
      <td>string</td>
      <td class='font-c'>'An image'</td>
    </tr>
    <tr>
      <td class="font-c">withCaption</td>
      <td colspan="3">render captioned figure</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">width</td>
      <td colspan="3">image with</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">image height</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
  </tbody>
</table>

### Notes

* It is highly recommended you specify a descriptive value for `alt` to make your image accessible to screen-readers. This is why we already provide a default value instead of using an empty string or `undefined`.
* If you provide `withCaption`, the component will render a `<figure>` and a `<figcaption>` accompanying the `<img>` element. The value of `alt` will be used for the `<figcaption>`.
* `width` and `height` accept any valid CSS value, including CSS variables.