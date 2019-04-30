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
    .map(c => {
      let _c = Object.assign({}, c);
      _c.props = Object.assign({
        isOpen: openSection
      }, c.props);
      return _c;
    });
    return (<React.Fragment>
      {collapses}
    </React.Fragment>);
};

export default Accordion;