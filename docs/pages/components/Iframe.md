---
title: Iframe
description: furl's Iframe component.
---

Iframes allow you to embed external content.

### Examples

<iframeexamples></iframeexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Iframe } from 'furl-components';

ReactDOM.render(
  <Iframe
    width={560}
    height={315}
    src="https://www.youtube.com/embed/dqT-UlYlg1s"
    allowFullScreen
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Iframe props</caption>
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
      <td colspan="3">iframe source url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">alt</td>
      <td colspan="3">iframe alternate text</td>
      <td>string</td>
      <td class='font-c'>'An embed'</td>
    </tr>
    <tr>
      <td class="font-c">withCaption</td>
      <td colspan="3">render captioned figure</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 12px'>allowFullscreen</td>
      <td colspan="3">allow fullscreen mode</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">width</td>
      <td colspan="3">iframe with</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">iframe height</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
  </tbody>
</table>

### Notes

* It is highly recommended you specify a descriptive value for `alt` to make your embedded content accessible to screen-readers. This is why we already provide a default value instead of using an empty string or `undefined`.
* If you provide `withCaption`, the component will render a `<figure>` and a `<figcaption>` accompanying the `<iframe>` element. The value of `alt` will be used for the `<figcaption>`.
* `width` and `height` accept any valid CSS value, including CSS variables.