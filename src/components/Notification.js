import React from "react";
import { normalizeChildren } from "../utilities/utils";
import useTimeout from "../utilities/useTimeout";

const Notification = ({
  color = 'normal',
  size = 'normal',
  active = true,
  duration = 3000,
  id,
  className,
  children
}) => {
  const [isActive, setIsActive] = React.useState(active);
  useTimeout(() => {
    setIsActive(false);
  }, duration);
  return (
    isActive ?
    <div
      className={['notification', className].join(' ').trim()}
      id={id !== undefined ? id : false} 
    >
      {children}
    </div>
    : null
  );
}

const NotificationCenter = React.forwardRef(
  ({isOpen = false, id, className, children}, ref) => {
    children = normalizeChildren(children);
    const notifications = children.filter(item => Notification.name === item.type.name);
    let [__content, __setContent] = React.useState(notifications);
    React.useImperativeHandle(ref, () => ({
      addNotification: (content) => {
        content = normalizeChildren(content);
        const notifications = content.filter(item => Notification.name === item.type.name);
        __setContent([...__content, content]);
      }
    }));
    React.useEffect(() => {
      __setContent(__content.filter(v => v !== null));
    })
    return (
      <div className={['notification-center', className].join(' ').trim()} id={id !== undefined ? id : false} >
        {__content.filter(v => v !== null)}
      </div>
    )
  }
);

export {NotificationCenter, Notification};