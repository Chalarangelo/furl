import React from "react";
import Hyperlink from "../components/Hyperlink";

const Type = props => (
  <div>
    <h2>Typography</h2>
    <p>Using a typographic scale and great fonts can help communicate content more efficiently, while making design easier.</p>
    <p>Typography presets are fully customizable via the use of variables. You can easily alter the fonts used and the type scale's presets as desired.</p>
    <h3>Fonts</h3>
    <p>Furl relies upon a 3-font system to provide a great user experience, well-tailored for any type of device and content. Apart from customizable fonts, a native font stack is used as a fallback.</p>
    <Table>
      <TableCaption>Font variables</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Font sample</TableCell>
          <TableCell heading>Variable name</TableCell>
          <TableCell heading>Default value</TableCell>
          <TableCell heading>Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><span className="font-a">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--font-a</code></TableCell>
          <TableCell><code>Roboto</code></TableCell>
          <TableCell>The primary font family. Used in most places.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-b">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--font-b</code></TableCell>
          <TableCell><code>Open Sans</code></TableCell>
          <TableCell>The secondary font family. Used mainly in headings and titles.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-c">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--font-c</code></TableCell>
          <TableCell><code>Roboto Mono</code></TableCell>
          <TableCell>The code font family. Used in code elements.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    {/* TODO: Update this to be a sort of alert panel when we get this kind of component added. */}
    <p><strong>Note:</strong> The default fonts will not be loaded automatically. Instead, it's the developer's responsibility to load all the necessary fonts (including the default ones) in their application.</p>
    <p>Shown below is a sample link with all the necessary fonts imported via Google Fonts' CDN, which you can include in your application:</p>
    <pre>&lt;link
  href=&quot;https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i|Roboto+Mono:400,400i,500,500i&quot;
  rel=&quot;stylesheet&quot;&gt;</pre>
    <h3>Type Scale</h3>
    <p>Furl uses a 11-step typographic scale with handcrafted defaults that work for any type of content.</p>
    <Table>
      <TableCaption>Type scale variables</TableCaption>
      <TableHead>
        <TableCell heading>Scale sample</TableCell>
        <TableCell heading>Variable name</TableCell>
        <TableCell heading>Default value</TableCell>
        <TableCell heading>Description</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><span className="font-ts-25p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-25p</code></TableCell>
          <TableCell><code>12px</code></TableCell>
          <TableCell>Smallest font size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-50p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-50p</code></TableCell>
          <TableCell><code>14px</code></TableCell>
          <TableCell>Smaller font size. Used mainly in <code>&lt;small&gt;</code> elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-100p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-100p</code></TableCell>
          <TableCell><code>16px</code></TableCell>
          <TableCell>Base font size (<code>1rem</code>). Used in most places.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-200p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-200p</code></TableCell>
          <TableCell><code>18px</code></TableCell>
          <TableCell>Larger font size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-300p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-300p</code></TableCell>
          <TableCell><code>20px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h6&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-400p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-400p</code></TableCell>
          <TableCell><code>24px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h5&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-500p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-500p</code></TableCell>
          <TableCell><code>30px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h4&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-600p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-600p</code></TableCell>
          <TableCell><code>36px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h3&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-700p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-700p</code></TableCell>
          <TableCell><code>48px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h2&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-800p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-800p</code></TableCell>
          <TableCell><code>60px</code></TableCell>
          <TableCell>Heading font size. Used in <code>&lt;h1&gt;</code>elements.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><span className="font-ts-900p">Lorem ipsum dolor sit amet</span></TableCell>
          <TableCell><code>--ts-900p</code></TableCell>
          <TableCell><code>72px</code></TableCell>
          <TableCell>Main heading font size.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <p><strong>Note:</strong> The default step values above correspond to the calculated values of converting the <code>rem</code> value of each step to <code>px</code>.</p>
    {/* TODO: Probably missing a few important notes about font colro variants and some other things, like weights etc, but those can be incorporated in the typographic component/module. */}
  </div>
);

export default Type;
