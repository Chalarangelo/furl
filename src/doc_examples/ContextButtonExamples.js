import React from 'react';
import { ContextButton, Icon } from '../lib';

const ContextButtonExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <ContextButton 
      verticalPosition='bottom' horizontalPosition='right' color='primary'
      style={{
        position: 'relative'
      }}
    >
      <Icon name='plus' />
    </ContextButton>
  </div>
);

export default ContextButtonExamples;