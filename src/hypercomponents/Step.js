import React from 'react';
import { Step, StepItem } from '../components';
import { isUndefined, hasKey, omitProps } from '../utilities/utils';

const StepsHOC = ({
  data,
  ...rest
}) =>
  isUndefined(data) ?
    (<Step {...rest} />) :
    (
      <Step {...rest}>
        {data.map((val, i) => {
          let content = hasKey(val, 'content') ? val.content : val;
          return (
            <StepItem key={`i_${i}_${content}`} {...omitProps(val, ['content'])}>
              {content}
            </StepItem>
          );
        })}
      </Step>
    );

export default StepsHOC;
