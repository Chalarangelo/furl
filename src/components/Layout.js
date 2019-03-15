import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({children}) => {
  const items = children.filter(item => [Content.name, Sidebar.name, Header.name].includes(item.type.name));
  return (
    <div className='layout-container'>
      {items}
    </div>
  );
}

export {Layout, Content, Sidebar, Header};