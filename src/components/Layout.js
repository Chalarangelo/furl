import React from "react";
import Content from "./Content";
import { Sidebar, SidebarTab } from "./Sidebar";
import Header from "./Header";
import LayoutStyle from "./LayoutStyle";

const Layout = ({
  header = 'top', // top, bottom, none
  sidebar = 'left', // left, right, none
  contentSize = [1.0, 1.0, 0.75, 0.8],
  id,
  children
}) => {
  if (!Array.isArray(children)) children = children;
  const headerEl = children.filter(item => Header.name == item.type.name)[0];
  const sidebarEl = children.filter(item => Sidebar.name == item.type.name)[0];
  const contentEl = children.filter(item => Content.name == item.type.name)[0];
  const layoutName = `layout-${header}-${sidebar}-${contentSize.map(v => `${v}`.replace('.','')).join('-')}`;
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  return (
    <React.Fragment>
      <style>
        {LayoutStyle(layoutName,header,sidebar,contentSize)}
      </style>
      <div 
      id={id !== undefined ? id : false} className={['layout-container', layoutName, sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'].join(' ')}>
        {headerEl}
        {sidebarEl}
        {contentEl}
        <SidebarTab open={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)}/>
      </div>
    </React.Fragment>
  );
}

export {Layout, Content, Sidebar, Header};