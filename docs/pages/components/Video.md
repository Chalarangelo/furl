---
title: Video
description: furl's Video component.
---

Videos provide captivating multimedia content for your users.

### Examples

<videoexamples></videoexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'furl-components';

ReactDOM.render(
  <Image
    src="./wasp-movie.mp4"
    alt="Wasp Movie HD"
    withCaption
    height={400}
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Video props</caption>
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
      <td colspan="3">video source url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">alt</td>
      <td colspan="3">video alternate text</td>
      <td>string</td>
      <td class='font-c'>'A video'</td>
    </tr>
    <tr>
      <td class="font-c">withCaption</td>
      <td colspan="3">render captioned figure</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">width</td>
      <td colspan="3">video with</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">video height</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
    <tr>
      <td class="font-c">autoplay</td>
      <td colspan="3">start automatically</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">controls</td>
      <td colspan="3">display controls</td>
      <td>boolean</td>
      <td class='font-c'>true</td>
    </tr>
    <tr>
      <td class="font-c">loop</td>
      <td colspan="3">loop video</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">muted</td>
      <td colspan="3">mute audio</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

### Notes

* It is highly recommended you specify a descriptive value for `alt` to make your video accessible to screen-readers. This is why we already provide a default value instead of using an empty string or `undefined`.
* If you provide `withCaption`, the component will render a `<figure>` and a `<figcaption>` accompanying the `<video>` element. The value of `alt` will be used for the `<figcaption>`.
* `width` and `height` accept any valid CSS value, including CSS variables.
* For more information on the `<video>` element itself, visit <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank">MDN Web Docs</a>.
