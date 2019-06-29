---
title: Calendar
description: furl's Calendar component.
---

Calendars provide a visual representation of dates on a grid.

### Examples

<calendarexamples></calendarexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from 'furl-components';

ReactDOM.render(
  <Calendar 
    date={new Date('01/01/2020')} 
    fill='solid'
    onDateChanged={(date) => console.log(date)}
  />, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Calendar props</caption>
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
      <td class="font-c">date</td>
      <td colspan="3">calendar selected date</td>
      <td>Date</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">fill style</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size: 14px'>onDateChanged</td>
      <td colspan="3">calendar ondatechanged event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* If `date` is not of type `Date`, the component will try to convert it to a usable `Date` object.
* If `date` is not provided, the component will use the current date.
* `fill` can be either `'flat'` or `'solid'`.
* `onDateChanged` does not behave exactly like a normal event. Instead, the callback function will only be passed one argument, the value of the newly selected date.
