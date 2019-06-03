import React from 'react';
import { normalizeChildren } from '../utilities/utils';
import Button from './Button';

const TabItem = ({ id, className, children, ...rest }) => (
  <span id={id} className={['tab-item', className].join(' ').trim()} {...rest}>
    {children}
  </span>
);

const Tab = ({
  openIndex = 0,
  controlStyle = 'normal',
  id,
  className,
  children,
  ...rest
}) => {
  const [openTab, setOpenTab] = React.useState(openIndex);
  children = normalizeChildren(children);
  let tabs = children.filter(item => TabItem.name === item.type.name);
  let tabsButtons = tabs.map((v, i) => {
    let _tB = Object.assign({}, (<Button>{v.props.title}</Button>));
    _tB.props = Object.assign({
      onClick: function (e) {
        e.preventDefault();
        setOpenTab(i);
        typeof v.props.onClick === 'function' && v.props.onClick(e);
      },
      className: [v.props.className, openTab === i ? 'selected' : ''].join(' ').trim()
    }, v.props, _tB.props);
    return _tB;
  });
  let tabsContent = tabs.map((v, i) => {
    let _tC = Object.assign({}, (<div>{v.props.children}</div>));
    _tC.props = Object.assign({
      isOpen: openTab === i,
      className: [v.props.className, openTab === i ? 'open' : ''].join(' ').trim()
    }, v.props);
    return _tC;
  });
  let classNames = [className, 'tab-container'];
  return (
    <div id={id} className={classNames.join(' ').trim()} {...rest}>
      <div className={['tab-controls', controlStyle !== 'normal' ? controlStyle : ''].join(' ').trim()}>{tabsButtons}</div>
      <div className='tab-content'>{tabsContent}</div>
    </div>
  );
};

export {Tab, TabItem};
