import React from "react";

const Dropdown = ({
  disabled = false,
  id,
  isOpen = false,
  text,
  reverse = false,
  className,
  children }) => {
  let classNames = ["dropdown", reverse ? "reverse" : "", className];
  return (
    <details className={classNames.join(' ').trim()} id={id !== undefined ? id : false} open={isOpen}>
      <summary>{text}
      {reverse ? 
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15l-6-6M12 9l-6 6" stroke="currentColor" strokeWidth="2.5" stroke-Linecap="round" strokeLinejoin="round"/></svg>
      :
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9l-6 6M12 15L6 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      }
      </summary>
      <div className="dropdown-content">
        {children}
      </div>
    </details>
  )
};

export default Dropdown;