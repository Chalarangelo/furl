import React from 'react';
import { Grid, Row, Column as Col } from '../lib';

const LayoutExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <style>{`.box-colored {background: #2C8CF1;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;min-height: 0.875rem;color: #f8f8f8;} .box-colored.content { background: #70BCFA}`}</style>
    <Grid>
      <Row>
        <Col size={12}><div className='box-colored'>Header</div></Col>
      </Row>
      <Row>
        <Col size={3}><div className='box-colored' style={{height: '200px', paddingTop: '92px'}}>Sidebar</div></Col>
        <Col size={9}><div className='box-colored content' style={{height: '200px', paddingTop: '92px'}}>Content</div></Col>
      </Row>
    </Grid>
  </div>
);

export default LayoutExamples;