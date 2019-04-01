import React from "react";
import Hyperlink from "../components/Hyperlink";
import { Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from "../components/Table";

const ImageDocs = props => (
  <div>
    <h2>Image</h2>
    <p>Images provide visual stimulation to the users and help provide context for the textual content around them.</p>
    <h3>Examples</h3>
    {/* TODO: Add component demo */}
    <h3>API</h3>
    <p>Images are very easy to use and expose certain important layout properties.</p>
    <Table className="fixed-table">
      <TableCaption>Image props</TableCaption>
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
          <TableCell><code>src</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell>-</TableCell>
          <TableCell colSpan={3}>url source of the image</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>alt</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'an image'</code></TableCell>
          <TableCell colSpan={3}>alternative text</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>width</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'auto'</code></TableCell>
          <TableCell colSpan={3}>width of the image</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>height</code></TableCell>
          <TableCell><code>string</code></TableCell>
          <TableCell><code>'auto'</code></TableCell>
          <TableCell colSpan={3}>height of the image</TableCell>
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
      </TableBody>
    </Table>
  </div>
);

export default ImageDocs;
