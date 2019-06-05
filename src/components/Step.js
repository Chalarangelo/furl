import React from 'react';
import { normalizeChildren } from '../utilities/utils';

const StepItem = ({ id, selected = false, className, children, ...rest }) => (
  <span id={id} className={['step-item', selected ? 'selected' : '', className].join(' ').trim()} {...rest}>
    <span className='step-content'>{children}</span>
  </span>
);

const Step = ({
  id,
  alignment = 'horizontal',
  className,
  children,
  ...rest
}) => {
  children = normalizeChildren(children);
  let steps = children.filter(item => StepItem.name === item.type.name);
  if (steps.every(x => !x.props.selected)) {
    steps[0] = Object.assign({}, steps[0]);
    steps[0].props = Object.assign({ selected: true }, steps[0].props);
  }
  let classNames = [className, 'step', alignment === 'vertical' ? 'vertical' : ''];
  return (
    <nav id={id} className={classNames.join(' ').trim()} role='presentation' {...rest}>
      {steps}
    </nav>
  );
};

export { Step, StepItem };
