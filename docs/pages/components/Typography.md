---
title: Typography
description: furl's Typography component.
---

Beautiful typography components to display textual content.

### Examples

<typographyexamples></typographyexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Title, Text, Paragraph, Quote, Code, Kbd, Preformatted } from 'furl-components';

ReactDOM.render(
  <div>
    <Title level={2}>
      Sloths, code and Einstein
      <Text textStyle='small'>Connecting unrelated things</Text>
    </Title>
    <Paragraph>
      <Text textStyle='bold'>Sloths</Text> are arboreal mammals noted for slowness of movement and for spending most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. The six species are in two families: <Text textStyle="italics">two-toed sloths</Text> and <Text textStyle="italics">three-toed sloths</Text>. In spite of this traditional naming, all sloths actually have three toes. The two-toed sloths have two digits, or fingers, on each forelimb. <Text autolink>You can learn more about sloths by visiting https://en.wikipedia.org/wiki/Sloth</Text>. One fun fact is that a sloth is not at all capable of using a key on a human keyboard, such as <Kbd>Ctrl</Kbd>, or writing any code, such as <Code>console.log('Hello world!)'</Code>!
    </Paragraph>
    <Quote cite='Albert Einstein'>
      Creativity Is Intelligence Having Fun.
    </Quote>
    <Preformatted>
      console.log('Hello world');
    </Preformatted>
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Title props</caption>
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
      <td class="font-c">level</td>
      <td colspan="3">title hierarchical level</td>
      <td>number</td>
      <td class='font-c'>1</td>
    </tr>
    <tr>
      <td class="font-c">semantic</td>
      <td colspan="3">title semantic element use</td>
      <td>boolean</td>
      <td class='font-c'>true</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Quote props</caption>
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
      <td class="font-c">cite</td>
      <td colspan="3">quote citation source</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Text props</caption>
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
      <td class="font-c">textStyle</td>
      <td colspan="3">text style</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">autolink</td>
      <td colspan="3">autolink text</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

### Notes

* `Title` accepts a `level` between `1` and `6` (inclusive).
* `semantic` attribute of `Title` determines if it will render a semantically correct element, such as `<h1>`, or a `<span>` element with the appropriate classes.
* If `autolink` is set to `true`, the component will automatically link any valid URLs.
* `textStyle` can be one of the following: `'small'`, `'bold'` or `'italics'`.