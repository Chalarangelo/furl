import React from 'react';
import { normalizeChildren, combineClassNames } from '../utilities/utils';

const StepItem = ({ selected = false, className, children, ...rest }) => (
  <span className={['step-item', selected ? 'selected' : '', className].join(' ').trim()} {...rest}>
    <span className='step-content'>{children}</span>
  </span>
);

const Step = ({
  alignment = 'horizontal',
  className,
  children,
  ...rest
}) => {
  let steps = normalizeChildren(children).filter(item => StepItem.name === item.type.name);
  if (steps.every(x => !x.props.selected)) {
    steps[0] = Object.assign({}, steps[0]);
    steps[0].props = Object.assign({ selected: true }, steps[0].props);
  }
  let classNames = [className, 'step', alignment === 'vertical' ? 'vertical' : ''];
  return (
    <nav className={combineClassNames(classNames)} role='presentation' {...rest}>
      {steps}
    </nav>
  );
};

export { Step, StepItem };
