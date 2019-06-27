---
title: Audio
description: furl's Audio component.
---

Audio provides ambiance for your users.

### Examples

<audioexamples></audioexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Audio } from 'furl-components';

ReactDOM.render(
  <Audio
    src="./raindrops.mp3"
    alt="Rainy sounds"
    withCaption
    volume={0.5}
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Audio props</caption>
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
      <td colspan="3">audio source url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">alt</td>
      <td colspan="3">audio alternate text</td>
      <td>string</td>
      <td class='font-c'>'An audio clip'</td>
    </tr>
    <tr>
      <td class="font-c">withCaption</td>
      <td colspan="3">render captioned figure</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">volume</td>
      <td colspan="3">audio volume</td>
      <td>number</td>
      <td class='font-c'>1.0</td>
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
      <td colspan="3">loop audio</td>
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

* It is highly recommended you specify a descriptive value for `alt` to make your audio accessible to screen-readers. This is why we already provide a default value instead of using an empty string or `undefined`.
* If you provide `withCaption`, the component will render a `<figure>` and a `<figcaption>` accompanying the `<audio>` element. The value of `alt` will be used for the `<figcaption>`.
* For more information on the `<audio>` element itself, visit <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">MDN Web Docs</a>.
