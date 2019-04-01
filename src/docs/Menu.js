import React from "react";
import Hyperlink from "../components/Hyperlink";
import { Table, TableCaption, TableHead, TableBody, TableRow, TableCell } from "../components/Table";

const MenuDocs = props => (
  <div>
    <h2>Menu</h2>
    <p>Menus provide a navigation system throughout your application.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Menus are made up of a <code>&lt;Menu&gt;</code> component, which is the menu's container element and one or more <code>&lt;MenuItem&gt;</code> components, which are the actions of the menu, passed as <code>children</code> to the <code>&lt;Menu&gt;</code> component.</p>
    <Table className="fixed-table">
      <TableCaption>Menu props</TableCaption>
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
          <TableCell><code>type</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'horizontal'</code></TableCell>
          <TableCell colSpan={3}>menu orientation (<code>'horizontal'</code>, <code>'vertical'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>highlight</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'top'</code></TableCell>
          <TableCell colSpan={3}>highlight style of the menu (<code>'top'</code>, <code>'bottom'</code>, only applicable if <code>type='horizontal</code> - <code>'left'</code>, <code>'right'</code>, only applicable if <code>type='vertical'</code>)</TableCell>
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
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;MenuItem&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className="fixed-table">
      <TableCaption>MenuItem props</TableCaption>
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
          <TableCell><code>selected</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>selected state of menu item</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>disabled</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>disabled state of menu item</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>href</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>hyperlink url</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>openIn</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>hyperlink target (<code>'self'</code>, <code>'blank'</code>, <code>'external'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>onClick</code></TableCell>
          <TableCell><code>function (event)</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>callback function to handle the <code>click</code> event</TableCell>
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
  </div>
);

export default MenuDocs;
