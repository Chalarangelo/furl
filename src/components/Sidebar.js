import React from "react";

const Sidebar = ({ children }) => {
  return (<aside className='layout-sidebar'>{children}</aside>);
}

const SidebarTab = ({open, onClick}) => 
  open 
  ? <React.Fragment>
      <button className="layout-sidebar-tab" onClick={ onClick }>
        < svg width = "24" height = "24" fill = "none" xmlns = "http://www.w3.org/2000/svg" > <path d="M18 6L6 18M18 18L6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div class="layout-sidebar-overlay"></div>
    </React.Fragment>
  : 
  <button className="layout-sidebar-tab" onClick={onClick}>
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M21 6H3M21 18H3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokLinejoin="round" /></svg>
  </button>
;

export {Sidebar, SidebarTab};