import React from 'react';
import { normalizeChildren, generateUniqueId, combineClassNames, omitProps, combineStyles } from '../utilities/utils';
import Button from './Button';

const TabItem = ({ className, children, ...rest }) => (
  <div 
    className={['tab-item', className].join(' ').trim()}
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {children}
  </div>
);

const Tab = ({
  openIndex = 0,
  controlStyle = 'normal',
  className,
  children,
  ...rest
}) => {
  const [openTab, setOpenTab] = React.useState(openIndex);
  const [tabsId, setTabsId] = React.useState(generateUniqueId('tab'));
  let tabs = normalizeChildren(children).filter(item => TabItem.name === item.type.name);
  let tabsButtons = tabs.map((v, i) => {
    let _tB = Object.assign({}, (<Button key={`${tabsId}-b-${i}`}>{v.props.title}</Button>));
    _tB.props = Object.assign({
      onClick: function (e) {
        e.preventDefault();
        setOpenTab(i);
        typeof v.props.onClick === 'function' && v.props.onClick(e);
      },
      className: combineClassNames([v.props.className, openTab === i ? 'selected' : '']),
      id: `${tabsId}-button-${v.props.id ? v.props.id : i}`,
      role: 'tab',
      'aria-controls': `${tabsId}-content-${v.props.id ? v.props.id : i}`
    }, v.props, _tB.props);
    return _tB;
  });
  let tabsContent = tabs.map((v, i) => {
    let _tC = Object.assign({}, (<div key={`${tabsId}-c-${i}`}>{v.props.children}</div>));
    _tC.props = Object.assign({
      className: combineClassNames([v.props.className, openTab === i ? 'open' : '']),
      id: `${tabsId}-content-${v.props.id ? v.props.id : i}`,
      role: 'tabpanel',
      'aria-labelledby': `${tabsId}-button-${v.props.id ? v.props.id : i}`
    }, v.props);
    return _tC;
  });
  let classNames = [className, 'tab-container'];
  return (
    <div 
      className={combineClassNames(classNames)}
      style={combineStyles(rest, rest.style)}
      {...omitProps(rest)}
    >
      <div className={combineClassNames(['tab-controls', controlStyle !== 'normal' ? controlStyle : ''])}>{tabsButtons}</div>
      <div className='tab-content'>{tabsContent}</div>
    </div>
  );
};

export {Tab, TabItem};
