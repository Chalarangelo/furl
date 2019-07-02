---
title: Tabs
description: furl's Tabs component.
---

Tabs display content in tabbed views.

### Examples

<tabexamples></tabexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Tab } from 'furl-components';

ReactDOM.render(
  <div>
    <Tabs>
      <Tab title="1. How do I create an egg wash?">
        To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.
      </Tab>
      <Tab title="2. How do I easily peel tomatoes?">
        Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.
      </Tab>
    </Tabs>
    <Tabs 
      controlStyle='button-group' 
      openIndex={1}
      data={[
        {
          title: '1. How do I create an egg wash?',
          content: 'To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.'
        },
        {
          title: '2. How do I easily peel tomatoes?',
          content: 'Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.'
        }
      ]}
    />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Tabs props</caption>
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
      <td class="font-c">openIndex</td>
      <td colspan="3">tabs selected index</td>
      <td>int</td>
      <td class='font-c'>0</td>
    </tr>
    <tr>
      <td class="font-c">controlStyle</td>
      <td colspan="3">tabs control style</td>
      <td>string</td>
      <td class='font-c'>'solid'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">tabs data source</td>
      <td>array(object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate a tab view either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* A `Tabs` component only accepts children of the `Tab` component type.
* `data` only accepts an array of object values. Objects in the `data` array must contain a `title` and a `content` value. The latter can either be a string or an object, allowing you to pass React component trees.
* `openIndex` can only be an integer between `0` and however many children or `data` values the tab view has minus one (inclusive) - i.e. the zero-based index of the selected tab.
* `controlStyle` can be either `'normal'` or `'button-group'`.
