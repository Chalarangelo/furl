import React from "react";

const Type = props => (
  <div>
    <h2>Title level 2 <small>Subtitle level 2</small></h2>
    <p>Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit. Sed ultrices sem ante, porta porta lorem porttitor in. Curabitur sagittis accumsan lorem, a consequat dui sodales pulvinar. Morbi a venenatis massa, non congue risus. Ut tellus nunc, <em>ultrices vitae ultricies</em> a, viverra eu libero. In quis sapien in felis tempus tincidunt sit amet vel augue. Integer sapien mi, pellentesque pellentesque consequat in, rhoncus id risus. In eu tortor eu orci malesuada viverra ac vitae sem. Pellentesque nec venenatis urna. Fusce et nisi volutpat, accumsan justo at, malesuada nisi. <a href="https://nonono.com">Quisque</a> tincidunt arcu eget bibendum faucibus. Aliquam massa metus, bibendum eget diam quis, facilisis <code>ultricies libero</code>. Aenean laoreet nulla ut varius laoreet. Fusce vel tortor vitae lacus feugiat sodales sit <kbd>amet</kbd> eu enim. Donec rhoncus nunc faucibus nunc eleifend, non tincidunt dolor suscipit. Duis efficitur enim ut velit accumsan mollis vel non turpis. Nunc tempus augue nibh. </p>
    <pre>
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed ultrices sem ante, porta porta lorem porttitor in.
    </pre>
    <hr/>
    <blockquote cite="Ronald Testerman">
      Integer sapien mi, pellentesque pellentesque consequat in, rhoncus id risus. In eu tortor eu orci malesuada viverra ac vitae sem.
    </blockquote>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed ultrices sem ante, porta porta lorem porttitor in. </li>
      <li>Fusce vel tortor vitae lacus feugiat sodales sit <kbd>amet</kbd> eu enim. Donec rhoncus nunc faucibus nunc eleifend, non tincidunt dolor suscipit.</li>
      <li>Duis efficitur enim ut velit accumsan mollis vel non turpis. Nunc tempus augue nibh.</li>
    </ul>
    <ol>
      <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed ultrices sem ante, porta porta lorem porttitor in. </li>
      <li>Fusce vel tortor vitae lacus feugiat sodales sit <kbd>amet</kbd> eu enim. Donec rhoncus nunc faucibus nunc eleifend, non tincidunt dolor suscipit.</li>
      <li>Duis efficitur enim ut velit accumsan mollis vel non turpis. Nunc tempus augue nibh.</li>
    </ol>
    <h1>
    Typography <small>Yada yada yada</small>
    </h1>
    <p>Using a typographic scale and great fonts can help communicate content more efficiently, while making design easier.</p>
    <h2>Variables</h2>
    <p>Typography presets are fully customizable via the use of variables. You can easily alter the fonts used and the type scale's presets as desired.</p>
    <table className="doc-table">
      <thead>
        <tr>
          <th>Variable name</th>
          <th>Default value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--font-a</code></td>
          <td><code>Roboto</code></td>
          <td>The primary font family. Used in most places.</td>
        </tr>
        <tr>
          <td><code>--font-b</code></td>
          <td><code>Open Sans</code></td>
          <td>The secondary font family. Used mainly in headings and titles.</td>
        </tr>
        <tr>
          <td><code>--font-c</code></td>
          <td><code>Roboto Mono</code></td>
          <td>The code font family. Used in code elements.</td>
        </tr>
      </tbody>
    </table>
    {/*<h2>Loading fonts</h2>*/}
    <h2>Type Scale</h2>
    <table className="doc-table">
      <thead>
        <tr>
          <th>Scale category</th>
          <th>Typeface</th>
          <th>Font</th>
          <th>Size</th>
          <th>Letter spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h1>H1</h1></td>
          <td><code>--font-b</code></td>
          <td><code>300</code></td>
          <td><code>--ts-700p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h2>H2</h2></td>
          <td><code>--font-b</code></td>
          <td><code>300</code></td>
          <td><code>--ts-600p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h3>H3</h3></td>
          <td><code>--font-b</code></td>
          <td><code>300</code></td>
          <td><code>--ts-500p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h4>H4</h4></td>
          <td><code>--font-b</code></td>
          <td><code>300</code></td>
          <td><code>--ts-400p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h5>H5</h5></td>
          <td><code>--font-b</code></td>
          <td><code>300</code></td>
          <td><code>--ts-300p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h6>H6</h6></td>
          <td><code>--font-b</code></td>
          <td><code>400</code></td>
          <td><code>--ts-200p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Type;