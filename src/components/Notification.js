import React from 'react';
import { normalizeChildren } from '../utilities/utils';
import useTimeout from '../utilities/useTimeout';

const Notification = ({
  color = 'plain',
  size = 'normal',
  textAlign = 'center',
  active = true,
  duration = 3000,
  id,
  className,
  children
}) => {
  duration = duration >= 500 ? duration : 500;
  const [isActive, setIsActive] = React.useState(active);
  const [isAlmostInactive, setIsAlmostInactive] = React.useState(false);
  const [isInactive, setIsInactive] = React.useState(false);
  let classNames = [className, `text-${textAlign}`];
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  useTimeout(() => {
    setIsActive(false);
  }, duration);
  useTimeout(() => {
    setIsAlmostInactive(true);
  }, duration - 300);
  useTimeout(() => {
    setIsAlmostInactive(false);
    setIsInactive(true);
  }, duration - 50);
  return (
    isActive
      ? <div
        className={['notification', ...classNames, isAlmostInactive ? 'almost-inactive' : '', isInactive ? 'inactive' : ''].join(' ').trim()}
        id={id}
      >
        {children}
      </div>
      : null
  );
};

const NotificationCenter = React.forwardRef(
  ({
    verticalPosition = 'top',
    horizontalPosition = 'right',
    id,
    className,
    children
  }, ref) => {
    children = normalizeChildren(children);
    const notifications = children.filter(item => Notification.name === item.type.name);
    let [__content, __setContent] = React.useState(notifications);
    React.useImperativeHandle(ref, () => ({
      addNotification: (content) => {
        content = normalizeChildren(content);
        const notifications = content.filter(item => Notification.name === item.type.name);
        __setContent([...__content, notifications]);
      }
    }));
    React.useEffect(() => {
      __setContent(__content.filter(v => v !== null));
    });
    return (
      <div className={['notification-center', verticalPosition, horizontalPosition, className].join(' ').trim()} id={id} >
        {__content.filter(v => v !== null)}
      </div>
    );
  }
);

export {NotificationCenter, Notification};
