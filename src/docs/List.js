import React from "react";
import Hyperlink from "../components/Hyperlink";
import { Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from "../components/Table";

const ListDocs = props => (
  <div>
    <h2>List</h2>
    <p>Lists allow you to display shorter content in a bullet-point or numbered format.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Lists are made up of a <code>&lt;List&gt;</code> component, which is the list's container element and one or more <code>&lt;ListItem&gt;</code> components, which are the items of the list, passed as <code>children</code> to the <code>&lt;List&gt;</code> component.</p>
    <Table className="fixed-table">
      <TableCaption>List props</TableCaption>
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
          <TableCell><code>ordered</code></TableCell>
          <TableCell><code>boolean</code></TableCell>
          <TableCell><code>false</code></TableCell>
          <TableCell colSpan={3}>ordered type of the list</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>listStyle</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'none'</code></TableCell>
          <TableCell colSpan={3}>display style of the list (<code>'circle'</code>, <code>'disc'</code>, <code>'square'</code>, <code>'triangle'</code>, <code>'checkmark'</code>, <code>'xmark'</code>, only applicable if <code>ordered=false</code> - <code>'decimal'</code>, <code>'decimal-leading-zero'</code>, <code>'lower-latin'</code>, <code>'lower-roman'</code>, <code>'upper-latin'</code>, <code>'upper-roman'</code>, only applicable if <code>ordered=true</code> - <code>'none'</code>)</TableCell>
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
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;ListItem&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className="fixed-table">
      <TableCaption>ListItem props</TableCaption>
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

export default ListDocs;
