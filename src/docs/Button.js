import React from "react";
import Hyperlink from "../components/Hyperlink";
import { Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from "../components/Table";

const ButtonDocs = props => (
  <div>
    <h2>Button</h2>
    <p>Buttons allow users to interact with your application.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Buttons are highly customizable, providing a different visual style for every kind of interaction context.</p>
    <Table className="fixed-table">
      <TableCaption>Button props</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Type</TableCell>
          <TableCell heading>Default</TableCell>
          <TableCell heading heading colSpan={3}>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><code>color</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'plain'</code></TableCell>
          <TableCell colSpan={3}>color palette of the button (<code>'plain'</code>, <code>'primary'</code>, <code>'secondary'</code>, <code>'success'</code>, <code>'warning'</code>, <code>'danger'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>fill</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'flat'</code></TableCell>
          <TableCell colSpan={3}>fill style of the button (<code>'flat'</code>, <code>'solid'</code>, <code>'light'</code>, <code>'gradient'</code>, <code>'outline'</code>, <code>'ghost'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>size</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'normal'</code></TableCell>
          <TableCell colSpan={3}>size of the button (<code>'normal'</code>, <code>'small'</code>, <code>'large'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>shape</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'normal'</code></TableCell>
          <TableCell colSpan={3}>shape of the button (<code>'normal'</code>, <code>'rounded'</code>, <code>'circle'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>text</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'normal'</code></TableCell>
          <TableCell colSpan={3}>text style of the button (<code>'normal'</code>, <code>'uppercase'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>disabled</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>disabled state of button</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>type</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'button'</code></TableCell>
          <TableCell colSpan={3}>type of the button (<code>'button'</code>, <code>'link'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>href</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>hyperlink url (only applicable if <code>type='link'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>openIn</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>hyperlink target (<code>'self'</code>, <code>'blank'</code>, <code>'external'</code>, only applicable if <code>type='link'</code>)</TableCell>
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

export default ButtonDocs;
