import React from 'react';
import {normalizeChildren} from '../utilities/utils';
import Content from './Content';
import { Sidebar, SidebarTab } from './Sidebar';
import Header from './Header';
import LayoutStyle from '../utilities/LayoutStyle';

const Layout = ({
  header = ['top', 'top', 'top', 'top'], // top, bottom, none
  sidebar = ['left', 'left', 'left', 'left'], // left, right, none
  contentSize = [1.0, 1.0, 0.75, 0.8],
  id,
  className,
  children,
  ...rest
}) => {
  children = normalizeChildren(children);
  if (!Array.isArray(header)) header = [header, header, header, header];
  if (!Array.isArray(sidebar)) sidebar = [sidebar, sidebar, sidebar, sidebar];
  if (!Array.isArray(contentSize)) contentSize = [contentSize, contentSize, contentSize, contentSize];
  const headerEl = children.filter(item => Header.name === item.type.name)[0];
  const sidebarEl = children.filter(item => Sidebar.name === item.type.name)[0];
  const contentEl = children.filter(item => Content.name === item.type.name)[0];
  const layoutName = `layout-${header.map(v => v[0]).join('')}-${sidebar.map(v => v[0]).join('')}-${contentSize.map(v => `${v}`.replace('.', '')).join('-')}`;
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  return (
    <React.Fragment>
      <style>
        {LayoutStyle(layoutName, header, sidebar, contentSize)}
      </style>
      <div
        id={id} className={['layout-container', className, layoutName, sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'].join(' ').trim()} {...rest}>
        {headerEl}
        {sidebarEl}
        {contentEl}
        <SidebarTab open={sidebarVisible} onClick={() => setSidebarVisible(!sidebarVisible)} />
      </div>
    </React.Fragment>
  );
};

export {Layout, Content, Sidebar, Header};
