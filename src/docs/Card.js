import React from "react";
import Hyperlink from "../components/Hyperlink";
import {Table, TableCaption, TableHead, TableRow, TableCell} from "./components/Table";

const CardDocs = props => (
  <div>
    <h2>Card</h2>
    <p>Cards allow you to create rectangular containers for any kind of content.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Cards are made up of a <code>&lt;Card&gt;</code> component, which is the card's container element and one or more <code>&lt;CardSection&gt;</code> components, which are the sections of the card, passed as <code>children</code> to the <code>&lt;Card&gt;</code> component.</p>
    <Table>
      <TableCaption>Card props</TableCaption>
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
          <TableCell><code>width</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'auto'</code></TableCell>
          <TableCell>width of the card</TableCell>
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
          <TableCell>the component's children elements (only accepts <code>&lt;CardSection&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableCaption>CardSection props</TableCaption>
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
          <TableCell><code>media</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell>url source of the image, if any</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>height</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'auto'</code></TableCell>
          <TableCell>height of the section</TableCell>
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
          <TableCell>the component's children elements (will be ignored if <code>media</code> is set)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default CardDocs;
