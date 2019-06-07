import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';
import Content from './Content';
import { Sidebar, SidebarTab } from './Sidebar';
import Header from './Header';
import LayoutStyle from '../utilities/LayoutStyle';

const Layout = ({
  header = ['top', 'top', 'top', 'top'], // top, bottom, none
  sidebar = ['left', 'left', 'left', 'left'], // left, right, none
  contentSize = [1.0, 1.0, 0.75, 0.8],
  className,
  children,
  ...rest
}) => {
  let _children = normalizeChildren(children);
  if (!Array.isArray(header)) header = [header, header, header, header];
  if (!Array.isArray(sidebar)) sidebar = [sidebar, sidebar, sidebar, sidebar];
  if (!Array.isArray(contentSize)) contentSize = [contentSize, contentSize, contentSize, contentSize];
  const headerEl = _children.filter(item => Header.name === item.type.name)[0];
  const sidebarEl = _children.filter(item => Sidebar.name === item.type.name)[0];
  const contentEl = _children.filter(item => Content.name === item.type.name)[0];
  const layoutName = `layout-${header.map(v => v[0]).join('')}-${sidebar.map(v => v[0]).join('')}-${contentSize.map(v => `${v}`.replace('.', '')).join('-')}`;
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  return (
    <>
      <style>
        {LayoutStyle(layoutName, header, sidebar, contentSize)}
      </style>
      <div
        className={combineClassNames(['layout-container', className, layoutName, sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'])} {...rest}>
        {headerEl}
        {sidebarEl}
        {contentEl}
        <SidebarTab open={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
      </div>
    </>
  );
};

export {Layout, Content, Sidebar, Header};
