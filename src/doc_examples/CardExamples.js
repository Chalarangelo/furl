import React from 'react';
import { Card, CardSection, Button } from '../lib';

const CardExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Card width={320} style={{margin: 'var(--margin-vertical) auto'}}>
      <CardSection>
        <h5>Cool mountains<small>Just look at them</small></h5>
      </CardSection>
      <CardSection media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' height={200} />
      <CardSection>
        <p>This is a lovely image of some mountain scenery.</p>
      </CardSection>
      <Button>I want to visit the mountains</Button>
    </Card>
  </div>
);

export default CardExamples;