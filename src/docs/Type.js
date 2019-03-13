import React from "react";

const Type = props => (
  <div>
    <h1>
    Typography <small>Yada yada yada</small>
    </h1>
    <p>Using a typographic scale and great fonts can help communicate content more efficiently, while making design easier.</p>
    {/*<h2>Variables</h2>
    <h2>Loading fonts</h2>*/}
    <h2>Type Scale</h2>
    <table className="type-scale-table">
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
          <td><code>400</code></td>
          <td><code>--ts-300p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
        <tr>
          <td><h6>H6</h6></td>
          <td><code>--font-b</code></td>
          <td><code>500</code></td>
          <td><code>--ts-200p</code></td>
          <td><code>-0.05em</code></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Type;