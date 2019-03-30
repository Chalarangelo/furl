import React from "react";
import Hyperlink from "../components/Hyperlink";
import {Table, TableCaption, TableHead, TableRow, TableCell} from "./components/Table";

const HyperlinkDocs = props => (
  <div>
    <h2>Hyperlink</h2>
    <p>Hyperlinks allow users to navigate to different URLs.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Hyperlinks are simple to use and allow you to create links to both internal and external URLs, without having to worry about things such as the <code>rel</code> and <code>target</code> attributes.</p>
    <Table>
      <TableCaption>Hyperlink props</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Type</TableCell>
          <TableCell heading>Default</TableCell>
          <TableCell heading>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><code>href</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell>hyperlink url</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>openIn</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'self'</code></TableCell>
          <TableCell>hyperlink target (<code>'self'</code>, <code>'blank'</code>, <code>'external'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>id</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell>value for the rendered element's <code>id</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>className</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell>additional classes that should be passed to the component</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>children</code></TableCell>
          <TableCell><code>React.children</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell>the component's children elements</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default HyperlinkDocs;
