---
title: Button
description: furl's Button component.
---

Buttons allow users to interact with your application.

### Examples

<buttonexamples></buttonexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'furl-components';

ReactDOM.render(
  <div>
    <Button 
      color='primary' 
      size='large'
      fill='solid'
      text='uppercase'
      onClick={() => console.log('Hello!')}
    >
      Hello
    </Button>
    <Button
      type='link'
      fill='link'
      shape='rounded'
      href='https://www.google.com/'
      openIn='external'
    >
      Goodbye
    </Button>
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Button props</caption>
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
      <td colspan="3">button color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">button size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">button fill style</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">button shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">text</td>
      <td colspan="3">button text transformation</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">type</td>
      <td colspan="3">button type</td>
      <td>string</td>
      <td class='font-c'>'button'</td>
    </tr>
    <tr>
      <td class="font-c">disabled</td>
      <td colspan="3">button disabled state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">href</td>
      <td colspan="3">button hyperlink url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">openIn</td>
      <td colspan="3">target of the hyperlink></td>
      <td>string</td>
      <td class='font-c'>'self'</td>
    </tr>
    <tr>
      <td class="font-c">onClick</td>
      <td colspan="3">button onclick event></td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `fill` can be one of the following: `'flat'`, `'solid'`, `'light'`, `'gradient'`, `'outline'`, `'ghost'` or `'link'`.
* `shape` can be either `'normal'` or `'rounded'`.
* `text` can be either `'normal'` or `'uppercase'`.
* `type` can be one of the following: `'button'`, `'submit'`, `'reset'` or `'link'`.
* `href` and `openIn` only apply when `type` is equal to `'link'`.
