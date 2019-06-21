import React from 'react';
import { ButtonGroup, Button } from '../components';
import { hasKey, isUndefined, omitProps } from '../utilities/utils';

const ButtonGroupHOC = ({
  data,
  ...rest
}) => 
  isUndefined(data) ? 
    ( <ButtonGroup {...rest} /> ) :
    (
      <ButtonGroup {...rest}>
        {
          data.map((val, i) => {
            console.log(typeof val);
            let content = hasKey(val, 'content') ? val.content : val;
            return (
              <Button key={`i_${i}_${content}`} {...omitProps(val, ['content'])}>
                {content}
              </Button>
            );
          })
        }
      </ButtonGroup >
    );

export default ButtonGroupHOC;
