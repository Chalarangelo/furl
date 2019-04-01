import React from "react";
import Hyperlink from "../components/Hyperlink";
import {Table, TableCaption, TableHead, TableBody, TableRow, TableCell} from "../components/Table";

const Layout = props => (
  <div>
    <h2>Layout</h2>
    <p>Responsive layouts, based on a spacing scale can help create natural and easily scannable user interfaces.</p>
    <p>Layout presets are fully customizable via the use of variables. You can easily alter the spacing as desired.</p>
    <h3>Spacing Scale</h3>
    <p>Furl uses a 17-step spacing scale with handcrafted defaults that work for any combination of device size and content.</p>
    <Table className="fixed-table">
      <TableCaption>Spacing scale variables</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Variable name</TableCell>
          <TableCell heading>Default value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><code>--ls-0p</code></TableCell>
          <TableCell><code>0px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-25p</code></TableCell>
          <TableCell><code>4px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-50p</code></TableCell>
          <TableCell><code>8px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-75p</code></TableCell>
          <TableCell><code>12px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-100p</code></TableCell>
          <TableCell><code>16px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-150p</code></TableCell>
          <TableCell><code>24px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-200p</code></TableCell>
          <TableCell><code>32px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-250p</code></TableCell>
          <TableCell><code>48px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-300p</code></TableCell>
          <TableCell><code>64px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-350p</code></TableCell>
          <TableCell><code>96px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-400p</code></TableCell>
          <TableCell><code>128px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-450p</code></TableCell>
          <TableCell><code>192px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-500p</code></TableCell>
          <TableCell><code>256px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-600p</code></TableCell>
          <TableCell><code>384px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-700p</code></TableCell>
          <TableCell><code>512px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-800p</code></TableCell>
          <TableCell><code>640px</code></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><code>--ls-900p</code></TableCell>
          <TableCell><code>768px</code></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p><strong>Note:</strong> The default step values above correspond to the calculated values of converting the <code>rem</code> value of each step to <code>px</code>.</p>
    {/* TODO: Probably missing a few important notes about font colro variants and some other things, like weights etc, but those can be incorporated in the typographic component/module. */}
  </div>
);

export default Layout;
