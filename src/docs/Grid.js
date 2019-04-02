import React from "react";
import Hyperlink from "../components/Hyperlink";
import { Table, TableCaption, TableHead, TableBody, TableRow, TableCell } from "../components/Table";

const GridDocs = props => (
  <div>
    <h2>Grid</h2>
    <p>The grid system allows you to create responsive, customizable layouts that look great on any device.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Grid are made up of a <code>&lt;Grid&gt;</code> component, which is the grid's container element and one or more <code>&lt;Row&gt;</code> components, which are the rows of the grid, passed as <code>children</code> to the <code>&lt;Grid&gt;</code> component. The <code>&lt;Row&gt;</code> elements, in turn, contain one or more <code>&lt;Column&gt;</code> components, which are the columns of the row, passed as <code>children</code> to the <code>&lt;Row&gt;</code> component</p>
    <Table className="fixed-table">
      <TableCaption>Grid props</TableCaption>
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
          <TableCell><code>justify</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'start'</code></TableCell>
          <TableCell colSpan={3}>content alignment on the main axis (<code>'start'</code>, <code>'end'</code>, <code>'center'</code>, <code>'between'</code>, <code>'around'</code>, <code>'evenly'</code>)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>align</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'start'</code></TableCell>
          <TableCell colSpan={3}>content alignment on the secondary axis  (<code>'start'</code>, <code>'end'</code>, <code>'center'</code>, <code>'stretch'</code>, <code>'baseline'</code>)</TableCell>
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
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;Row&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className="fixed-table">
      <TableCaption>Row props</TableCaption>
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
          <TableCell colSpan={3}>the component's children elements (only accepts <code>&lt;Column&gt;</code> elements)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table className="fixed-table">
      <TableCaption>Column props</TableCaption>
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
          <TableCell><code>size</code></TableCell>
          <TableCell><code>string</code> or <code>number</code> or <code>array (4 * string)</code> or <code>array (4 * number)</code></TableCell>
          <TableCell><code>'fluid'</code></TableCell>
          <TableCell colSpan={3}>width of the column (single value means fixed size, array of values means different size based on device width - <code>'fluid'</code>, number between <code>0</code> and <code>1</code> (exclusive), number between <code>1</code> and <code>12</code> (inclusive), any valid width, including using CSS variables)</TableCell>
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

export default GridDocs;
