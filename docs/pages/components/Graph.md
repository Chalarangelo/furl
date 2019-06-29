---
title: Graph
description: furl's Graph component.
---

Graphs provide visual presentation for data.

### Examples

<graphexamples></graphexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Graph } from 'furl-components';

ReactDOM.render(
  <Graph 
    width={300} 
    height={260} 
    type='line' 
    data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} 
    withCaption 
    alt='Line graph'
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Graph props</caption>
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
      <td class="font-c">data</td>
      <td colspan="3">graph data source</td>
      <td>array(number)</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">type</td>
      <td colspan="3">graph type</td>
      <td>string</td>
      <td class='font-c'>'curve'</td>
    </tr>
    <tr>
      <td class="font-c">max</td>
      <td colspan="3">scale maximum value</td>
      <td>string/number</td>
      <td class='font-c'>'auto'</td>
    </tr>
    <tr>
      <td class="font-c">min</td>
      <td colspan="3">scale minimum value</td>
      <td>string/number</td>
      <td class='font-c'>0</td>
    </tr>
    <tr>
      <td class="font-c">displayPoints</td>
      <td colspan="3">display data points</td>
      <td>boolean</td>
      <td class='font-c'>true</td>
    </tr>
    <tr>
      <td class="font-c">alt</td>
      <td colspan="3">graph alternate text</td>
      <td>string</td>
      <td class='font-c'>'A graph'</td>
    </tr>
    <tr>
      <td class="font-c">withCaption</td>
      <td colspan="3">render captioned figure</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">width</td>
      <td colspan="3">graph with</td>
      <td>int/string</td>
      <td class='font-c'>400</td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">graph height</td>
      <td>int/string</td>
      <td class='font-c'>300</td>
    </tr>
  </tbody>
</table>

### Notes

* `data` only accepts an array of numeric values.
* `type` can be one of the following: `'curve'`, `'line'`, `'bar'` or `'pie'`.
* `min` and `max` accept any numeric value as well as `'auto'`.
* `displayDataPoints` only applies to `type` equal to `'curve'` or `'line'` and will display the data points on top of the graph curve or line.
* It is highly recommended you specify a descriptive value for `alt` to make your graph accessible to screen-readers. This is why we already provide a default value instead of using an empty string or `undefined`.
* If you provide `withCaption`, the component will render a `<figure>` and a `<figcaption>` accompanying the `<canvas>` element. The value of `alt` will be used for the `<figcaption>`.
* `width` and `height` accept any valid CSS value, including CSS variables.