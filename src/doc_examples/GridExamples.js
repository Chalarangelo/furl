import React from 'react';
import { Grid, Row, Column as Col } from '../lib';

const GridExamples = (props) => (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <style>{`.box-colored {background: #2C8CF1;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col size={1}><div className='box-colored'>1</div></Col>
        <Col size={11}><div className='box-colored'>11</div></Col>
      </Row>
      <Row>
        <Col size={2}><div className='box-colored'>2</div></Col>
        <Col size={10}><div className='box-colored'>10</div></Col>
      </Row>
      <Row>
        <Col size={3}><div className='box-colored'>3</div></Col>
        <Col size={9}><div className='box-colored'>9</div></Col>
      </Row>
      <Row>
        <Col size={4}><div className='box-colored'>4</div></Col>
        <Col size={8}><div className='box-colored'>8</div></Col>
      </Row>
      <Row>
        <Col size={5}><div className='box-colored'>5</div></Col>
        <Col size={7}><div className='box-colored'>7</div></Col>
      </Row>
      <Row>
        <Col size={6}><div className='box-colored'>6</div></Col>
        <Col size={6}><div className='box-colored'>6</div></Col>
      </Row>
      <Row>
        <Col><div className='box-colored'>fluid</div></Col>
        <Col><div className='box-colored'>fluid</div></Col>
        <Col><div className='box-colored'>fluid</div></Col>
        <Col><div className='box-colored'>fluid</div></Col>
        <Col><div className='box-colored'>fluid</div></Col>
      </Row>
      <Row>
        <Col size={0.23}><div className='box-colored'>23%</div></Col>
        <Col size={0.17}><div className='box-colored'>17%</div></Col>
        <Col size={0.11}><div className='box-colored'>11%</div></Col>
        <Col size={0.49}><div className='box-colored'>49%</div></Col>
      </Row>
    </Grid>
  </div>
);

export default GridExamples;