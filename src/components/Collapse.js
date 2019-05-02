import React from "react";
import Icon from "./Icon";

const Collapse = ({
  isOpen = false,
  onClick,
  title,
  id,
  className,
  children }) => {
  let classNames = ["collapse", className];
  return (
    <details className={classNames.join(' ').trim()} id={id !== undefined ? id : false} open={isOpen}>
      <summary onClick={onClick}>{title}
        <Icon name='chevron-down' width={16} height={16}/>
      </summary>
      <div className="collapse-content">
        {children}
      </div>
    </details>
  )
};

export default Collapse;