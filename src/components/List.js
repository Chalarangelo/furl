import React from "react";

const List = ({ data, render = (v) => <li>{v}</li>}) => (
  <ul>
    {data.map(render)}
  </ul>
);

export default List;