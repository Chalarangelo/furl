import React from 'react';
import { normalizeChildren } from '../utilities/utils';
import Collapse from './Collapse';

const Accordion = ({
  openIndex = 0,
  fill = 'solid',
  id,
  className,
  children,
  ...rest }) => {
  const [openSection, setOpenSection] = React.useState(openIndex);
  const collapses = normalizeChildren(children).filter(item => Collapse.name === item.type.name)
    .map((c, i) => {
      let _c = Object.assign({}, c);
      _c.props = Object.assign({
        onClick: function (e) {
          e.preventDefault();
          setOpenSection(openSection === i ? -1 : i);
          typeof c.props.onClick === 'function' && c.props.onClick(e);
        },
        isOpen: openSection === i,
        className: [c.props.className, 'accordion-section', fill !== 'solid' ? fill : ''].join(' ').trim()
      }, c.props);
      return _c;
    });
  return (<div className={['accordion', className].join(' ').trim()} id={id} {...rest}>
    {collapses}
  </div>);
};

export default Accordion;
