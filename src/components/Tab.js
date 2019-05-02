import React from "react";
import { normalizeChildren } from "../utilities/utils";
import Button from "./Button";

const TabItem = ({ id, className, children }) => (
  <span id={id !== undefined ? id : false} className={['tab-item', className].join(' ').trim()}>
    {children}
  </span>
);

const Tab = ({
  openIndex = 0,
  id,
  className,
  children
}) => {
  const [openTab, setOpenTab] = React.useState(openIndex);
  children = normalizeChildren(children);
  let tabs = children.filter(item => TabItem.name == item.type.name);
  let tabsButtons = tabs.map((v, i) => {
    let _tB = Object.assign({},(<Button>{v.props.title}</Button>));
    _tB.props = Object.assign({
      onClick: function(e) {
        e.preventDefault();
        console.log(i);
        setOpenTab(i);
        v.props.onClick && v.props.onClick(e);
      },
    }, v.props, _tB.props);
    return _tB;
  });
  let tabsContent = tabs.map((v,i) => {
    let _tC = Object.assign({},(<span>{v.props.children}</span>));
    _tC.props = Object.assign({
      isOpen: openTab == i,
      className: [v.props.className, openTab == i ? 'open' : ''].join(' ').trim()
    }, v.props);
    return _tC;
  });
  let classNames = [className, 'tab'];
  return (
    <div id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>
      {tabsButtons}
      {tabsContent}
    </div>
  );
};

export {Tab, TabItem};