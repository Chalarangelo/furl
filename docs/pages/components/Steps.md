---
title: Steps
description: furl's Steps component.
---

Steps visualize the sequence of sub-tasks of a task.

### Examples

<stepexamples></stepexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Steps, Step, Text } from 'furl-components';

ReactDOM.render(
  <div>
    <Steps alignment='vertical'>
      <Step>Pricing Plan<Text textStyle='small'>Choose the plan that's best for you.</Text></Step>
      <Step>Personal Information<Text textStyle='small'>Add your personal and contact information.</Text></Step>
      <Step selected>Billing Information<Text textStyle='small'>Add a payment method to your account.</Text></Step>
      <Step>Checkout<Text textStyle='small'>Review your choices and pay for your plan.</Text></Step>
    </Steps>
    <Steps data={[
      'Pricing Plan',
      (<>Personal Information<Text textStyle='small'>Add your personal and contact information.</Text></>),
      {
        selected: true,
        content: 'Billing Information'
      },
      (<>Checkout<Text textStyle='small'>Review your choices and pay for your plan.</Text></>)
    ]} />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Steps props</caption>
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
      <td class="font-c">alignment</td>
      <td colspan="3">steps separator style</td>
      <td>string</td>
      <td class='font-c'>'horizontal'</td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">steps data source</td>
      <td>array(string/object)</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate breadcrumbs either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* `Steps` only accepts children of the `Step` component type.
* `data` only accepts an array of values, each of which can either be a string or an object. Objects in the `data` array must contain a `content`, optionally a `selected` value and any other props that you want to pass.
* `alignment` can either be `'horizontal'` or `'vertical'`.