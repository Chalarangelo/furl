import React from 'react';
import Hyperlink from '../components/Hyperlink';
import {Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from '../components/Table';

const DropdownDocs = props => (
  <div>
    <h2>Dropdown</h2>
    <p>Dropdowns provide an easy way to toggle visibility of additional operations.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Dropdowns are easy to use and can be combined with other components to help users navigate throughout your application, providing context as necessary.</p>
    <Table className='fixed-table'>
      <TableCaption>Dropdown props</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Type</TableCell>
          <TableCell heading>Default</TableCell>
          <TableCell heading colSpan={3}>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><code>isOpen</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>open property of the dropdown</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>text</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>dropdown toggle text</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>reverse</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>reverses the direction of the dropdown arrow and the popup</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>id</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>value for the rendered element's <code>id</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>className</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>additional classes that should be passed to the component</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>children</code></TableCell>
          <TableCell><code>React.children</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;TableCaption&gt;</code>, <code>&lt;TableHead&gt;</code> and <code>&lt;TableBody&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default DropdownDocs;
