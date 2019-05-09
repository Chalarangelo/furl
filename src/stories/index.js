import React from 'react';

import "../../dist/styles/index.css";

import { storiesOf } from '@storybook/react';

import { Hyperlink, Anchor, Button, ButtonGroup, List, ListItem, Breadcrumb, BreadcrumbItem, Step, StepItem, Layout, Grid, Row, Column as Col, Content, Sidebar, Header, Card, CardSection, Menu, MenuItem, Table, TableRow, TableCell, TableHead, TableBody, TableCaption, Dropdown, Collapse, Title, Text, Paragraph, Code, Preformatted, Kbd, Quote, Tooltip, Popover, Badge, Checkbox, Radio, Icon, TextInput, NumberInput, Image, EmailInput, PasswordInput, UrlInput, SelectInput, Option, ComboboxInput, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, Search, Progress, Loader, Switch, Divider, Calendar, ContextButton, Pagination, PaginationItem, ColorInput, Accordion, Tab, TabItem, FileInput, DateInput, RatingInput, SliderInput } from "../../dist/components";

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

storiesOf('Anchor', module)
  .add("lonely", () => (
    <Anchor href="#a"/>
  )
)
  .add("inside title", () => (
    <Title level={3}>Hello<Anchor href="#" /></Title>
  )
)
;

storiesOf('Divider', module)
  .add("horizontal", () => (
    <React.Fragment>
      <Paragraph>Blah blah blah</Paragraph>
      <Divider />
      <Paragraph>Blah blah blah</Paragraph>
    </React.Fragment>
  )
)
  .add("vertical", () => (
      <Paragraph>Blah <Divider vertical /> blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</Paragraph>
  )
  )
;

storiesOf('Calendar', module)
  .add("default", () => (
    <Calendar onDateChanged={(e) => console.log(e)}/>
  )
)
  .add("solid with date", () => (
    <Calendar fill='solid' date={new Date('01/01/2020')} onDateChanged={(e) => console.log(e)}/>
  )
)
;

storiesOf('Progress', module)
  .add("default", () => (
    <React.Fragment>
      <Progress value={0} max={100} />
      <Progress value={25} max={100} />
      <Progress value={50} max={100} />
      <Progress value={75} max={100} />
      <Progress value={100} max={100} />
    </React.Fragment>
  )
)
  .add("colors", () => (
    <React.Fragment>
      <Progress value={25} max={100} color="primary"/>
      <Progress value={75} max={100} color="secondary"/>
      <Progress value={25} max={100} color="success"/>
      <Progress value={75} max={100} color="warning"/>
      <Progress value={25} max={100} color="danger"/>
    </React.Fragment>
  )
  )
;

storiesOf('Loader', module)
  .add("colors", () => (
    <React.Fragment>
      <Loader />
      <Loader color="primary"/>
      <Loader color="secondary"/>
      <Loader color="success"/>
      <Loader color="warning"/>
      <Loader color="danger" /><br/>
      <Loader size="large" />
      <Loader size="large" color="primary" />
      <Loader size="large" color="secondary" />
      <Loader size="large" color="success" />
      <Loader size="large" color="warning" />
      <Loader size="large" color="danger" />
    </React.Fragment>
  )
  )
;

storiesOf('Image', module)
  .add("default", () => (
    <Image src="https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" className="margin-ls-50p"/>
  )
)
  .add("as figure", () => (
    <Image src="https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" className="margin-ls-50p" withCaption alt="Image by Garrick Sangil on Unsplash"/>
  )
)
;

storiesOf('Icon', module)
  .add("x", () => (
    <Icon name="alert-triangle" width={48} height={48}/>
  )
)
  .add("rain", () => (
    <Icon name="cloud-rain" stroke='blue' fill='cyan' width={60} height={60}/>
  )
)
;

storiesOf('Search', module)
  .add("default", () => (
    <Search placeholder='Search...' />
  )
)
  .add("with icon", () => (
    <Search withIcon placeholder='Search...' />
  )
)
;

storiesOf('Input', module)
  .add("text", () => (
    <React.Fragment>
      <TextInput placeholder='Text...' />
      <TextInput size='small' placeholder='Small' />
      <TextInput size='large' placeholder='Large' />
      <TextInput shape='rounded' placeholder='Rounded' />
      <TextInput shape='rounded' size='small' placeholder='Small rounded' />
      <TextInput shape='rounded' size='large' placeholder='Large rounded' />
    </React.Fragment>
  )
)
  .add("text multiline", () => (
    <TextInput multiline placeholder='Text...' />
  )
)
  .add("email", () => (
    <EmailInput placeholder='mail@server.com'/>
  )
)
  .add("url", () => (
    <UrlInput placeholder='https://example.com'/>
  )
)
  .add("password", () => (
    <React.Fragment>
      <PasswordInput placeholder='Password' />
      <PasswordInput withRevealer placeholder='Password' />
    </React.Fragment>
  )
)
  .add("number", () => (
    <React.Fragment>
      <NumberInput placeholder='0' onChange={(r) => console.log(r)}/>
      <NumberInput placeholder='0' step={3} min={0} max={15}/>
    </React.Fragment>
  )
)
  .add("select", () => (
    <SelectInput placeholder='0' onChange={(r) => console.log(r)}>
      <Option>a</Option>
      <Option selected>b</Option>
      <Option>c</Option>
    </SelectInput>
  )
)
  .add("select multiple", () => (
    <SelectInput multiple placeholder='0' onChange={(r) => console.log(r)}>
      <Option>a</Option>
      <Option selected>b</Option>
      <Option>c</Option>
    </SelectInput>
  )
)
  .add("combobox", () => (
    <React.Fragment>
      <ComboboxInput>
        <Option>Chocolate</Option>
        <Option>Coconut</Option>
        <Option>Mint</Option>
        <Option>Strawberry</Option>
        <Option>Vanilla</Option>
      </ComboboxInput>
      <ComboboxInput>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInput>
    </React.Fragment>
  )
)
  .add("credit card", () => (
    <React.Fragment>
      <CreditCardInput onChange={e => console.log(e.target)}/>
    </React.Fragment>
  )
)
  .add("phone", () => (
    <React.Fragment>
      <PhoneInput placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)}/>
    </React.Fragment>
  )
)
  .add("currency", () => (
    <React.Fragment>
      <CurrencyInput />
      <CurrencyInput currencySign='€' />
      <CurrencyInput currencySign='£' />
    </React.Fragment>
  )
  )
  .add("time", () => (
    <React.Fragment>
      <TimeInput />
      <TimeInput displayHours={false} />
      <TimeInput displaySeconds={false} />
      <TimeInput displayHours={false} displaySeconds={false} />
    </React.Fragment>
  )
  )
  .add("date", () => (
    <React.Fragment>
      <DateInput placeholder='dd/mm/yyyy' />
      <DateInput monthBeforeDay placeholder='mm/dd/yyyy' />
      <DateInput minYear={2000} separator='-' placeholder='mm-dd-yyyy' />
      <DateInput minYear={2000} maxYear={2019} monthBeforeDay placeholder='mm/dd/yyyy' />
    </React.Fragment>
  )
  )
  .add("color", () => (
    <React.Fragment>
      <ColorInput placeholder='#fafafa' onChange={e => console.log(e.target)}/>
    </React.Fragment>
  )
)
  .add("file", () => (
    <React.Fragment>
      <FileInput placeholder='Drop files here' onChange={e => console.log(e.target)} />
      <FileInput multiple placeholder='Drop multiple files here' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' shape='rounded' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' size='small' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' size='large' onFilesChanged={e => console.log(e)} />
    </React.Fragment>
  )
)
  .add("rating", () => (
    <React.Fragment>
      <RatingInput />
      <RatingInput iconStyle='fill' />
      <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)'/>
      <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill'/>
    </React.Fragment>
  )
)
  .add("slider", () => (
    <React.Fragment>
      <SliderInput />
      <SliderInput range />
    </React.Fragment>
  )
)
;

storiesOf('Tooltip', module)
  .add("text", () => (
    <Paragraph className="margin-ls-250p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur facilisis posuere. <Tooltip content="Simple text" position="top">Hello.</Tooltip> Phasellus auctor justo eget dapibus blandit. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Donec suscipit diam viverra eleifend malesuada. <Tooltip content="Simple text" position="right">Hello.</Tooltip> Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla facilisi. Ut vitae ullamcorper eros. <Tooltip content="Simple text" position="bottom">Hello.</Tooltip> Curabitur eu elit odio. Maecenas ex diam, pellentesque eu facilisis aliquam, aliquet ac eros. Sed mattis pellentesque mauris, non faucibus urna iaculis non. <Tooltip content="Simple text" position="left">Hello.</Tooltip> Nulla vel tellus sed turpis fringilla feugiat.</Paragraph>
  )
)
;

storiesOf('Popover', module)
  .add("text", () => (
    <Paragraph className="margin-ls-250p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur facilisis posuere. <Popover content="Simple text" position="top">Hello.</Popover> Phasellus auctor justo eget dapibus blandit. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Donec suscipit diam viverra eleifend malesuada. <Popover content="Simple text" position="right">Hello.</Popover> Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla facilisi. Ut vitae ullamcorper eros. <Popover content="Simple text" position="bottom">Hello.</Popover> Curabitur eu elit odio. Maecenas ex diam, pellentesque eu facilisis aliquam, aliquet ac eros. Sed mattis pellentesque mauris, non faucibus urna iaculis non. <Popover content="Simple text" position="left">Hello.</Popover> Nulla vel tellus sed turpis fringilla feugiat.</Paragraph>
  )
)
;

storiesOf('Checkbox', module)
  .add("default", () => (
    <React.Fragment>
      <Checkbox>Hello</Checkbox><br/>
      <Checkbox color='primary'>Hello</Checkbox><br/>
      <Checkbox color='secondary'>Hello</Checkbox><br/>
      <Checkbox color='danger'>Hello</Checkbox><br/>
      <Checkbox color='success'>Hello</Checkbox><br/>
      <Checkbox color='warning'>Hello</Checkbox>
    </React.Fragment>
  )
)
;

storiesOf('Radio', module)
  .add("default", () => (
    <React.Fragment>
      <Radio name="radios">Hello</Radio><br />
      <Radio name="radios" color='primary'>Hello</Radio><br />
      <Radio name="radios" color='secondary'>Hello</Radio><br />
      <Radio name="radios" color='danger'>Hello</Radio><br />
      <Radio name="radios" color='success'>Hello</Radio><br />
      <Radio name="radios" color='warning'>Hello</Radio>
    </React.Fragment>
  )
  )
  ;

storiesOf('Switch', module)
  .add("default", () => (
    <React.Fragment>
      <Switch>Hello</Switch><br/>
      <Switch color='primary'>Hello</Switch><br/>
      <Switch color='secondary'>Hello</Switch><br/>
      <Switch color='danger'>Hello</Switch><br/>
      <Switch color='success'>Hello</Switch><br/>
      <Switch color='warning'>Hello</Switch>
    </React.Fragment>
  )
)
;

storiesOf('Badge', module)
  .add("default", () => (
    <React.Fragment>
    <Badge>
      Badge
    </Badge>
    <Paragraph>
        Phasellus auctor justo eget dapibus blandit. Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Lorem ipsum dolor sit <Badge>amet</Badge>, consectetur adipiscing elit. Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla vel tellus sed turpis fringilla feugiat.
    </Paragraph>
    </React.Fragment>
  )
)
  .add("large", () => (
    <Badge size='large'>
      Badge
    </Badge>
  )
)
  .add("small", () => (
    <Badge size='small'>
      Badge
    </Badge>
  )
)
  .add("rounded", () => (
    <Badge shape='rounded'>
      Badge
    </Badge>
  )
)
  .add("circle", () => (
    <Badge shape='circle'>
      3
    </Badge>
  )
  )

  .add("interface", () => (
    <React.Fragment>
      <Badge >Continue</Badge>
      <Badge fill='light'>Continue</Badge>
      <Badge fill='gradient'>Continue</Badge>
      <Badge fill='outline'>Continue</Badge>
    </React.Fragment>
  )
  )
  .add("primary", () => (
    <React.Fragment>
      <Badge color='primary' >Continue</Badge>
      <Badge color='primary' fill='light'>Continue</Badge>
      <Badge color='primary' fill='gradient'>Continue</Badge>
      <Badge color='primary' fill='outline'>Continue</Badge>
    </React.Fragment>
  )
  )
  .add("secondary", () => (
    <React.Fragment>
      <Badge color='secondary' >Continue</Badge>
      <Badge color='secondary' fill='light'>Continue</Badge>
      <Badge color='secondary' fill='gradient'>Continue</Badge>
      <Badge color='secondary' fill='outline'>Continue</Badge>
    </React.Fragment>
  )
  )
  .add("danger", () => (
    <React.Fragment>
      <Badge color='danger' >Continue</Badge>
      <Badge color='danger' fill='light'>Continue</Badge>
      <Badge color='danger' fill='gradient'>Continue</Badge>
      <Badge color='danger' fill='outline'>Continue</Badge>
    </React.Fragment>
  )
  )
  .add("success", () => (
    <React.Fragment>
      <Badge color='success' >Continue</Badge>
      <Badge color='success' fill='light'>Continue</Badge>
      <Badge color='success' fill='gradient'>Continue</Badge>
      <Badge color='success' fill='outline'>Continue</Badge>
    </React.Fragment>
  )
  )
  .add("warning", () => (
    <React.Fragment>
      <Badge color='warning' >Continue</Badge>
      <Badge color='warning' fill='light'>Continue</Badge>
      <Badge color='warning' fill='gradient'>Continue</Badge>
      <Badge color='warning' fill='outline'>Continue</Badge>
    </React.Fragment>
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
  .add("uppercase", () => (
    <Button text='uppercase'>
      Continue
    </Button>
  )
)
  .add("default", () => (
    <React.Fragment>
      <Button >Continue</Button>
      <Button fill='solid flat'>Continue</Button>
      <Button fill='light flat'>Continue</Button>
      <Button fill='gradient flat'>Continue</Button>
      <Button fill='solid'>Continue</Button>
      <Button fill='light'>Continue</Button>
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
  .add("primary", () => (
    <React.Fragment>
      <Button color='primary' >Continue</Button>
      <Button color='primary' fill='solid flat'>Continue</Button>
      <Button color='primary' fill='light flat'>Continue</Button>
      <Button color='primary' fill='gradient flat'>Continue</Button>
      <Button color='primary' fill='solid'>Continue</Button>
      <Button color='primary' fill='light'>Continue</Button>
      <Button color='primary' fill='gradient'>Continue</Button>
      <Button color='primary' fill='outline'>Continue</Button>
      <Button color='primary' fill='ghost'>Continue</Button>
      <Button color='primary' disabled>Continue</Button>
      <Button color='primary' fill='gradient' disabled>Continue</Button>
      <Button color='primary' fill='outline' disabled>Continue</Button>
      <Button color='primary' fill='ghost' disabled>Continue</Button>
      <Button color='primary' fill='outline' shape='rounded' text='uppercase' size='large'>Continue</Button>
    </React.Fragment>
  )
)
  .add("secondary", () => (
    <React.Fragment>
      <Button color='secondary' >Continue</Button>
      <Button color='secondary' fill='solid flat'>Continue</Button>
      <Button color='secondary' fill='light flat'>Continue</Button>
      <Button color='secondary' fill='gradient flat'>Continue</Button>
      <Button color='secondary' fill='solid'>Continue</Button>
      <Button color='secondary' fill='light'>Continue</Button>
      <Button color='secondary' fill='gradient'>Continue</Button>
      <Button color='secondary' fill='outline'>Continue</Button>
      <Button color='secondary' fill='ghost'>Continue</Button>
      <Button color='secondary' disabled>Continue</Button>
      <Button color='secondary' fill='gradient' disabled>Continue</Button>
      <Button color='secondary' fill='outline' disabled>Continue</Button>
      <Button color='secondary' fill='ghost' disabled>Continue</Button>
      <Button color='secondary' fill='outline' shape='rounded' text='uppercase' size='large'>Continue</Button>
    </React.Fragment>
  )
)
  .add("danger", () => (
    <React.Fragment>
      <Button color='danger' >Continue</Button>
      <Button color='danger' fill='solid flat'>Continue</Button>
      <Button color='danger' fill='light flat'>Continue</Button>
      <Button color='danger' fill='gradient flat'>Continue</Button>
      <Button color='danger' fill='solid'>Continue</Button>
      <Button color='danger' fill='light'>Continue</Button>
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
      <Button color='success' >Continue</Button>
      <Button color='success' fill='solid flat'>Continue</Button>
      <Button color='success' fill='light flat'>Continue</Button>
      <Button color='success' fill='gradient flat'>Continue</Button>
      <Button color='success' fill='solid'>Continue</Button>
      <Button color='success' fill='light'>Continue</Button>
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
      <Button color='warning' >Continue</Button>
      <Button color='warning' fill='solid flat'>Continue</Button>
      <Button color='warning' fill='light flat'>Continue</Button>
      <Button color='warning' fill='gradient flat'>Continue</Button>
      <Button color='warning' fill='solid'>Continue</Button>
      <Button color='warning' fill='light'>Continue</Button>
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
      <Button type="link" href="https://google.com" >Continue</Button>
      <Button type="link" href="https://google.com" fill='solid flat'>Continue</Button>
      <Button type="link" href="https://google.com" fill='light flat'>Continue</Button>
      <Button type="link" href="https://google.com" fill='gradient flat'>Continue</Button>
      <Button type="link" href="https://google.com" fill='solid'>Continue</Button>
      <Button type="link" href="https://google.com" fill='light'>Continue</Button>
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
  .add("default icon", () => (
    <React.Fragment>
      <Button ><Icon name='home'/></Button>
      <Button fill='solid'><Icon name='home'/></Button>
      <Button fill='light'><Icon name='home'/></Button>
      <Button fill='gradient'><Icon name='home'/></Button>
      <Button ><Icon name='home'/>Continue</Button>
      <Button fill='solid'><Icon name='home'/>Continue</Button>
      <Button fill='light'><Icon name='home'/>Continue</Button>
      <Button fill='gradient'><Icon name='home'/>Continue</Button>
      <Button fill='outline'><Icon name='home' />Continue</Button>
      <Button fill='ghost'><Icon name='home' />Continue</Button>
      <Button disabled><Icon name='home' />Continue</Button>
      <Button fill='gradient' disabled><Icon name='home' />Continue</Button>
      <Button fill='outline' disabled><Icon name='home' />Continue</Button>
      <Button fill='ghost' disabled><Icon name='home' />Continue</Button>
    </React.Fragment>
  )
)
  .add("primary icon", () => (
    <React.Fragment>
      <Button color='primary' ><Icon name='home' /></Button>
      <Button color='primary' fill='solid'><Icon name='home' /></Button>
      <Button color='primary' fill='light'><Icon name='home' /></Button>
      <Button color='primary' fill='gradient'><Icon name='home' /></Button>
      <Button color='primary' ><Icon name='home' />Continue</Button>
      <Button color='primary' size='large'><Icon name='home' />Continue</Button>
      <Button color='primary' size='small'><Icon name='home' />Continue</Button>
      <Button color='primary' fill='solid'><Icon name='home' />Continue</Button>
      <Button color='primary' fill='light'><Icon name='home' />Continue</Button>
      <Button color='primary' fill='gradient'><Icon name='home' />Continue</Button>
      <Button color='primary' fill='outline'><Icon name='home' />Continue</Button>
      <Button color='primary' fill='ghost'><Icon name='home' />Continue</Button>
      <Button color='primary' disabled><Icon name='home' />Continue</Button>
      <Button color='primary' fill='gradient' disabled><Icon name='home' />Continue</Button>
      <Button color='primary' fill='outline' disabled><Icon name='home' />Continue</Button>
      <Button color='primary' fill='ghost' disabled><Icon name='home' />Continue</Button>
    </React.Fragment>
  )
  )
;

storiesOf('ButtonGroup', module)
  .add("All types", () => (
    <React.Fragment>
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="primary" fill="solid">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" fill="outline">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" fill="solid" size="small" text="uppercase">
        <Button>a</Button>
        <Button>b</Button>
        <Button>c</Button>
        <Button>d</Button>
      </ButtonGroup>
      <br/>
      <ButtonGroup color="success" fill="gradient">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="danger" fill="solid" size="large">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="warning" fill="solid" shape="rounded">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color="success" fill="outline" shape="rounded">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
    </React.Fragment>
  )
)
;

storiesOf('Dropdown', module)
  .add("Top header left sidebar", () => (
    <Layout header="bottom">
      <Header outline="border-top">
        <Grid>
          <Row>
            <Col size={4} className="borderBottom">
              <span className="title">Page Title</span>
            </Col>
            <Col size={2} className="borderBottom">
            </Col>
            <Col size={6}>
              <Menu type="horizontal" highlight="top">
                <MenuItem>Item 1</MenuItem>
                <MenuItem selected href="#">Item 2</MenuItem>
                <MenuItem><Dropdown text="DropD" reverse>
                  <MenuItem>Item 3.1</MenuItem>
                  <MenuItem selected>Item 3.2</MenuItem>
                  <MenuItem>Item 3.3</MenuItem>
                  </Dropdown></MenuItem>
                <MenuItem>Item 4</MenuItem>
              </Menu>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Sidebar outline="border-right"><Menu type="vertical" highlight="left">
        <MenuItem selected>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem><Dropdown text="DropD">
          <MenuItem>Item 3.1</MenuItem>
          <MenuItem selected>Item 3.2</MenuItem>
          <MenuItem>Item 3.3</MenuItem>
        </Dropdown></MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu></Sidebar>
      <Content><p>Lorem ipsum dolor sit amet...</p><Button><Dropdown text="Don't do it">
        <Hyperlink href="#">Item 3.1</Hyperlink>
        <Hyperlink href="#">Item 3.2</Hyperlink>
        <Hyperlink href="#">Item 3.3</Hyperlink>
      </Dropdown></Button><br /><Dropdown text="DropD">
          <Hyperlink href="#">Item 3.1</Hyperlink>
          <Hyperlink href="#">Item 3.2</Hyperlink>
          <Hyperlink href="#">Item 3.3</Hyperlink>
        </Dropdown><br /><Dropdown text="DropD" reverse>
          <Hyperlink href="#">Item 3.1</Hyperlink>
          <Hyperlink href="#">Item 3.2</Hyperlink>
          <Hyperlink href="#">Item 3.3</Hyperlink>
        </Dropdown>
        </Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
;

storiesOf('Collapse', module)
  .add("default", () => (
    <Collapse title="Don't do it">
      <Hyperlink href="#">Item 3.1</Hyperlink>
      <Hyperlink href="#">Item 3.2</Hyperlink>
      <Hyperlink href="#">Item 3.3</Hyperlink>
    </Collapse>
  )
)
  .add("flat", () => (
    <Collapse fill='flat' title="Don't do it">
      <Hyperlink href="#">Item 3.1</Hyperlink>
      <Hyperlink href="#">Item 3.2</Hyperlink>
      <Hyperlink href="#">Item 3.3</Hyperlink>
    </Collapse>
  )
)
;

storiesOf('Accordion', module)
  .add("default", () => (
    <React.Fragment>
    <Accordion>
      <Collapse title="Don't do it">
        <Hyperlink href="#">Item 3.1</Hyperlink>
        <Hyperlink href="#">Item 3.2</Hyperlink>
        <Hyperlink href="#">Item 3.3</Hyperlink>
      </Collapse>
      <Collapse title="Don't do it">
        <Hyperlink href="#">Item 3.1</Hyperlink>
        <Hyperlink href="#">Item 3.2</Hyperlink>
        <Hyperlink href="#">Item 3.3</Hyperlink>
      </Collapse>
    </Accordion>
    <br/>
    <Accordion fill='flat'>
      <Collapse title="Don't do it">
        <Hyperlink href="#">Item 3.1</Hyperlink>
        <Hyperlink href="#">Item 3.2</Hyperlink>
        <Hyperlink href="#">Item 3.3</Hyperlink>
      </Collapse>
      <Collapse title="Don't do it">
        <Hyperlink href="#">Item 3.1</Hyperlink>
        <Hyperlink href="#">Item 3.2</Hyperlink>
        <Hyperlink href="#">Item 3.3</Hyperlink>
      </Collapse>
    </Accordion>
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
  .add("Responsive", () => (
    <Layout header={['none', 'bottom', 'top', 'top']} sidebar={['none','left','right','right']}>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
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
      <List listStyle="checkmark">
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle="xmark">
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

storiesOf('Tab', module)
  .add("default", () => (
    <Tab openIndex={2}>
      <TabItem title="Lorem Ipsum"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title="Dolor Sit Amet"><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title="Peprendur"><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title="Nulla sit etiam"><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </Tab>
  )
)
.add("button group", () => (
    <Tab openIndex={1} controlStyle='button-group'>
      <TabItem title="Lorem Ipsum"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title="Dolor Sit Amet"><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title="Peprendur"><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title="Nulla sit etiam"><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </Tab>
  )
)
;

storiesOf('Breadcrumb', module)
  .add("default", () => (
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Lorem Ipsum</a></BreadcrumbItem>
      <BreadcrumbItem>Dolor sit amet</BreadcrumbItem>
    </Breadcrumb>
  )
)
;

storiesOf('Step', module)
  .add("default", () => (
    <React.Fragment>
      <Step>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem selected>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem selected>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem selected>Adipiscing elit</StepItem>
      </Step>
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
  .add("bordered", () => (
    <Table tableStyle='bordered'>
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
  .add("striped", () => (
    <Table tableStyle='striped'>
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
      <CardSection>
        <p>More stuff here.</p>
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
      <CardSection className = 'padding-ls-0p'>
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
      <Sidebar><Menu type="vertical" highlight="right">
        <MenuItem>Item 1</MenuItem>
        <MenuItem selected>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu></Sidebar>
      <Content><p>Lorem ipsum dolor sit amet...</p></Content>
      <Button>Invalid content</Button>
    </Layout>
  )
)
;

storiesOf('Typography', module)
  .add("Text", () => (
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nunc eu commodo luctus. Morbi lobortis, nibh ac luctus posuere, mi arcu faucibus risus, quis dictum neque augue quis leo. Proin porta volutpat finibus. Nullam ornare, lorem id euismod facilisis, quam nisi convallis sem, eget tempus ex mi ornare orci. Lorem ipsum dolor sit amet, <Text autolink>consectetur adipiscing elit https://google.com</Text>. Suspendisse in elit laoreet, blandit magna a, ullamcorper lectus. In ac pellentesque dolor, vel tempus libero. Sed pellentesque convallis lorem, ut suscipit ex vestibulum nec. <Text autolink><span>Ahem...</span>Sed sit amet dolor in turpis https://google.com</Text> lobortis eleifend. Ut cursus mi metus, et rutrum leo fringilla sed. Donec non sapien eget eros elementum finibus nec eget augue. Aliquam a odio posuere, feugiat purus ac, consectetur lorem. Donec eu nisi id libero rutrum porta eget nec elit. In mollis eu est porttitor tincidunt. 
    </Paragraph>
  )
)
;

storiesOf('ContextButton', module)
  .add("default", () => (
    <ContextButton>
      <Icon name="plus" />
    </ContextButton>
  )
)
  .add("all places", () => (
    <React.Fragment>
      <ContextButton verticalPosition='top' horizontalPosition='left' color='primary'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='left'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='left' size='large'><Icon name="plus" width={32} height={32}/></ContextButton>
      <ContextButton verticalPosition='top' horizontalPosition='center'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='center'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='center' size='small'><Icon name="plus" width={16} height={16} /></ContextButton>
      <ContextButton verticalPosition='top' horizontalPosition='right'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='right'><Icon name="plus" /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='right'><Icon name="plus" /></ContextButton>
    </React.Fragment>
  )
)
;

storiesOf('Pagination', module)
  .add("All types", () => (
    <React.Fragment>
      <Pagination>
        <Button>First</Button>
        <Button>Previous</Button>
        <PaginationItem>1 of 6</PaginationItem>
        <Button>Next</Button>
        <Button>Last</Button>
      </Pagination>
      <Pagination shape='rounded'>
        <Button>{'<<'}</Button>
        <Button>{'<'}</Button>
        <PaginationItem>1 of 15</PaginationItem>
        <Button>{'>'}</Button>
        <Button>{'>>'}</Button>
      </Pagination>
      <Pagination>
        <Button><Icon name='chevrons-left'width={16} height={16}/></Button>
        <Button><Icon name='chevron-left' width={16} height={16}/></Button>
        <PaginationItem>1 / 8</PaginationItem>
        <Button><Icon name='chevron-right' width={16} height={16}/></Button>
        <Button><Icon name='chevrons-right' width={16} height={16}/></Button>
      </Pagination>
      <Pagination size='large'>
        <Button color='primary'><Icon name='chevrons-left'width={16} height={16}/></Button>
        <Button color='secondary'><Icon name='chevron-left' width={16} height={16}/></Button>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>...</PaginationItem>
          <PaginationItem>96</PaginationItem>
          <PaginationItem>97</PaginationItem>
        <Button color='primary'><Icon name='chevron-right' width={16} height={16}/></Button>
        <Button color='secondary'><Icon name='chevrons-right' width={16} height={16}/></Button>
      </Pagination>
    </React.Fragment>
  )
)
;