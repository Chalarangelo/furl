---
title: Pagination
description: furl's Pagination component.
---

Pagination provides navigation for content separated in pages.

### Examples

<paginationexamples></paginationexamples>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination, PaginationItem, Button, Icon } from 'furl-components';

ReactDOM.render(
  <div>
    <Pagination>
      <Button>First</Button>
      <Button>Previous</Button>
      <PaginationItem>1 of 6</PaginationItem>
      <Button>Next</Button>
      <Button>Last</Button>
    </Pagination>
    <Pagination
      currentPage={1} pageCount={8}
      firstText={(<Icon name='chevrons-left' width={16} height={16} />)}
      previousText={(<Icon name='chevron-left' width={16} height={16} />)}
      nextText={(<Icon name='chevron-right' width={16} height={16} />)}
      lastText={(<Icon name='chevrons-right' width={16} height={16} />)}
    />
  </div>, 
  document.getElementById('root')
);
```

### API

<table>
  <caption>Pagination props</caption>
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
      <td class="font-c">size</td>
      <td colspan="3">pagination size</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">shape</td>
      <td colspan="3">pagination shape</td>
      <td>string</td>
      <td class='font-c'>'normal'</td>
    </tr>
    <tr>
      <td class="font-c">currentPage</td>
      <td colspan="3">pagination current page</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">pageCount</td>
      <td colspan="3">pagination page count</td>
      <td>string</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">firstText</td>
      <td colspan="3">pagination first button text</td>
      <td>string/object</td>
      <td class='font-c'>'First'</td>
    </tr>
    <tr>
      <td class="font-c" style='font-size:14px'>previousText</td>
      <td colspan="3">pagination previous button text</td>
      <td>string/object</td>
      <td class='font-c'>'Previous'</td>
    </tr>
    <tr>
      <td class="font-c">nextText</td>
      <td colspan="3">pagination next button text</td>
      <td>string/object</td>
      <td class='font-c'>'Next'</td>
    </tr>
    <tr>
      <td class="font-c">lastText</td>
      <td colspan="3">pagination last button text</td>
      <td>string/object</td>
      <td class='font-c'>'Last'</td>
    </tr>
    <tr>
      <td class="font-c">onFirst</td>
      <td colspan="3">pagination first button onclick event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">onPrevious</td>
      <td colspan="3">pagination previous button onclick event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">onNext</td>
      <td colspan="3">pagination next button onclick event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
    <tr>
      <td class="font-c">onLast</td>
      <td colspan="3">pagination last button onclick event</td>
      <td>function</td>
      <td class='font-c'></td>
    </tr>
  </tbody>
</table>


### Notes

* You can populate a pagination component either via passing children to it or via the use of the `currentPage` and `pageCount` props. If the latter two are provided, they will take precedence over passed children, therefore rendering only the content provided in them.
* A `Pagination` only accepts children of the `Button` and `PaginationItem` component types.
* `size` can be one of the following: `'small'`, `'normal'` or `'large'` and will override the `size` property of any of the component's children.
* `shape` can be either `'normal'` or `'rounded'` and will override the `shape` property of any of the component's children.
* `firstText`, `previousText`, `nextText` and `lastText` accept either a string or an object, which allows you to pass a React component tree.
