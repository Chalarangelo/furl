import React from 'react';
import { ButtonGroup, Button } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const ButtonGroupHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <ButtonGroup {...props} />
    );

  let data = props.data;

  return (
    <ButtonGroup {...omitProps(props, ['data'])}>
      {data.map((val, i) => {
        console.log(typeof val);
        let content = hasKey(val, 'content') ? val.content : val;
        return (
          <Button key={`i_${i}_${content}`} {...omitProps(val, ['content'])}>
            {content}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ButtonGroupHOC;
