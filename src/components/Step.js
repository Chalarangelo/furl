import React from "react";
import { normalizeChildren } from "../utilities/utils";
import StepItem from "./StepItem";

const Step = ({
  separator = '/',
  id,
  className,
  children
}) => {
  children = normalizeChildren(children);
  let steps = children.filter(item => StepItem.name == item.type.name);
  // steps = steps.reduce((acc, v, i) => {
  //   acc.push(v);
  //   if (i !== steps.length - 1) acc.push(<span className='step-separator'>{separator}</span>);
  //   return acc;
  // }, []);
  let classNames = [className, 'step'];
  return (
    <nav id={id !== undefined ? id : false} className={classNames.join(' ').trim()}>
      {steps}
    </nav>
  );
};

export { Step, StepItem };