---
title: Form
description: furl's Form component.
---

Forms are used to collect, validate and submit data through your application.

### Examples

<formexamples></formexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormLegend, FormLabel, Input } from 'furl-components';

ReactDOM.render(
 <div>
  <Form>
    <FormLegend>Signup form</FormLegend>
    <FormLabel htmlFor='username'>Username</FormLabel>
    <Input id='username' placeholder='Enter your username...' />
    <FormLabel htmlFor='pwd'>Password</FormLabel>
    <Input type='password' id='pwd' placeholder='Enter your password...' />
    <FormLabel htmlFor='pwd-repeat'>Repeat Password</FormLabel>
    <Input type='password' id='pwd-repeat' placeholder='Repeat your password...' />
    <FormLabel htmlFor='email'>E-mail</FormLabel>
    <Input type='email' id='email' placeholder='mail@server.com' />
  </Form>
  <Form
    twoColumn
    legend='Signup form'
    data={[
      {
        name: 'username',
        label: 'Username'
      },
      {
        type: 'password',
        name: 'password',
        placeholder: '',
        label: 'Password'
      },
      {
        type: 'password',
        name: 'repeat',
        placeholder: '',
        label: 'Repeat password'
      },
      {
        type: 'email',
        name: 'email',
        label: 'E-mail',
        placeholder: 'mail@server.com'
      }
    ]}
  />
 </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Form props</caption>
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
      <td colspan="3">form color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">form size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">fill</td>
      <td colspan="3">form fill style</td>
      <td>string</td>
      <td class='font-c'>'flat'</td>
    </tr>
    <tr>
      <td class="font-c">twoColumn</td>
      <td colspan="3">form two column layout</td>
      <td>boolean</td>
      <td class='font-c'>false'</td>
    </tr>
    <tr>
      <td class="font-c">legend</td>
      <td colspan="3">form legend</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">data</td>
      <td colspan="3">form data source</td>
      <td>array(object)</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">action</td>
      <td colspan="3">form action</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">method</td>
      <td colspan="3">form method</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">name</td>
      <td colspan="3">form name</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">encType</td>
      <td colspan="3">form encoding type</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">openIn</td>
      <td colspan="3">form response target</td>
      <td>string</td>
      <td class='font-c'>'self'</td>
    </tr>
    <tr>
      <td class="font-c" style="font-size:14px">autocomplete</td>
      <td colspan="3">form autocomplete property</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>FormLabel props</caption>
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
      <td class="font-c">htmlFor</td>
      <td colspan="3">label bound element id</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>

### Notes

* You can populate a form either via passing children to it or via the use of the `data` prop. If `data` is provided, it will take precedence over passed children, therefore rendering only the content provided in `data`.
* `data` only accepts an array of objects, allowing you to pass a React component tree.
* `color` can be one of the following: `'normal'`, `'light'` or `'dark'`.
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `fill` can be one of the following: `'flat'` or `'solid'`.
* `openIn` can be one of the following: `'self'`, `'blank'` or `'external'`.
