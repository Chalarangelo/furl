import React from "react";
import { normalizeChildren } from "../utilities/utils";

const StepItem = ({ id, selected = false, className, children }) => (
  <span id={id !== undefined ? id : false} className={['step-item', selected ? 'selected' : '', className].join(' ').trim()}>
    <span className='step-content'>{children}</span>
  </span>
);

const Step = ({
  separator = '/',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  let steps = children.filter(item => StepItem.name == item.type.name);
  console.log(steps[0].props);
  if (steps.every(x => !x.props.selected)) {
    steps[0] = Object.assign({},steps[0]);
    steps[0].props = Object.assign({selected: true }, steps[0].props);
  }
  let classNames = [className, 'step'];
  return (
    <nav id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>
      {steps}
    </nav>
  );
};

export { Step, StepItem };