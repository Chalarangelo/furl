import React from 'react';
import Hyperlink from '../components/Hyperlink';
import {Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from '../components/Table';

const LayoutDocs = props => (
  <div>
    <h2>Layout</h2>
    <p>Layouts allow you to structure your application's layout according to your needs.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Layouts are made up of a <code>&lt;Layout&gt;</code> component, which is the layout's container element an optional <code>&lt;Header&gt;</code> element, an optional <code>&lt;Sidebar&gt;</code> element and a <code>&lt;Content&gt;</code> element, which serve as the layout's header bar, sidebar and content area respectively.</p>
    <Table className='fixed-table'>
      <TableCaption>Layout props</TableCaption>
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
          <TableCell><code>header</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'top'</code></TableCell>
          <TableCell colSpan={3}>position of the header (<code>'top'</code>, <code>'bottom'</code>, <code>'none'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>sidebar</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'left'</code></TableCell>
          <TableCell colSpan={3}>position of the sidebar (<code>'left'</code>, <code>'right'</code>, <code>'none'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>contentSize</code></TableCell>
          <TableCell><code>array (4 * integer)</code></TableCell>
          <TableCell><code>[1.0, 1.0, 0.75, 0.8]</code></TableCell>
          <TableCell colSpan={3}>width of the content area in each screen size</TableCell>
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
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;Header&gt;</code>, <code>&lt;Sidebar&gt;</code> and <code>&lt;Content&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className='fixed-table'>
      <TableCaption>Header props</TableCaption>
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
          <TableCell><code>outline</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'none'</code></TableCell>
          <TableCell colSpan={3}>outline of the rendered element (<code>'border-top'</code>, <code>'border-bottom'</code>, <code>'shadow'</code>, <code>'none'</code>)</TableCell>
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
          <TableCell colSpan={3}>the component's children elements</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className='fixed-table'>
      <TableCaption>Sidebar props</TableCaption>
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
          <TableCell><code>outline</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'none'</code></TableCell>
          <TableCell colSpan={3}>outline of the rendered element (<code>'border-left'</code>, <code>'border-right'</code>, <code>'none'</code>)</TableCell>
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
          <TableCell colSpan={3}>the component's children elements</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className='fixed-table'>
      <TableCaption>Content props</TableCaption>
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
          <TableCell colSpan={3}>the component's children elements</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default LayoutDocs;
