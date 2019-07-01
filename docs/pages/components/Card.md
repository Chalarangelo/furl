---
title: Card
description: furl's Card component.
---

Cards provide a versatile container for any sort of content

### Examples

<cardexamples></cardexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardSection, Title, Text, Paragraph, Button } from 'furl-components';

ReactDOM.render(
  <Card width={320}>
    <CardSection>
      <Title level={5}>Cool mountains<Text textStyle='small'>Just look at them</Text></Title>
    </CardSection>
    <CardSection media='mountain-scenery.jpg' height={200} />
    <CardSection>
      <Paragraph>This is a lovely image of some mountain scenery.</Paragraph>
    </CardSection>
    <Button>I want to visit the mountains</Button>
  </Card>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Card props</caption>
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
      <td class="font-c">width</td>
      <td colspan="3">card width</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>CardSection props</caption>
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
      <td colspan="3">card section media url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">card section height</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
  </tbody>
</table>

### Notes

* A `Card` only accepts children of the `CardSection` component type. Children that are not of the `CardSection` component type will be automatically cast to appropriate components.
* The `CardSection`'s `height` accepts any valid CSS value, including CSS variables, and will only be applied if `media` is specified.
* If a `CardSection` has a `media` prop specified, it should not have any children.
* `width` and `height` accept any valid CSS value, including CSS variables.