---
title: Components
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

### API

All of **furl**'s components support all the common HTML/React props. However, a common API is provided for all components to make things easier.

<table>
  <caption>Common props</caption>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th colspan="2">Possible values</th>
    </tr>
  </thead>
  <tbody style="font-size: 14px;">
    <tr>
      <td class="font-c">fontFamily</td>
      <td>font family</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'a', 'b', 'c', 'font-a','font-b','font-c' or any other valid font family</td>
    </tr>
    <tr>
      <td class="font-c">fontSize</td>
      <td>font size</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ts-*p', '*p' (typography scale preset) or any other valid font size</td>
    </tr>
    <tr>
      <td class="font-c">fontWeight</td>
      <td>font weight</td>
      <td>string</td>
      <td colspan="2" class='font-c'>any valid font weight</td>
    </tr>
    <tr>
      <td class="font-c">color</td>
      <td>text/foreground color</td>
      <td>string</td>
      <td colspan="2" class='font-c'>any preset color in the 'color-weight' format (e.g. interface-gray-100) or any other valid color</td>
    </tr>
    <tr>
      <td class="font-c" style="font-size: 14px">backgroundColor</td>
      <td>background color</td>
      <td>string</td>
      <td colspan="2" class='font-c'>any preset color in the 'color-weight' format (e.g. interface-gray-100) or any other valid color</td>
    </tr>
    <tr>
      <td class="font-c">padding</td>
      <td>padding</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid padding</td>
    </tr>
    <tr>
      <td class="font-c" style="font-size: 13px">paddingHorizontal</td>
      <td>horizontal padding</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid padding</td>
    </tr>
    <tr>
      <td class="font-c" style="font-size: 14px">paddingVertical</td>
      <td>vertical padding</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid padding</td>
    </tr>
    <tr>
      <td class="font-c">margin</td>
      <td>margin</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid margin</td>
    </tr>
    <tr>
      <td class="font-c" style="font-size: 14px">marginHorizontal</td>
      <td>horizontal margin</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid margin</td>
    </tr>
    <tr>
      <td class="font-c">marginVertical</td>
      <td>vertical margin</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid margin</td>
    </tr>
    <tr>
      <td class="font-c">boxShadow</td>
      <td>box shadow</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'shadow-*' (shadow preset) or any other valid box shadow</td>
    </tr>
    <tr>
      <td class="font-c">borderRadius</td>
      <td>border radius</td>
      <td>string</td>
      <td colspan="2" class='font-c'>'ls-*p', '*p' (layout scale preset) or any other valid border radius</td>
    </tr>
  </tbody>
</table>