import React from 'react';
import { Card, CardSection } from '../components';
import { hasKey, omitProps } from '../utilities/utils';

const CardHOC = (props) => {
  if (!hasKey(props, 'data'))
    return (
      <Card {...props}/>
    );

  let data = props.data;
  console.log(data);

  return (
    <Card {...omitProps(props, ['data'])}>
      {data.map((val, i) => {
        let children = hasKey(val, 'content') ? val.content : hasKey(val, 'children') ? val.children : val;
        return (
          <CardSection {...omitProps(val, ['content', 'children'])} key={`sc_${i}`} >
            {children}
          </CardSection>
        )
      })}
    </Card>
  );
};

export default CardHOC;
