import React from 'react';
import { Step, StepItem } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const StepsHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Step {...props} />
    );

  let data = props.data;

  return (
    <Step {...omitProps(props, ['data'])}>
      {data.map((val, i) => {
        console.log(typeof val);
        let content = hasKey(val, 'content') ? val.content : val;
        return (
          <StepItem key={`i_${i}_${content}`} {...omitProps(val, ['content'])}>
            {content}
          </StepItem>
        );
      })}
    </Step>
  );
};

export default StepsHOC;
