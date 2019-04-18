import React from "react";
import Icon from "./Icon";

const Loader = ({ 
  color = 'normal',
  id, 
  className 
}) => (
  <Icon
    name="circle"
    className={['loader', color !== 'normal' ? color : '', className].join(' ').trim()}
    id={id !== undefined ? id : false}
  />
);

export default Loader;