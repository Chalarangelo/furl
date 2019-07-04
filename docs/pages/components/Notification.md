---
title: Notification
description: furl's Notification component.
---

Notifications inform or alert users about important events.

### Examples

<notificationexamples></notificationexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Notification, NotificationCenter, Button } from 'furl-components';

const notificationCenterRef = React.createRef();

ReactDOM.render(
  <div>
    <NotificationCenter 
      ref={notificationCenterRef} 
      verticalPosition='top' 
      horizontalPosition='right' 
    />
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='primary' size='large' textAlign='left'>
        This is an important notification.
      </Notification>
    )}>Add notification
    </Button>
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>NotificationCenter props</caption>
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
      <td class="font-c">ref</td>
      <td colspan="3">notification center ref</td>
      <td>React Ref</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:11px'>verticalPosition</td>
      <td colspan="3">notification center vertical position</td>
      <td>string</td>
      <td class='font-c'>'bottom'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:10px'>horizontalPosition</td>
      <td colspan="3">notification center horizontal position</td>
      <td>string</td>
      <td class='font-c'>'right'</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>NotificationCenter ref methods</caption>
  <thead>
    <tr>
      <th>Method</th>
      <th colspan="3">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-c">addNotification()</td>
      <td colspan="3">add a notification to the notification center</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>Notification props</caption>
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
      <td colspan="3">notification color</td>
      <td>string</td>
      <td class='font-c'>'plain'</td>
    </tr>
    <tr>
      <td class="font-c">size</td>
      <td colspan="3">notification size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">textAlign</td>
      <td colspan="3">notification text alignment</td>
      <td>string</td>
      <td class='font-c'>'center'</td>
    </tr>
  </tbody>
</table>

### Notes

* It is highly recommended to provide a `ref` for your `NotificationCenter` via the use of `React.createRef()`. `NotificationCenter` should only be used once in your app and it should be reused via `ref.current` for multiple modal dialogs.
* A `NotificationCenter` only accepts children of the `Notification` component type, set either normally or via the `addNotification` method.
* `verticalPosition` can be one of the following: `'top'`, `'centerr'` or `'bottom'`.
* `horizontalPosition` can be one of the following: `'left'`, `'center'` or `'right'`.
* `color` can be any of the predefined color palettes (`'plain'`, `'primary'`, `'secondary'`, `'success'`, `'warning'` or `'danger'`).
* `size` can be one of the following: `'small'`, `'normal'` or `'large'`.
* `textAlign` can be one of the following: `'left'`, `'center'` or `'right'`.