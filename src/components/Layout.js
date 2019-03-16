import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LayoutStyle from "./LayoutStyle";

const Layout = ({
  header = 'top', // top, bottom, none
  sidebar = 'left', // left, right, none
  contentSize = [1.0, 1.0, 0.75, 0.8],
  children
}) => {
  const items = children.filter(item => [Content.name, Sidebar.name, Header.name].includes(item.type.name));
  const layoutName = `layout-${header}-${sidebar}-${contentSize.map(v => `${v}`.replace('.','')).join('-')}`;
  return (
    <React.Fragment>
      <style>
        {LayoutStyle(layoutName,header,sidebar,contentSize)}
      </style>
      <div className={['layout-container', layoutName].join(' ')}>
        {items}
      </div>
    </React.Fragment>
  );
}

export {Layout, Content, Sidebar, Header};