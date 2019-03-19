import React from "react";

const List = ({ data, id, render = (v) => <li>{v}</li>}) => (
  <ul id={id !== undefined ? id : false}>
    {data.map(render)}
  </ul>
);

export default List;