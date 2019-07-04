---
title: Modal
description: furl's Modal component.
---

Modals provide a way to display dialogs to your users.

### Examples

<modalexamples></modalexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalCenter, Modal, ModalSection, Button } from 'furl-components';

const modalCenterRef = React.createRef();

ReactDOM.render(
  <div>
    <ModalCenter ref={modalCenterRef} />
    <Button color='primary' onClick={() => {
      modalCenterRef.current.setContent(
        <Modal>
          <ModalSection>
            <h5>Howdy, there!</h5>
            <p>Nice to see you here. You can learn more about our website by visiting more pages.</p>
            <Button color='primary' onClick={() => modalCenterRef.current.hide()}>Take me back</Button>
          </ModalSection>
        </Modal>
      );

      modalCenterRef.current.show();
    }}>Open modal dialog</Button>
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>ModalCenter props</caption>
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
      <td colspan="3">modal center ref</td>
      <td>React Ref</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">isOpen</td>
      <td colspan="3">modal center open state</td>
      <td>boolean</td>
      <td class='font-c'>false</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>ModalCenter ref methods</caption>
  <thead>
    <tr>
      <th>Method</th>
      <th colspan="3">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-c">setContent()</td>
      <td colspan="3">set content of the modal center</td>
    </tr>
    <tr>
      <td class="font-c">show()</td>
      <td colspan="3">show content of the modal center</td>
    </tr>
    <tr>
      <td class="font-c">hide()</td>
      <td colspan="3">hide content of the modal center</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>ModalSection props</caption>
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
      <td colspan="3">modal section media url</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">height</td>
      <td colspan="3">modal section height</td>
      <td>int/string</td>
      <td class='font-c'>'auto'</td>
    </tr>
  </tbody>
</table>

### Notes

* It is highly recommended to provide a `ref` for your `ModalCenter` via the use of `React.createRef()`. `ModalCenter` should only be used once in your app and it should be reused via `ref.current` for multiple modal dialogs.
* A `ModalCenter` only accepts children of the `Modal` component type, set either normally or via the `setContent` method.
* A `Modal` only accepts children of the `ModalSection` component type.
* The `ModalSection`'s `height` accepts any valid CSS value, including CSS variables, and will only be applied if `media` is specified.
* If a `ModalSection` has a `media` prop specified, it should not have any children.