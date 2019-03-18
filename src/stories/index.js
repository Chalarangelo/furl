import React from 'react';

import "../../dist/styles/index.css";

import { storiesOf } from '@storybook/react';

import { Hyperlink, Button, List, Layout, Grid, Row, Column as Col, Content, Sidebar, Header ,Card} from "../../dist/components";

storiesOf('Hyperlink', module)
  .add("internal", () => (
    <Hyperlink href="#">
      Open in same tab.
    </Hyperlink>
  )
)
  .add("blank", () => (
    <Hyperlink href="https://google.com" openIn="_blank">
      Open in new tab.
    </Hyperlink>
  )
)
  .add("external", () => (
    <Hyperlink href="https://google.com" openIn="external">
      Open in new tab with noopener noreferrer.
    </Hyperlink>
  )
)
;

storiesOf('Button', module)
  .add("normal", () => (
    <Button>
      Continue
    </Button>
  )
)
  .add("large", () => (
    <Button size='large'>
      Continue
    </Button>
  )
)
  .add("small", () => (
    <Button size='small'>
      Continue
    </Button>
  )
)
  .add("rounded", () => (
    <Button shape='rounded'>
      Continue
    </Button>
  )
)
  .add("circle", () => (
    <Button shape='circle'>
      >.
    </Button>
  )
)
  .add("uppercase", () => (
    <Button text='uppercase'>
      Continue
    </Button>
  )
)
  .add("default", () => (
    <React.Fragment>
      <Button >Continue</Button>
      <Button fill='solid'>Continue</Button>
      <Button fill='gradient'>Continue</Button>
      <Button fill='outline'>Continue</Button>
      <Button fill='ghost'>Continue</Button>
      <Button disabled>Continue</Button>
      <Button fill='gradient' disabled>Continue</Button>
      <Button fill='outline' disabled>Continue</Button>
      <Button fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("danger", () => (
    <React.Fragment>
      <Button color='danger'>Continue</Button>
      <Button color='danger' fill='solid'>Continue</Button>
      <Button color='danger' fill='gradient'>Continue</Button>
      <Button color='danger' fill='outline'>Continue</Button>
      <Button color='danger' fill='ghost'>Continue</Button>
      <Button color='danger' disabled>Continue</Button>
      <Button color='danger' fill='gradient' disabled>Continue</Button>
      <Button color='danger' fill='outline' disabled>Continue</Button>
      <Button color='danger' fill='ghost' disabled>Continue</Button>
      <Button color='danger' fill='outline' shape='rounded' text='uppercase' size='large'>Continue</Button>
    </React.Fragment>
  )
)
  .add("success", () => (
    <React.Fragment>
      <Button color='success'>Continue</Button>
      <Button color='success' fill='solid'>Continue</Button>
      <Button color='success' fill='gradient'>Continue</Button>
      <Button color='success' fill='outline'>Continue</Button>
      <Button color='success' fill='ghost'>Continue</Button>
      <Button color='success' disabled>Continue</Button>
      <Button color='success' fill='gradient' disabled>Continue</Button>
      <Button color='success' fill='outline' disabled>Continue</Button>
      <Button color='success' fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("warning", () => (
    <React.Fragment>
      <Button color='warning'>Continue</Button>
      <Button color='warning' fill='solid'>Continue</Button>
      <Button color='warning' fill='gradient'>Continue</Button>
      <Button color='warning' fill='outline'>Continue</Button>
      <Button color='warning' fill='ghost'>Continue</Button>
      <Button color='warning' disabled>Continue</Button>
      <Button color='warning' fill='gradient' disabled>Continue</Button>
      <Button color='warning' fill='outline' disabled>Continue</Button>
      <Button color='warning' fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("link", () => (
    <React.Fragment>
      <Button type="link" href="https://google.com">Continue</Button>
      <Button type="link" href="https://google.com" fill='solid'>Continue</Button>
      <Button type="link" href="https://google.com" fill='gradient'>Continue</Button>
      <Button type="link" href="https://google.com" fill='outline'>Continue</Button>
      <Button type="link" href="https://google.com" fill='ghost'>Continue</Button>
      <Button type="link" href="https://google.com" disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='gradient' disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='outline' disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
;

storiesOf('Grid', module)
  .add("Normal columns", () => (
    <React.Fragment>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col><div className="box-colored">fluid</div></Col>
      </Row>
      <Row>
        <Col><div className="box-colored">fluid</div></Col>
        <Col><div className="box-colored">fluid</div></Col>
      </Row>
      <Row>
        <Col size={1}><div className="box-colored">1</div></Col>
        <Col size={11}><div className="box-colored">11</div></Col>
      </Row>
      <Row>
        <Col size={2}><div className="box-colored">2</div></Col>
        <Col size={10}><div className="box-colored">10</div></Col>
      </Row>
      <Row>
        <Col size={3}><div className="box-colored">3</div></Col>
        <Col size={9}><div className="box-colored">9</div></Col>
      </Row>
      <Row>
        <Col size={4}><div className="box-colored">4</div></Col>
        <Col size={8}><div className="box-colored">8</div></Col>
      </Row>
      <Row>
        <Col size={5}><div className="box-colored">5</div></Col>
        <Col size={7}><div className="box-colored">7</div></Col>
      </Row>
      <Row>
        <Col size={6}><div className="box-colored">6</div></Col>
        <Col size={6}><div className="box-colored">6</div></Col>
      </Row>
    </Grid>
    </React.Fragment>
  )
)
.add("Custom-size columns", () => (
    <React.Fragment>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col size={0.23}><div className="box-colored">23%</div></Col>
        <Col size={0.28}><div className="box-colored">28%</div></Col>
        <Col size={0.49}><div className="box-colored">49%</div></Col>
      </Row>
    </Grid>
    </React.Fragment>
  )
)
.add("Responsive columns", () => (
    <React.Fragment>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col size={[0.23, 6, 12, 12]}><div className="box-colored">23%</div></Col>
        <Col size={[0.28, 6, 4, 8]}><div className="box-colored">28%</div></Col>
        <Col size={['fluid', 12, 8, 4]}><div className="box-colored">49%</div></Col>
      </Row>
    </Grid>
    </React.Fragment>
  )
)
.add("Offset columns", () => (
    <React.Fragment>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col size={0.23} offset={5}><div className="box-colored">23%</div></Col>
        <Col size={0.28} offset={[5,2,3,3]}><div className="box-colored">28%</div></Col>
        <Col size={0.49} offset={[1,2,0,0]}><div className="box-colored">49%</div></Col>
      </Row>
    </Grid>
    </React.Fragment>
  )
)
.add("Ordered columns", () => (
    <React.Fragment>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
    <Grid>
      <Row>
        <Col size={0.23} order={'normal'}><div className="box-colored">23%</div></Col>
        <Col size={0.28} order={['normal','first','normal', 'last']}><div className="box-colored">28%</div></Col>
        <Col size={0.49} order={['first','normal','last', 'last']}><div className="box-colored">49%</div></Col>
      </Row>
    </Grid>
    </React.Fragment>
  )
)
;

storiesOf('Layout', module)
  .add("Top header left sidebar", () => (
    <Layout>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Top header right sidebar", () => (
    <Layout sidebar='right'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Top header no sidebar", () => (
    <Layout sidebar='none'>
      <Header>Header</Header>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Bottom header left sidebar", () => (
    <Layout header='bottom'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Bottom header right sidebar", () => (
    <Layout header='bottom' sidebar='right'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Bottom header no sidebar", () => (
    <Layout header='bottom' sidebar='none'>
      <Header>Header</Header>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("No header left sidebar", () => (
    <Layout header='none'>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("No header right sidebar", () => (
    <Layout header='none' sidebar='right'>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
  .add("Content only", () => (
    <Layout header='none' sidebar='none'>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
;


storiesOf('List', module)
  .add("with text", () => (
    <List data={['a','b','c']}/>
  )
)
  .add("with objects", () => (
    <List data={[{a: 'a', v: 'b'}, {a: 'b', v: 'c'}]} render={({a,v}) => <li>{`${a}: ${v}`}</li>}/>
  )
)
;

storiesOf('Card', module)
  .add("with text", () => (
    <Card>Hello</Card>
  )
);
