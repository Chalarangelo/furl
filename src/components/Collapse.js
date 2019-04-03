import React from "react";

const Collapse = ({
  isOpen = false,
  title,
  id,
  className,
  children }) => {
  let classNames = ["collapse", className];
  return (
    <details className={classNames.join(' ').trim()} id={id !== undefined ? id : false} open={isOpen}>
      <summary>{title}
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9l-6 6M12 15L6 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </summary>
      <div className="collapse-content">
        {children}
      </div>
    </details>
  )
};

export default Collapse;