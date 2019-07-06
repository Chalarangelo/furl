---
title: Input
description: furl's Input component.
---

Inputs allow users to submit data to your application.

### Examples

<inputexamples></inputexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'furl-components';

ReactDOM.render(
  <div>
    <Input type='text' label='Text' placeholder='Text' icon='user' size='small' shape='rounded' />
    <Input type='textarea' label='Multiline text' placeholder='Multiline text' rows={2} />
    <Input type='email' label='E-mail' placeholder='mail@server.com' icon='mail' />
    <Input type='url' label='URL' placeholder='https://google.com' icon='at-sign' />
    <Input type='password' label='Password (with revealer)' icon='key'  withRevealer />
    <Input type='number' label='Number' placeholder='0' min={1} max={40} step={3} />
    <Input type='select' label='Select' icon='cloud' data={[
      'Cloudy', 
      { title: 'Cloudier', selected: true }, 
      'Cloudiest'
    ]} />
    <Input type='select' label='Multiple select' multiple data={[
      'Cloudy', 'Cloudier', 'Cloudiest'
    ]} />
    <Input type='combobox' label='Combo box' icon='sun' data={[
      'Sunny', 'Sunnier', 'Sunniest'
    ]} />
    <Input type='creditcard' label='Credit card' placeholder='0000-0000-0000-0000' icon='credit-card' />
    <Input type='phone' label='Phone' placeholder='+30 (123) 456-7890' icon='phone' />
    <Input type='currency' label='Currency' placeholder='$' icon='dollar-sign' />
    <Input type='time' label='Time' placeholder='HH:MM' icon='clock' displaySeconds={false}/>
    <Input type='date' label='Date' placeholder='dd/mm/yyyy' icon='calendar' />
    <Input type='color'  label='Color' placeholder='#ffffff' icon='sliders' />
    <Input type='file' label='Upload' placeholder='Drag and drop or click to upload files' />
    <Input type='rating' label='Rating' />
    <Input type='rating' label='Rating (custom)' iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' />
    <Input type='slider' label='Slider' min={10} max={25} />
    <Input type='slider' label='Range slider' range min={10} max={25} />
    <Input type='checkbox' label='Checkbox' color='primary' >I accept the terms of agreement.</Input>
    <Input type='radiogroup' label='Radio group' name='radios' data={[
      'Choice A',
      { color: 'primary', value: 'Choice B'},
      { color: 'secondary', title: 'Choice C'}
    ]} />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Input props</caption>
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
      <td class="font-c">type</td>
      <td colspan="3">input type</td>
      <td>string</td>
      <td class='font-c'>'text'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 14px'>defaultValue</td>
      <td colspan="3">input default value</td>
      <td>string/number</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">label</td>
      <td colspan="3">input label</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">icon</td>
      <td colspan="3">icon name to be used</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">input size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">input shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">name</td>
      <td colspan="3">input name within the form</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">placeholder</td>
      <td colspan="3">input placeholder</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">disabled</td>
      <td colspan="3">input disabled state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">required</td>
      <td colspan="3">input required state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">readOnly</td>
      <td colspan="3">input readonly state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">onChange</td>
      <td colspan="3">input onchange event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='textarea'</span> props</caption>
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
      <td class="font-c">rows</td>
      <td colspan="3">textarea row count</td>
      <td>int</td>
      <td class='font-c'>5</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='email'</span> props</caption>
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
      <td class="font-c">pattern</td>
      <td colspan="3">email validation pattern</td>
      <td>regexp</td>
      <td class='font-c'>'.+@.+\..+'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='url'</span> props</caption>
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
      <td class="font-c">pattern</td>
      <td colspan="3">url validation pattern</td>
      <td>regexp</td>
      <td class='font-c'>'https?://.+'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='password'</span> props</caption>
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
      <td class="font-c" style='font-size: 14px'>withRevealer</td>
      <td colspan="3">display password revealer</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='number'</span> props</caption>
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
      <td class="font-c">min</td>
      <td colspan="3">input minimum value</td>
      <td>number</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">max</td>
      <td colspan="3">input maximum value</td>
      <td>number</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">step</td>
      <td colspan="3">input step</td>
      <td>number</td>
      <td class='font-c'>1</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='currency'</span> props</caption>
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
      <td class="font-c" style='font-size: 12px'>currencySymbol</td>
      <td colspan="3">currency symbol</td>
      <td>string</td>
      <td class='font-c'>'$'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='time'</span> props</caption>
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
      <td class="font-c" style='font-size: 14px'>displayHours</td>
      <td colspan="3">display hours in input</td>
      <td>boolean</td>
      <td class='font-c'>true</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 12px'>displaySeconds</td>
      <td colspan="3">display seconds in input</td>
      <td>boolean</td>
      <td class='font-c'>true</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='date'</span> props</caption>
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
      <td class="font-c" style='font-size: 12px'>monthBeforeDay</td>
      <td colspan="3">month before day format</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c">separator</td>
      <td colspan="3">date segment separator</td>
      <td>string</td>
      <td class='font-c'>'/'</td>
    </tr>
    <tr>
      <td class="font-c">minYear</td>
      <td colspan="3">date minimum year</td>
      <td>int</td>
      <td class='font-c'>1</td>
    </tr>
    <tr>
      <td class="font-c">maxYear</td>
      <td colspan="3">date maximum year</td>
      <td>int</td>
      <td class='font-c'>9999</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='rating'</span> props</caption>
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
      <td class="font-c">iconName</td>
      <td colspan="3">rating icon name</td>
      <td>string</td>
      <td class='font-c'>'star'</td>
    </tr>
    <tr>
      <td class="font-c">iconStyle</td>
      <td colspan="3">rating icon style</td>
      <td>string</td>
      <td class='font-c'>'outline'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 12px'>iconFillColor</td>
      <td colspan="3">rating icon fill color</td>
      <td>string</td>
      <td class='font-c'>'var(--warning-yellow-500)'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='slider'</span> props</caption>
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
      <td class="font-c">min</td>
      <td colspan="3">input minimum value</td>
      <td>number</td>
      <td class='font-c'>0</td>
    </tr>
    <tr>
      <td class="font-c">max</td>
      <td colspan="3">input maximum value</td>
      <td>number</td>
      <td class='font-c'>100</td>
    </tr>
    <tr>
      <td class="font-c">range</td>
      <td colspan="3">slider range type</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='file'</span> props</caption>
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
      <td class="font-c">multiple</td>
      <td colspan="3">input accepts multiple files</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:12px'>onFilesChanged</td>
      <td colspan="3">input onchange event (equivalent)</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='checkbox'</span> props</caption>
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
      <td class="font-c">checked</td>
      <td colspan="3">checkbox checked state</td>
      <td>boolean</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">color</td>
      <td colspan="3">checkbox color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='radiogroup'</span> props</caption>
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
      <td colspan="3">radio group data source</td>
      <td>array(string/object)</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">color</td>
      <td colspan="3">radio group color</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='select'</span> props</caption>
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
      <td colspan="3">select data source</td>
      <td>array(string/object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

<table>
  <caption><span class='font-c'>type='combobox'</span> props</caption>
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
      <td colspan="3">combo box data source</td>
      <td>array(string/object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* `type` can be one of the following: `'text'`, `'textarea'`, `'email'`, `'url'`, `'password'`, `'number'`, `'creditcard'`, `'phone'`, `'currency'`, `'time'`, `'date'`, `'rating'`, `'slider'`, `'color'`, `'file'`, `'checkbox'`, `'radiogroup'`, `'select'` or `'combobox'`.
* If `label` is specified, the component will render a `<label>` right before the `<input>` or HTML structure of the component.
* `icon` accepts any valid icon name. You can find a full list of all the available values [here](https://feathericons.com/).
* If `icon` is provided, it will render an icon on the left side of the input component. The following input types do not utilize the value of `icon`: `'number'`, `'file'`, `'rating'`, `'slider'`, `'checkbox'` and `'radiogroup'`.
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `shape` can be either `'normal'` or `'rounded'`.
* `defaultValue` and its type depends on the specific `type`. Most types use an empty value as their default. `'select'`,`'combobox'`, `'file'` and `'radiogroup'` are not affected by the value of `defaultValue`.
* `withRevealer` will render a small button on the right side of the `'password'` input, which will allow users to toggle password visibility on or off.
* A `'rating'` input's `iconName` accepts any valid icon name. You can find a full list of all the available values [here](https://feathericons.com/).
* `iconStyle` can either be `'outline'` or `'fill'`.
* `iconFillColor` accepts any valid CSS value, including CSS variables.
* If `range` is `true` for a `'slider'` input, it will render a component that accepts two values, instead of one.
* If `multiple` is `true` for any input type that supports it, the input will accept multiple values.
* A `'file'` input does not support the `onChange` property. Instead it uses the `onFilesChanged` prop, whose supplied function will be fired with one argument, which is the name(s) of the file(s) selected.
* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`). 
* If `color` is specified for a `'radiogroup'` input, it wil override the `color` prop of its children.
* The `data` prop of a `'radiogroup'` can be either an array of string values or objects or a mix of the two. Objects in the `data` array must have a `title` and/or `value` and optionally a `color`, `name` and/or the `checked` props, similary to the `'checkbox'` input type.
* The `data` prop of a `'select'` or a `'combobox'` can be either an array of string values or objects or a mix of the two. Objects in the `data` array must have a `title` and/or `value` and the `selected` prop.

