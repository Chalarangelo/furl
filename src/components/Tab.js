import React from 'react';
import { normalizeChildren, generateUniqueId } from '../utilities/utils';
import Button from './Button';

const TabItem = ({ id, className, children, ...rest }) => (
  <div id={id} className={['tab-item', className].join(' ').trim()} {...rest}>
    {children}
  </div>
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
  const [tabsId, setTabsId] = React.useState(generateUniqueId('tab'));
  children = normalizeChildren(children);
  let tabs = children.filter(item => TabItem.name === item.type.name);
  let tabsButtons = tabs.map((v, i) => {
    let _tB = Object.assign({}, (<Button key={`${tabsId}-b-${i}`}>{v.props.title}</Button>));
    _tB.props = Object.assign({
      onClick: function (e) {
        e.preventDefault();
        setOpenTab(i);
        typeof v.props.onClick === 'function' && v.props.onClick(e);
      },
      className: [v.props.className, openTab === i ? 'selected' : ''].join(' ').trim(),
      id: `${tabsId}-button-${v.props.id ? v.props.id : i}`,
      role: 'tab',
      'aria-controls': `${tabsId}-content-${v.props.id ? v.props.id : i}`
    }, v.props, _tB.props);
    return _tB;
  });
  let tabsContent = tabs.map((v, i) => {
    let _tC = Object.assign({}, (<div key={`${tabsId}-c-${i}`}>{v.props.children}</div>));
    _tC.props = Object.assign({
      className: [v.props.className, openTab === i ? 'open' : ''].join(' ').trim(),
      id: `${tabsId}-content-${v.props.id ? v.props.id : i}`,
      role: 'tabpanel',
      'aria-labelledby': `${tabsId}-button-${v.props.id ? v.props.id : i}`
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
