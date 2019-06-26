---
title: Typography System
description: The typographic system of furl.
---

Using a typographic scale and great fonts can help communicate content more efficiently, while making design easier.

Typography presets are fully customizable via the use of variables. You can easily alter the fonts used and the type scale's presets as desired.

### Fonts

Furl relies upon a 3-font system to provide a great user experience, well-tailored for any type of device and content. Apart from customizable fonts, a native font stack is used as a fallback.

<table>
  <caption>Font variables</caption>
  <thead>
    <tr>
      <th colspan="2">Font sample</th>
      <th>Variable name</th>
      <th>Default value</th>
      <th colspan="3">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Dog says woof!</td>
      <td class='font-c'>--font-a</td>
      <td>Roboto</td>
      <td colspan="3">Primary font - used in most places.</td>
    </tr>
    <tr>
      <td colspan="2" class="font-b">Dog says woof!</td>
      <td class='font-c'>--font-b</td>
      <td>Open Sans</td>
      <td colspan="3">Secondary font - used mainly in titles.</td>
    </tr>
    <tr>
      <td colspan="2" class="font-c">Dog says woof!</td>
      <td class='font-c'>--font-c</td>
      <td>Roboto Mono</td>
      <td colspan="3">Code font - used in code elements.</td>
    </tr>
  <tbody>
</table>

<alert color='warning' size='large'>
<p>Note: The default fonts will not be loaded automatically. Instead, it's the developer's responsibility to load all the necessary fonts (including the default ones) in their application. Please see the <a href="/#getting-started">getting started</a> section for more information.</p>
</alert>

### Type Scale

Furl uses a 11-step typographic scale with handcrafted defaults that work for any type of content.

<table class='fixed-table'>
  <caption>Type scale variables</caption>
  <thead>
    <tr>
      <th colspan="3">Scale sample</th>
      <th>Variable name</th>
      <th>Default value</th>
      <th colspan="4">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class='font-ts-25p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-25p</td>
      <td class='font-c'>12px</td>
      <td colspan="4">Smallest font size.</td>
    </tr>
    <tr>
      <td class='font-ts-50p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-50p</td>
      <td class='font-c'>14px</td>
      <td colspan="4">Smaller font size. Used mainly in <small class='font-c'>&lt;small&gt;</small> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-100p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-100p</td>
      <td class='font-c'>16px</td>
      <td colspan="4">Base font size (<small class='font-c'>1rem</small>). Used in most places.</td>
    </tr>
    <tr>
      <td class='font-ts-200p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-200p</td>
      <td class='font-c'>18px</td>
      <td colspan="4">Larger font size.</td>
    </tr>
    <tr>
      <td class='font-ts-300p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-300p</td>
      <td class='font-c'>20px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h6&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-400p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-400p</td>
      <td class='font-c'>24px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h5&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-500p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-500p</td>
      <td class='font-c'>30px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h4&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-600p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-600p</td>
      <td class='font-c'>36px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h3&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-700p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-700p</td>
      <td class='font-c'>48px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h2&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-800p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-800p</td>
      <td class='font-c'>60px</td>
      <td colspan="4">Heading font size. Used in <small class='font-c'>&lt;h1&gt;</span> elements.</td>
    </tr>
    <tr>
      <td class='font-ts-900p' colspan="3"><span>Aa</span></td>
      <td class='font-c'>--ts-900p</td>
      <td class='font-c'>72px</td>
      <td colspan="4">Main heading font size.</td>
    </tr>
  </tbody>
</table>

<alert color='primary' size='large'>
<p>Note: The default step values above correspond to the calculated values of converting the <code>rem</code> value of each step to pixels.</p>
</alert>