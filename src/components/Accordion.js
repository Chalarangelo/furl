import React from "react";
import { normalizeChildren } from "../utilities/utils";
import Collapse from "./Collapse";

const Accordion = ({
  openIndex = 0,
  id,
  className,
  children }) => {
  const [openSection, setOpenSection] = React.useState(openIndex);
  const collapses = children.filter(item => Collapse.name == item.type.name)
    .map((c,i) => {
      let _c = Object.assign({}, c);
      _c.props = Object.assign({
        onClick: function(e) {
          e.preventDefault();
          setOpenSection(i);
          console.log(JSON.stringify({
            openSection: openSection,
            i: i
          }));
          c.props.onClick && c.props.onClick(e);
        },
        isOpen: openSection == i
      }, c.props);
      return _c;
    });
    return (<React.Fragment>
      {collapses}
    </React.Fragment>);
};

export default Accordion;