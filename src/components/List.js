import React from "react";

const List = ({ data, id, className, render = (v) => <li>{v}</li>}) => (
  <ul id={id !== undefined ? id : false} className = { className }>
    {data.map(render)}
  </ul>
);

export default List;