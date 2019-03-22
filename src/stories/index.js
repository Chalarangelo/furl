import React from 'react';

import "../../dist/styles/index.css";

import { storiesOf } from '@storybook/react';

import { Hyperlink, Button, List, ListItem, Layout, Grid, Row, Column as Col, Content, Sidebar, Header, Card, CardSection, Menu, MenuItem, Table, TableRow, TableCell, TableHead, TableBody, TableCaption } from "../../dist/components";

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
  .add("unordered", () => (
    <React.Fragment>
      <List>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="circle">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="disc">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="square">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="triangle">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="checkbox">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
    </React.Fragment>
  )
)
  .add("ordered", () => (
    <React.Fragment>
      <List ordered>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="decimal">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="decimal-leading-zero">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="lower-latin">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="lower-roman">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="upper-latin">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle="upper-roman">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
    </React.Fragment>
  )
)
;

storiesOf('Table', module)
  .add("default", () => (
    <Table>
    <TableCaption>Table of People</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>51</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mary</TableCell>
          <TableCell>Gary</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
)
.add("horizontal", () => (
    <Table>
    <TableCaption>Table of People</TableCaption>
      <TableBody>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Adam</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Mary</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Surname</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>Gary</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Age</TableCell>
          <TableCell>27</TableCell>
          <TableCell>32</TableCell>
          <TableCell>40</TableCell>
          <TableCell>51</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
)
.add("grouping column", () => (
    <Table>
    <TableCaption>Table of People</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>#</TableCell>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell heading>1</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>1</TableCell>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>2</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>2</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>51</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>3</TableCell>
          <TableCell>Mary</TableCell>
          <TableCell>Gary</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
)
;

storiesOf('Card', module)
  .add("with text", () => (
    <Card width={320}>
      <CardSection>
        <h5>Hello world<small>Lorem ipsum</small></h5>
        <p>This is some demo content that I want to test the Card with.</p>
      </CardSection>
    </Card>
  )
)
  .add("with media", () => (
    <Card width={320}>
      <CardSection>
        <h5>Hello world<small>Lorem ipsum</small></h5>
      </CardSection>
      <CardSection media="https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" height={200}/>
      <CardSection>
        <p>This is some demo content that I want to test the Card with.</p>
      </CardSection>
    </Card>
  )
)
  .add("with grid", () => (
    <Grid justify='center' align='center'><Row><Col size={[12, 6, 5, 4]}>
    <Card width={320}>
      <CardSection media="https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" height={200} />
      <CardSection>
        <Grid justify={"between"}>
          <Row>
            <Col size={8}><h5>Hello world<small>Lorem ipsum</small></h5></Col>
            <Col size={3}><Button fill="ghost" size="small">Next</Button></Col>
          </Row>
        </Grid>
      </CardSection>
      <CardSection>
        <p>This is some demo content that I want to test the Card with.</p>
      </CardSection>
    </Card>
    </Col><Col size={[12, 6, 5, 4]}>
    <Card width={320}>
      <CardSection>
        <Grid align="stretch">
          <Row>
            <Col><h5>Hello world<small>Lorem ipsum</small></h5><p>This is some demo content that I want to test the Card with.</p></Col>
              <Col size={'120px'}><div style={{ height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${encodeURI("https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80")})` }}/></Col>
          </Row>
        </Grid>
      </CardSection>
    </Card>
    </Col></Row></Grid>
  )
);

storiesOf('Menu', module)
  .add("Top header left sidebar", () => (
    <Layout>
      <Header>
        <style>{`
        .borderBottom {height: 64px ; align-self:flex-end; border-bottom: 1px solid var(--cool-gray-200); }
        .title { padding: 8px 24px; line-height: 64px;}
        `}</style>
        <Grid>
          <Row>
            <Col size={4} className="borderBottom">
              <span className="title">Page Title</span>
            </Col>
            <Col size={2} className="borderBottom">
            </Col>
            <Col size={6}>
              <Menu type="horizontal">
                <MenuItem>Item 1</MenuItem>
                <MenuItem selected href="#">Item 2</MenuItem>
                <MenuItem href="#a">Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
              </Menu>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Sidebar><Menu type="vertical">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu></Sidebar>
      <Content><p>Lorem ipsum dolor sit amet...</p></Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
;