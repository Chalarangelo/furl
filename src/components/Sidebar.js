import React from "react";
import Icon from "./Icon";

const Sidebar = ({ id, className, outline ='none', children }) => {
  return (<aside
    id={id !== undefined ? id : false} className={[ outline !== 'none' ? outline : '', className, 'layout-sidebar'].join(' ').trim()}>{children}</aside>);
}

const SidebarTab = ({open, onClick}) => 
  open 
  ? <React.Fragment>
      <button className="layout-sidebar-tab" onClick={ onClick }>
        <Icon name="x"/>
      </button>
      <div class="layout-sidebar-overlay"></div>
    </React.Fragment>
  : 
  <button className="layout-sidebar-tab" onClick={onClick}>
        <Icon name="menu"/>
  </button>
;

export {Sidebar, SidebarTab};