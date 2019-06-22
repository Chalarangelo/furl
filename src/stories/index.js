import React from 'react';

import { storiesOf } from '@storybook/react';

import '../styles/index.scss';

import { Hyperlink, Anchor, Button, ButtonGroup, List, ListItem, Breadcrumb, BreadcrumbItem, Step, StepItem, Layout, Grid, Row, Column as Col, Content, Sidebar, Header, Card, CardSection, Menu, MenuItem, Table, TableRow, TableCell, TableHead, TableBody, TableCaption, Dropdown, Collapse, Title, Text, Paragraph, Code, Preformatted, Kbd, Quote, Tooltip, Popover, Badge, Checkbox, Radio, Icon, TextInput, NumberInput, Image, EmailInput, PasswordInput, UrlInput, SelectInput, Option, ComboboxInput, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, Search, Progress, Loader, Switch, Divider, Calendar, ContextButton, Pagination, PaginationItem, ColorInput, Accordion, Tab, TabItem, FileInput, DateInput, RatingInput, SliderInput, Form, FormLegend, FormLabel, Modal, ModalSection, ModalCenter, Alert, Notification, NotificationCenter, Avatar, Graph } from '../../src/components';

import TableHOC from '../hypercomponents/Table';
import ListHOC from '../hypercomponents/List';
import TabsHOC from '../hypercomponents/Tab';
import AccordionHOC from '../hypercomponents/Accordion';
import BreadcrumbsHOC from '../hypercomponents/Breadcrumb';
import StepsHOC from '../hypercomponents/Step';
import MenuHOC from '../hypercomponents/Menu';
import RadioGroupHOC from '../hypercomponents/RadioGroup';
import ButtonGroupHOC from '../hypercomponents/ButtonGroup';
import SelectInputHOC from '../hypercomponents/SelectInput';
import ComboboxInputHOC from '../hypercomponents/ComboboxInput';
import InputHOC from '../hypercomponents/Input';
import FormHOC from '../hypercomponents/Form';
import CardHOC from '../hypercomponents/Card';
import MediaObjectHOC from '../hypercomponents/MediaObject';
import ItemHOC from '../hypercomponents/Item';
import PaginationHOC from '../hypercomponents/Pagination';

storiesOf('Graph', module)
  .add('curvy', () => (
    <Graph data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} />
  )
  )
  .add('line', () => (
    <Graph type='line' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} />
  )
  )
  .add('bar', () => (
    <Graph type='bar' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} />
  )
  )
  .add('pie', () => (
    <Graph type='pie' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} />
  )
)
  .add('caption', () => (
    <Graph type='curve' data={[1, 2, 3, 1, 1, 2, 1, 2, 4, 1, 2]} alt='Trend of the game' withCaption />
  )
  )
;

storiesOf('Hyperlink', module)
  .add('internal', () => (
    <Hyperlink href='#'>
      Open in same tab.
    </Hyperlink>
  )
  )
  .add('blank', () => (
    <Hyperlink href='https://google.com' openIn='_blank'>
      Open in new tab.
    </Hyperlink>
  )
  )
  .add('external', () => (
    <Hyperlink href='https://google.com' openIn='external'>
      Open in new tab with noopener noreferrer.
    </Hyperlink>
  )
  )
;

storiesOf('Anchor', module)
  .add('lonely', () => (
    <Anchor href='#a' />
  )
  )
  .add('inside title', () => (
    <Title level={3}>Hello<Anchor href='#' /></Title>
  )
  )
;



storiesOf('Avatar', module)
  .add('all variants', () => (
    <>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' />
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='square'/>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='circle' size='extra-small'/>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='circle' size='small'/>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='circle' size='medium'/>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='circle' size='large'/>
      <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='circle' size='extra-large'/>
    </>
  )
  )
;

storiesOf('Divider', module)
  .add('horizontal', () => (
    <>
      <Paragraph>Blah blah blah</Paragraph>
      <Divider />
      <Paragraph>Blah blah blah</Paragraph>
    </>
  )
  )
  .add('vertical', () => (
    <Paragraph>Blah <Divider vertical /> blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</Paragraph>
  )
  )
;

storiesOf('Calendar', module)
  .add('default', () => (
    <Calendar onDateChanged={(e) => console.log(e)} />
  )
  )
  .add('solid with date', () => (
    <Calendar fill='solid' date={new Date('01/01/2020')} onDateChanged={(e) => console.log(e)} />
  )
  )
;

storiesOf('Progress', module)
  .add('default', () => (
    <>
      <Progress value={0} max={100} />
      <Progress value={25} max={100} />
      <Progress value={50} max={100} />
      <Progress value={75} max={100} />
      <Progress value={100} max={100} />
    </>
  )
  )
  .add('colors', () => (
    <>
      <Progress value={25} max={100} color='primary' />
      <Progress value={75} max={100} color='secondary' />
      <Progress value={25} max={100} color='success' />
      <Progress value={75} max={100} color='warning' />
      <Progress value={25} max={100} color='danger' />
    </>
  )
  )
;

storiesOf('Loader', module)
  .add('colors', () => (
    <>
      <Loader />
      <Loader color='primary' />
      <Loader color='secondary' />
      <Loader color='success' />
      <Loader color='warning' />
      <Loader color='danger' /><br />
      <Loader size='large' />
      <Loader size='large' color='primary' />
      <Loader size='large' color='secondary' />
      <Loader size='large' color='success' />
      <Loader size='large' color='warning' />
      <Loader size='large' color='danger' />
    </>
  )
  )
;

storiesOf('Image', module)
  .add('default', () => (
    <Image src='https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' className='margin-ls-50p' />
  )
  )
  .add('as figure', () => (
    <Image src='https://images.unsplash.com/photo-1554968756-e41553ee4eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' className='margin-ls-50p' withCaption alt='Image by Garrick Sangil on Unsplash' />
  )
  )
;

storiesOf('Icon', module)
  .add('x', () => (
    <Icon name='alert-triangle' width={48} height={48} />
  )
  )
  .add('rain', () => (
    <Icon name='cloud-rain' stroke='blue' fill='cyan' width={60} height={60} />
  )
  )
;

storiesOf('Search', module)
  .add('default', () => (
    <>
      <Search placeholder='Search...'>
        <h4>Results</h4>
        <p>Hello, hello, hello!</p>
      </Search>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lacus commodo, convallis ex id, commodo quam. In vehicula, metus eu euismod vestibulum, enim massa ultricies massa, nec auctor sem est in velit. Quisque hendrerit ultrices dolor. Sed lacinia eu dolor nec elementum. Suspendisse porttitor pulvinar mi sed vestibulum. Integer sed consectetur ligula. Vivamus sagittis vulputate justo, sit amet consectetur urna tempus nec. Aenean eleifend risus augue, ac consectetur lacus hendrerit vitae. Nam justo tortor, pulvinar at sapien ac, tempor sollicitudin risus. Pellentesque placerat ex sed finibus porta. Aenean sit amet enim nec sapien mollis luctus porttitor ac lorem.</p>
    </>
  )
  )
  .add('with icon', () => (
    <>
      <Search withIcon placeholder='Search...' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lacus commodo, convallis ex id, commodo quam. In vehicula, metus eu euismod vestibulum, enim massa ultricies massa, nec auctor sem est in velit. Quisque hendrerit ultrices dolor. Sed lacinia eu dolor nec elementum. Suspendisse porttitor pulvinar mi sed vestibulum. Integer sed consectetur ligula. Vivamus sagittis vulputate justo, sit amet consectetur urna tempus nec. Aenean eleifend risus augue, ac consectetur lacus hendrerit vitae. Nam justo tortor, pulvinar at sapien ac, tempor sollicitudin risus. Pellentesque placerat ex sed finibus porta. Aenean sit amet enim nec sapien mollis luctus porttitor ac lorem.</p>
    </>
  )
  )
;

storiesOf('Form', module)
  .add('default', () => (
    <Form>
      <FormLegend>A Form</FormLegend>
      <FormLabel htmlFor='text-in'>Text</FormLabel>
      <TextInput id='text-in' placeholder='Text...' />
    </Form>
  )
  );

storiesOf('Input', module)
  .add('text', () => (
    <>
      <TextInput placeholder='Text...' />
      <TextInput size='small' placeholder='Small' />
      <TextInput size='large' placeholder='Large' />
      <TextInput shape='rounded' placeholder='Rounded' />
      <TextInput shape='rounded' size='small' placeholder='Small rounded' defaultValue='test' />
      <TextInput shape='rounded' size='large' placeholder='Large rounded' defaultValue='test' />
      <TextInput value='disabled' disabled />
      <TextInput value='readonly' readOnly />
    </>
  )
  )
  .add('text multiline', () => (
    <>
      <TextInput multiline placeholder='Text...' />
      <TextInput multiline value='disabled' disabled />
      <TextInput multiline value='readonly' readOnly />
    </>
  )
  )
  .add('email', () => (
    <>
      <EmailInput placeholder='mail@server.com' />
      <EmailInput value='disabled' disabled />
      <EmailInput value='readonly' readOnly />
    </>
  )
  )
  .add('url', () => (
    <>
      <UrlInput placeholder='https://example.com' />
      <UrlInput value='disabled' disabled />
      <UrlInput value='readonly' readOnly />
    </>
  )
  )
  .add('password', () => (
    <>
      <PasswordInput placeholder='Password' />
      <PasswordInput withRevealer placeholder='Password' />
      <PasswordInput disabled withRevealer placeholder='Password' />
      <PasswordInput readOnly withRevealer placeholder='Password' />
    </>
  )
  )
  .add('number', () => (
    <>
      <NumberInput placeholder='0' onChange={(r) => console.log(r)} />
      <NumberInput placeholder='0' step={3} min={0} max={15} />
      <NumberInput disabled placeholder='0' step={3} min={0} max={15} />
      <NumberInput readOnly placeholder='0' step={3} min={0} max={15} />
    </>
  )
  )
  .add('select', () => (
    <>
      <SelectInput placeholder='0' onChange={(r) => console.log(r)}>
        <Option>a</Option>
        <Option selected>b</Option>
        <Option>c</Option>
      </SelectInput>
      <SelectInput disabled placeholder='0' onChange={(r) => console.log(r)}>
        <Option>a</Option>
        <Option selected>b</Option>
        <Option>c</Option>
      </SelectInput>
      <SelectInput readOnly placeholder='0' onChange={(r) => console.log(r)}>
        <Option>a</Option>
        <Option selected>b</Option>
        <Option>c</Option>
      </SelectInput>
    </>
  )
  )
  .add('select multiple', () => (
    <SelectInput multiple placeholder='0' onChange={(r) => console.log(r)}>
      <Option>a</Option>
      <Option selected>b</Option>
      <Option selected>c</Option>
    </SelectInput>
  )
  )
  .add('combobox', () => (
    <>
      <ComboboxInput>
        <Option>Chocolate</Option>
        <Option>Coconut</Option>
        <Option selected>Mint</Option>
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
      <ComboboxInput disabled>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInput>
      <ComboboxInput readOnly>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInput>
    </>
  )
  )
  .add('credit card', () => (
    <>
      <CreditCardInput onChange={e => console.log(e.target)} />
      <CreditCardInput disabled onChange={e => console.log(e.target)} />
      <CreditCardInput readOnly onChange={e => console.log(e.target)} />
    </>
  )
  )
  .add('phone', () => (
    <>
      <PhoneInput placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
      <PhoneInput disabled placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
      <PhoneInput readOnly placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
    </>
  )
  )
  .add('currency', () => (
    <>
      <CurrencyInput placeholder='$' />
      <CurrencyInput currencySymbol='€' placeholder='€'/>
      <CurrencyInput currencySymbol='£' placeholder='£'/>
      <CurrencyInput disabled currencySymbol='£' />
      <CurrencyInput readOnly currencySymbol='£' />
    </>
  )
  )
  .add('time', () => (
    <>
      <TimeInput />
      <TimeInput displayHours={false} />
      <TimeInput displaySeconds={false} />
      <TimeInput displayHours={false} displaySeconds={false} />
      <TimeInput disabled displayHours={false} displaySeconds={false} />
      <TimeInput readOnly displayHours={false} displaySeconds={false} />
    </>
  )
  )
  .add('date', () => (
    <>
      <DateInput placeholder='dd/mm/yyyy' />
      <DateInput monthBeforeDay placeholder='mm/dd/yyyy' />
      <DateInput minYear={2000} separator='-' placeholder='mm-dd-yyyy' />
      <DateInput minYear={2000} maxYear={2019} monthBeforeDay placeholder='mm/dd/yyyy' />
      <DateInput minYear={2000} disabled separator='-' placeholder='mm-dd-yyyy' />
      <DateInput minYear={2000} readOnly separator='-' placeholder='mm-dd-yyyy' />
    </>
  )
  )
  .add('color', () => (
    <>
      <ColorInput placeholder='#fafafa' onChange={e => console.log(e.target)} />
      <ColorInput disabled placeholder='#fafafa' onChange={e => console.log(e.target)} />
      <ColorInput readOnly placeholder='#fafafa' onChange={e => console.log(e.target)} />
    </>
  )
  )
  .add('file', () => (
    <>
      <FileInput placeholder='Drop files here' onChange={e => console.log(e.target)} />
      <FileInput multiple placeholder='Drop multiple files here' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' shape='rounded' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' size='small' onFilesChanged={e => console.log(e)} />
      <FileInput placeholder='Drop files here' size='large' onFilesChanged={e => console.log(e)} />
      <FileInput disabled placeholder='Drop files here' onChange={e => console.log(e.target)} />
      <FileInput readOnly placeholder='Drop files here' onChange={e => console.log(e.target)} />
    </>
  )
  )
  .add('rating', () => (
    <>
      <RatingInput onChange={(e) => console.log(e)}/>
      <RatingInput iconStyle='fill' onChange={(e) => console.log(e)}/>
      <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)' onChange={(e) => console.log(e)}/>
      <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' onChange={(e) => console.log(e)}/>
      <RatingInput disabled iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' defaultValue={3} onChange={(e) => console.log(e)}/>
      <RatingInput readOnly iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' defaultValue={3} onChange={(e) => console.log(e)} />
    </>
  )
  )
  .add('slider', () => (
    <>
      <SliderInput />
      <SliderInput range />
      <SliderInput min={10} max={25} />
      <SliderInput disabled min={10} max={25} />
      <SliderInput readOnly min={10} max={25} />
      <SliderInput range min={10} max={27} />
      <SliderInput disabled range min={10} max={27} />
      <SliderInput readOnly range min={10} max={27} />
    </>
  )
  )
;

storiesOf('Tooltip', module)
  .add('text', () => (
    <Paragraph className='margin-ls-250p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur facilisis posuere. <Tooltip content='Simple text' position='top'>Hello.</Tooltip> Phasellus auctor justo eget dapibus blandit. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Donec suscipit diam viverra eleifend malesuada. <Tooltip content='Simple text' position='right'>Hello.</Tooltip> Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla facilisi. Ut vitae ullamcorper eros. <Tooltip content='Simple text' position='bottom'>Hello.</Tooltip> Curabitur eu elit odio. Maecenas ex diam, pellentesque eu facilisis aliquam, aliquet ac eros. Sed mattis pellentesque mauris, non faucibus urna iaculis non. <Tooltip content='Simple text' position='left'>Hello.</Tooltip> Nulla vel tellus sed turpis fringilla feugiat.</Paragraph>
  )
  )
;

storiesOf('Popover', module)
  .add('text', () => (
    <Paragraph className='margin-ls-250p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur facilisis posuere. <Popover content='Simple text' position='top'>Hello.</Popover> Phasellus auctor justo eget dapibus blandit. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Donec suscipit diam viverra eleifend malesuada. <Popover content='Simple text' position='right'>Hello.</Popover> Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla facilisi. Ut vitae ullamcorper eros. <Popover content='Simple text' position='bottom'>Hello.</Popover> Curabitur eu elit odio. Maecenas ex diam, pellentesque eu facilisis aliquam, aliquet ac eros. Sed mattis pellentesque mauris, non faucibus urna iaculis non. <Popover content='Simple text' position='left'>Hello.</Popover> Nulla vel tellus sed turpis fringilla feugiat.</Paragraph>
  )
  )
;

storiesOf('Checkbox', module)
  .add('default', () => (
    <>
      <Checkbox>Hello</Checkbox><br />
      <Checkbox color='primary'>Hello</Checkbox><br />
      <Checkbox color='secondary'>Hello</Checkbox><br />
      <Checkbox color='danger'>Hello</Checkbox><br />
      <Checkbox color='success'>Hello</Checkbox><br />
      <Checkbox color='warning'>Hello</Checkbox>
    </>
  )
  )
;

storiesOf('Radio', module)
  .add('default', () => (
    <>
      <Radio name='radios'>Hello</Radio><br />
      <Radio name='radios' color='primary'>Hello</Radio><br />
      <Radio name='radios' color='secondary'>Hello</Radio><br />
      <Radio name='radios' color='danger'>Hello</Radio><br />
      <Radio name='radios' color='success'>Hello</Radio><br />
      <Radio name='radios' color='warning'>Hello</Radio>
    </>
  )
  )
;

storiesOf('Switch', module)
  .add('default', () => (
    <>
      <Switch>Hello</Switch><br />
      <Switch color='primary'>Hello</Switch><br />
      <Switch color='secondary'>Hello</Switch><br />
      <Switch color='danger'>Hello</Switch><br />
      <Switch color='success'>Hello</Switch><br />
      <Switch color='warning'>Hello</Switch>
    </>
  )
  )
;

storiesOf('Badge', module)
  .add('default', () => (
    <>
      <Badge>
      Badge
      </Badge>
      <Paragraph>
        Phasellus auctor justo eget dapibus blandit. Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Praesent at felis non leo suscipit finibus sit amet sit amet nibh. Lorem ipsum dolor sit <Badge>amet</Badge>, consectetur adipiscing elit. Etiam ligula magna, rutrum a enim semper, hendrerit finibus nibh. Sed pulvinar nisi ac est finibus, non rutrum dui egestas. Nulla vel tellus sed turpis fringilla feugiat.
      </Paragraph>
    </>
  )
  )
  .add('large', () => (
    <Badge size='large'>
      Badge
    </Badge>
  )
  )
  .add('small', () => (
    <Badge size='small'>
      Badge
    </Badge>
  )
  )
  .add('rounded', () => (
    <Badge shape='rounded'>
      Badge
    </Badge>
  )
  )
  .add('circle', () => (
    <Badge shape='circle'>
      3
    </Badge>
  )
  )

  .add('interface', () => (
    <>
      <Badge >Continue</Badge>
      <Badge fill='light'>Continue</Badge>
      <Badge fill='gradient'>Continue</Badge>
      <Badge fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('primary', () => (
    <>
      <Badge color='primary' >Continue</Badge>
      <Badge color='primary' fill='light'>Continue</Badge>
      <Badge color='primary' fill='gradient'>Continue</Badge>
      <Badge color='primary' fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('secondary', () => (
    <>
      <Badge color='secondary' >Continue</Badge>
      <Badge color='secondary' fill='light'>Continue</Badge>
      <Badge color='secondary' fill='gradient'>Continue</Badge>
      <Badge color='secondary' fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('danger', () => (
    <>
      <Badge color='danger' >Continue</Badge>
      <Badge color='danger' fill='light'>Continue</Badge>
      <Badge color='danger' fill='gradient'>Continue</Badge>
      <Badge color='danger' fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('success', () => (
    <>
      <Badge color='success' >Continue</Badge>
      <Badge color='success' fill='light'>Continue</Badge>
      <Badge color='success' fill='gradient'>Continue</Badge>
      <Badge color='success' fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('warning', () => (
    <>
      <Badge color='warning' >Continue</Badge>
      <Badge color='warning' fill='light'>Continue</Badge>
      <Badge color='warning' fill='gradient'>Continue</Badge>
      <Badge color='warning' fill='outline'>Continue</Badge>
    </>
  )
  )
  .add('primary with icon', () => (
    <>
      <Badge color='primary' ><Icon name='disc' width={16} height={16} />Continue</Badge>
      <Badge color='primary' fill='light'><Icon name='disc' width={16} height={16} />Continue</Badge>
      <Badge color='primary' fill='gradient'><Icon name='disc' width={16} height={16} />Continue</Badge>
      <Badge color='primary' fill='outline'><Icon name='disc' width={16} height={16} />Continue</Badge>
    </>
  )
  )
;

storiesOf('Button', module)
  .add('normal', () => (
    <Button>
      Continue
    </Button>
  )
  )
  .add('large', () => (
    <Button size='large'>
      Continue
    </Button>
  )
  )
  .add('small', () => (
    <Button size='small'>
      Continue
    </Button>
  )
  )
  .add('rounded', () => (
    <Button shape='rounded'>
      Continue
    </Button>
  )
  )
  .add('uppercase', () => (
    <Button text='uppercase'>
      Continue
    </Button>
  )
  )
  .add('default', () => (
    <>
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
    </>
  )
  )
  .add('primary', () => (
    <>
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
    </>
  )
  )
  .add('secondary', () => (
    <>
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
    </>
  )
  )
  .add('danger', () => (
    <>
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
    </>
  )
  )
  .add('success', () => (
    <>
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
    </>
  )
  )
  .add('warning', () => (
    <>
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
    </>
  )
  )
  .add('link', () => (
    <>
      <Button type='link' href='https://google.com' >Continue</Button>
      <Button type='link' href='https://google.com' fill='solid flat'>Continue</Button>
      <Button type='link' href='https://google.com' fill='light flat'>Continue</Button>
      <Button type='link' href='https://google.com' fill='gradient flat'>Continue</Button>
      <Button type='link' href='https://google.com' fill='solid'>Continue</Button>
      <Button type='link' href='https://google.com' fill='light'>Continue</Button>
      <Button type='link' href='https://google.com' fill='solid'>Continue</Button>
      <Button type='link' href='https://google.com' fill='gradient'>Continue</Button>
      <Button type='link' href='https://google.com' fill='outline'>Continue</Button>
      <Button type='link' href='https://google.com' fill='ghost'>Continue</Button>
      <Button type='link' href='https://google.com' disabled>Continue</Button>
      <Button type='link' href='https://google.com' fill='gradient' disabled>Continue</Button>
      <Button type='link' href='https://google.com' fill='outline' disabled>Continue</Button>
      <Button type='link' href='https://google.com' fill='ghost' disabled>Continue</Button>
    </>
  )
  )
  .add('default icon', () => (
    <>
      <Button ><Icon name='home' /></Button>
      <Button fill='solid'><Icon name='home' /></Button>
      <Button fill='light'><Icon name='home' /></Button>
      <Button fill='gradient'><Icon name='home' /></Button>
      <Button ><Icon name='home' />Continue</Button>
      <Button fill='solid'><Icon name='home' />Continue</Button>
      <Button fill='light'><Icon name='home' />Continue</Button>
      <Button fill='gradient'><Icon name='home' />Continue</Button>
      <Button fill='outline'><Icon name='home' />Continue</Button>
      <Button fill='ghost'><Icon name='home' />Continue</Button>
      <Button disabled><Icon name='home' />Continue</Button>
      <Button fill='gradient' disabled><Icon name='home' />Continue</Button>
      <Button fill='outline' disabled><Icon name='home' />Continue</Button>
      <Button fill='ghost' disabled><Icon name='home' />Continue</Button>
    </>
  )
  )
  .add('primary icon', () => (
    <>
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
    </>
  )
  )
  .add('styled as links', () => (
    <>
      <Button fill='link'>Continue</Button>
      <Button fill='link' color='primary'>Continue</Button>
      <Button fill='link' color='secondary'>Continue</Button>
      <Button fill='link' color='success'>Continue</Button>
      <Button fill='link' color='warning'>Continue</Button>
      <Button fill='link' color='danger'>Continue</Button>
    </>
  )
  )
;

storiesOf('ButtonGroup', module)
  .add('All types', () => (
    <>
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='primary' fill='solid'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='secondary' fill='outline'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='secondary' fill='solid' size='small' text='uppercase'>
        <Button>a</Button>
        <Button>b</Button>
        <Button>c</Button>
        <Button>d</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup color='success' fill='gradient'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='danger' fill='solid' size='large'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='warning' fill='solid' shape='rounded'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup color='success' fill='outline' shape='rounded'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
    </>
  )
  )
;

storiesOf('Dropdown', module)
  .add('Top header left sidebar', () => (
    <Layout header='bottom'>
      <Header outline='border-top'>
        <Grid>
          <Row>
            <Col size={4} className='borderBottom'>
              <span className='title'>Page Title</span>
            </Col>
            <Col size={2} className='borderBottom' />
            <Col size={6}>
              <Menu type='horizontal' highlight='top'>
                <MenuItem>Item 1</MenuItem>
                <MenuItem selected href='#'>Item 2</MenuItem>
                <MenuItem><Dropdown text='DropD' reverse>
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
      <Sidebar outline='border-right'><Menu type='vertical' highlight='left'>
        <MenuItem selected>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem><Dropdown text='DropD'>
          <MenuItem>Item 3.1</MenuItem>
          <MenuItem selected>Item 3.2</MenuItem>
          <MenuItem>Item 3.3</MenuItem>
        </Dropdown></MenuItem>
        <MenuItem>Item 4</MenuItem>
      </Menu></Sidebar>
      <Content><p>Lorem ipsum dolor sit amet...</p><Button><Dropdown text="Don't do it">
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Dropdown></Button><br /><Dropdown text='DropD'>
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Dropdown><br /><Dropdown text='DropD' reverse>
        <Hyperlink href='#'>Item 3.1</Hyperlink>
        <Hyperlink href='#'>Item 3.2</Hyperlink>
        <Hyperlink href='#'>Item 3.3</Hyperlink>
      </Dropdown>
      </Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
;

storiesOf('Collapse', module)
  .add('default', () => (
    <Collapse title="Don't do it">
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Collapse>
  )
  )
  .add('flat', () => (
    <Collapse fill='flat' title="Don't do it">
      <Hyperlink href='#'>Item 3.1</Hyperlink>
      <Hyperlink href='#'>Item 3.2</Hyperlink>
      <Hyperlink href='#'>Item 3.3</Hyperlink>
    </Collapse>
  )
  )
;

storiesOf('Accordion', module)
  .add('default', () => (
    <>
      <Accordion id="test">
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
      </Accordion>
      <br />
      <Accordion fill='flat'>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
      </Accordion>
    </>
  )
  )
;

storiesOf('Grid', module)
  .add('Normal columns', () => (
    <>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
      <Grid>
        <Row>
          <Col><div className='box-colored'>fluid</div></Col>
        </Row>
        <Row>
          <Col><div className='box-colored'>fluid</div></Col>
          <Col><div className='box-colored'>fluid</div></Col>
        </Row>
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
      </Grid>
    </>
  )
  )
  .add('Custom-size columns', () => (
    <>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
      <Grid>
        <Row>
          <Col size={0.23}><div className='box-colored'>23%</div></Col>
          <Col size={0.28}><div className='box-colored'>28%</div></Col>
          <Col size={0.49}><div className='box-colored'>49%</div></Col>
        </Row>
      </Grid>
    </>
  )
  )
  .add('Responsive columns', () => (
    <>
      <style>{`.box-colored {background: #0277bd;border-radius: 0.125rem;padding: 0.875rem;margin: 0.1rem;margin-bottom: 0.5rem;
min-height: 0.875rem;color: #f8f8f8;}`}</style>
      <Grid>
        <Row>
          <Col size={[0.23, 6, 12, 12]}><div className='box-colored'>23%</div></Col>
          <Col size={[0.28, 6, 4, 8]}><div className='box-colored'>28%</div></Col>
          <Col size={['fluid', 12, 8, 4]}><div className='box-colored'>49%</div></Col>
        </Row>
      </Grid>
    </>
  )
  )
;

storiesOf('Layout', module)
  .add('Top header left sidebar', () => (
    <Layout>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Top header right sidebar', () => (
    <Layout sidebar='right'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Top header no sidebar', () => (
    <Layout sidebar='none'>
      <Header>Header</Header>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Bottom header left sidebar', () => (
    <Layout header='bottom'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Bottom header right sidebar', () => (
    <Layout header='bottom' sidebar='right'>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Bottom header no sidebar', () => (
    <Layout header='bottom' sidebar='none'>
      <Header>Header</Header>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('No header left sidebar', () => (
    <Layout header='none'>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('No header right sidebar', () => (
    <Layout header='none' sidebar='right'>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Content only', () => (
    <Layout header='none' sidebar='none'>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
  .add('Responsive', () => (
    <Layout header={['none', 'bottom', 'top', 'top']} sidebar={['none', 'left', 'right', 'right']}>
      <Header>Header</Header>
      <Sidebar>Sidebar</Sidebar>
      <Content>Content</Content>
      <Button>Invalid content</Button>
    </Layout>
  )
  )
;

storiesOf('List', module)
  .add('unordered', () => (
    <>
      <List>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='circle'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='disc'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='square'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='triangle'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='checkmark'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List listStyle='xmark'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
    </>
  )
  )
  .add('ordered', () => (
    <>
      <List ordered>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='decimal'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='decimal-leading-zero'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='lower-latin'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='lower-roman'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='upper-latin'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
      <List ordered listStyle='upper-roman'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </List>
    </>
  )
  )
;

storiesOf('Tab', module)
  .add('default', () => (
    <Tab openIndex={2}>
      <TabItem title='Lorem Ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title='Dolor Sit Amet'><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title='Peprendur'><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title='Nulla sit etiam'><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </Tab>
  )
  )
  .add('button group', () => (
    <Tab openIndex={1} controlStyle='button-group'>
      <TabItem title='Lorem Ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title='Dolor Sit Amet'><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title='Peprendur'><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title='Nulla sit etiam'><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </Tab>
  )
  )
;

storiesOf('Breadcrumb', module)
  .add('default', () => (
    <Breadcrumb>
      <BreadcrumbItem><a href='#'>Lorem Ipsum</a></BreadcrumbItem>
      <BreadcrumbItem>Dolor sit amet</BreadcrumbItem>
    </Breadcrumb>
  )
  )
;

storiesOf('Step', module)
  .add('default', () => (
    <>
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
    </>
  )
  )
  .add('vertical', () => (
    <>
      <Step alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem selected>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem selected>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </Step>
      <Step alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem selected>Adipiscing elit</StepItem>
      </Step>
    </>
  )
  )
;

storiesOf('Table', module)
  .add('default', () => (
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
  .add('bordered', () => (
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
  .add('striped', () => (
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
  .add('horizontal', () => (
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
  .add('grouping column', () => (
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

storiesOf('Modal', module)
  .add('open', () => {
    const modalCenterRef = React.createRef();
    return (
      <ModalCenter isOpen ref={modalCenterRef}>
        <Modal>
          <ModalSection>
            <h5>Hello world<small>Lorem ipsum</small></h5>
            <p>This is some demo content that I want to test the Card with.</p>
          </ModalSection>
          <ModalSection>
            <p>More stuff here.</p>
          </ModalSection>
          <Button onClick={() => modalCenterRef.current.hide()}>Close</Button>
        </Modal>
      </ModalCenter>
    );
  }
  )
  .add('show', () => {
    const modalCenterRef = React.createRef();
    return (
      <>
        <ModalCenter ref={modalCenterRef} />
        <Button onClick={() => {
          modalCenterRef.current.setContent(
            <Modal>
              <ModalSection>
                <h5>Hello world<small>Lorem ipsum</small></h5>
                <p>This is some demo content that I want to test the Card with.</p>
              </ModalSection>
            </Modal>
          );

          modalCenterRef.current.show();
        }}>Click here</Button>
      </>
    );
  }
  )
;

storiesOf('Card', module)
  .add('with text', () => (
    <Card width={320} id="acard">
      <CardSection id="acardsection">
        <h5>Hello world<small>Lorem ipsum</small></h5>
        <p>This is some demo content that I want to test the Card with.</p>
      </CardSection>
      <CardSection>
        <p>More stuff here.</p>
      </CardSection>
    </Card>
  )
  )
  .add('with media', () => (
    <Card width={320}>
      <CardSection>
        <h5>Hello world<small>Lorem ipsum</small></h5>
      </CardSection>
      <CardSection media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' height={200} />
      <CardSection>
        <p>This is some demo content that I want to test the Card with.</p>
      </CardSection>
    </Card>
  )
  )
  .add('with grid', () => (
    <Grid justify='center' align='center'><Row><Col size={[12, 6, 5, 4]}>
      <Card width={320}>
        <CardSection media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' height={200} />
        <CardSection>
          <Grid justify={'between'}>
            <Row>
              <Col size={8}><h5>Hello world<small>Lorem ipsum</small></h5></Col>
              <Col size={3}><Button fill='ghost' size='small'>Next</Button></Col>
            </Row>
          </Grid>
        </CardSection>
        <CardSection>
          <p>This is some demo content that I want to test the Card with.</p>
        </CardSection>
      </Card>
    </Col><Col size={[12, 6, 5, 4]}>
      <Card width={320}>
        <CardSection className='padding-ls-0p'>
          <Grid align='stretch'>
            <Row>
              <Col><h5>Hello world<small>Lorem ipsum</small></h5><p>This is some demo content that I want to test the Card with.</p></Col>
              <Col size={'120px'}><div style={{ height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${encodeURI('https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')})` }} /></Col>
            </Row>
          </Grid>
        </CardSection>
      </Card>
    </Col></Row></Grid>
  )
  );

storiesOf('Menu', module)
  .add('Top header left sidebar', () => (
    <Layout>
      <Header>
        <style>{`
        .borderBottom {height: 64px ; align-self:flex-end; border-bottom: 1px solid var(--cool-gray-200); }
        .title { padding: 8px 24px; line-height: 64px;}
        `}</style>
        <Grid>
          <Row>
            <Col size={4} className='borderBottom'>
              <span className='title'>Page Title</span>
            </Col>
            <Col size={2} className='borderBottom' />
            <Col size={6}>
              <Menu type='horizontal'>
                <MenuItem>Item 1</MenuItem>
                <MenuItem selected href='#'>Item 2</MenuItem>
                <MenuItem href='#a'>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
              </Menu>
            </Col>
          </Row>
        </Grid>
      </Header>
      <Sidebar><Menu type='vertical' highlight='right'>
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
  .add('Text', () => (
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nunc eu commodo luctus. Morbi lobortis, nibh ac luctus posuere, mi arcu faucibus risus, quis dictum neque augue quis leo. Proin porta volutpat finibus. Nullam ornare, lorem id euismod facilisis, quam nisi convallis sem, eget tempus ex mi ornare orci. Lorem ipsum dolor sit amet, <Text autolink>consectetur adipiscing elit https://google.com</Text>. Suspendisse in elit laoreet, blandit magna a, ullamcorper lectus. In ac pellentesque dolor, vel tempus libero. Sed pellentesque convallis lorem, ut suscipit ex vestibulum nec. <Text autolink><span>Ahem...</span>Sed sit amet dolor in turpis https://google.com</Text> lobortis eleifend. Ut cursus mi metus, et rutrum leo fringilla sed. Donec non sapien eget eros elementum finibus nec eget augue. Aliquam a odio posuere, feugiat purus ac, consectetur lorem. Donec eu nisi id libero rutrum porta eget nec elit. In mollis eu est porttitor tincidunt.
    </Paragraph>
  )
  )
;

storiesOf('Alert', module)
  .add('all variants', () => (
    <>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet nunc eu commodo luctus. Morbi lobortis, nibh ac luctus posuere, mi arcu faucibus risus, quis dictum neque augue quis leo. Proin porta volutpat finibus. Nullam ornare, lorem id euismod facilisis, quam nisi convallis sem, eget tempus ex mi ornare orci. Lorem ipsum dolor sit amet.</Paragraph>
      <Alert><h3>Alert</h3><p>This is an alert</p></Alert>
      <Paragraph>Suspendisse in elit laoreet, blandit magna a, ullamcorper lectus. In ac pellentesque dolor, vel tempus libero. Sed pellentesque convallis lorem, ut suscipit ex vestibulum nec. Lobortis eleifend. Ut cursus mi metus, et rutrum leo fringilla sed. Donec non sapien eget eros elementum finibus nec eget augue. Aliquam a odio posuere, feugiat purus ac, consectetur lorem. Donec eu nisi id libero rutrum porta eget nec elit. In mollis eu est porttitor tincidunt.
      </Paragraph>
      <Alert color='primary'><Text>Primary</Text></Alert>
      <Alert color='secondary'><Text>Secondary</Text></Alert>
      <Alert color='success'><Text>Success</Text></Alert>
      <Alert color='alert'><Text>Alert</Text></Alert>
      <Alert color='warning'><Text>Warning</Text></Alert>
      <Alert size='large' shape='rounded' fill='solid'><Text>Special</Text></Alert>
    </>
  )
  )
;

storiesOf('ContextButton', module)
  .add('default', () => (
    <ContextButton>
      <Icon name='plus' />
    </ContextButton>
  )
  )
  .add('all places', () => (
    <>
      <ContextButton verticalPosition='top' horizontalPosition='left' color='primary'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='left'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='left' size='large'><Icon name='plus' width={32} height={32} /></ContextButton>
      <ContextButton verticalPosition='top' horizontalPosition='center'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='center'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='center' size='small'><Icon name='plus' width={16} height={16} /></ContextButton>
      <ContextButton verticalPosition='top' horizontalPosition='right'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='bottom' horizontalPosition='right'><Icon name='plus' /></ContextButton>
      <ContextButton verticalPosition='center' horizontalPosition='right'><Icon name='plus' /></ContextButton>
    </>
  )
  )
;

storiesOf('Pagination', module)
  .add('All types', () => (
    <>
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
        <Button><Icon name='chevrons-left'width={16} height={16} /></Button>
        <Button><Icon name='chevron-left' width={16} height={16} /></Button>
        <PaginationItem>1 / 8</PaginationItem>
        <Button><Icon name='chevron-right' width={16} height={16} /></Button>
        <Button><Icon name='chevrons-right' width={16} height={16} /></Button>
      </Pagination>
      <Pagination size='large'>
        <Button color='primary'><Icon name='chevrons-left'width={16} height={16} /></Button>
        <Button color='secondary'><Icon name='chevron-left' width={16} height={16} /></Button>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>...</PaginationItem>
        <PaginationItem>96</PaginationItem>
        <PaginationItem>97</PaginationItem>
        <Button color='primary'><Icon name='chevron-right' width={16} height={16} /></Button>
        <Button color='secondary'><Icon name='chevrons-right' width={16} height={16} /></Button>
      </Pagination>
    </>
  )
  )
;

storiesOf('Notification', module)
  .add('top right', () => {
    let notificationCenterRef = React.createRef();
    let count = 0;
    return (
      <>
        <Button onClick={() => notificationCenterRef.current.addNotification(
          <Notification>
            This is a notification. {++count}
          </Notification>
        )}>Click me
        </Button>
        <NotificationCenter ref={notificationCenterRef} />
      </>
    );
  }
  )
  .add('bottom left', () => {
    let notificationCenterRef = React.createRef();
    let count = 0;
    return (
      <>
        <Button onClick={() => notificationCenterRef.current.addNotification(
          <Notification>
            This is a notification. {++count}
          </Notification>
        )}>Click me
        </Button>
        <NotificationCenter ref={notificationCenterRef} verticalPosition='bottom' horizontalPosition='left' />
      </>
    );
  }
  )
  .add('center top', () => {
    let notificationCenterRef = React.createRef();
    let count = 0;
    return (
      <>
        <Button onClick={() => notificationCenterRef.current.addNotification(
          <Notification duration={60000}>
            This is a notification. {++count}
          </Notification>
        )}>Click me
        </Button>
        <NotificationCenter ref={notificationCenterRef} verticalPosition='bottom' horizontalPosition='center' />
      </>
    );
  }
  );

  storiesOf('Hypercomponents: Table', module)
  .add('normal table', () => (
    <TableHOC>
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
    </TableHOC>
  )
  )
  .add('normal table bordered', () => (
    <TableHOC tableStyle='bordered'>
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
    </TableHOC>
  )
  )
  .add('normal table striped', () => (
    <TableHOC tableStyle='striped'>
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
    </TableHOC>
  )
  )
  .add('normal table horizontal', () => (
    <TableHOC>
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
    </TableHOC>
  )
  )
  .add('normal table grouping column', () => (
    <TableHOC>
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
    </TableHOC>
  )
  )
  .add('HOC Table with data and property names', () => {
    const people = [
      { name: 'John', surname: 'Smith', age: 42 },
      { name: 'Adam', surname: 'Smith', gender: 'male' }
    ];
    const propertyNames = ['name', 'surname', 'age'];
    return (
      <TableHOC
        data={people}
        propertyNames={propertyNames}
        title='People'
      />
    )
  }
  )
  .add('HOC Table with data', () => {
    const people = [
      { name: 'John', surname: 'Smith', age: 42 },
      { name: 'Adam', surname: 'Smith', gender: 'male' }
    ];
    return (
      <TableHOC
        data={people}
      />
    )
  }
  )
  .add('Data table with filters and sorting', () => {
    const people = [
      { name: 'John', surname: 'Smith', age: 42 },
      { name: 'Maria', surname: 'Jones'},
      { name: 'Adam', surname: 'Smith', gender: 'male' }
    ];
    return (
      <TableHOC
        sortable filterable
        data={people}
      />
    )
  }
  )
  ;


storiesOf('Hypercomponents: List', module)
  .add('unordered', () => (
    <>
      <ListHOC>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='circle'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='disc'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='square'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='triangle'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='checkmark'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC listStyle='xmark'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
    </>
  )
  )
  .add('ordered', () => (
    <>
      <ListHOC ordered>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='decimal'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='decimal-leading-zero'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='lower-latin'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='lower-roman'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='upper-latin'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
      <ListHOC ordered listStyle='upper-roman'>
        <ListItem>Lorem ipsum</ListItem>
        <ListItem>Dolor sit amet</ListItem>
      </ListHOC>
    </>
  )
)
  .add('mapped', () => {
    const names = ['John', 'Paul', 'Mary'];
    return (
    <>
      <ListHOC data={names} />
      <ListHOC data={names} ordered />
    </>
  )
  })
;


storiesOf('Hypercomponents: Tabs', module)
  .add('normal default', () => (
    <TabsHOC openIndex={2}>
      <TabItem title='Lorem Ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title='Dolor Sit Amet'><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title='Peprendur'><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title='Nulla sit etiam'><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </TabsHOC>
  )
  )
  .add('normal button group', () => (
    <TabsHOC openIndex={1} controlStyle='button-group'>
      <TabItem title='Lorem Ipsum'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p></TabItem>
      <TabItem title='Dolor Sit Amet'><p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p></TabItem>
      <TabItem title='Peprendur'><p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p></TabItem>
      <TabItem title='Nulla sit etiam'><p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p></TabItem>
    </TabsHOC>
  )
  )
  .add('mapped default', () => (
    <TabsHOC openIndex={2}
      data = {[
        {
          title: 'Lorem Ipsum',
          content: (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p>)
        },
        {
          title: 'Dolor Sit Amet',
          content: (<p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p>)
        },
        {
          title: 'Peprendur',
          content: (<p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p>)
        },
        {
          title: 'Nulla sit etiam',
          content: (<p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p>)
        }
      ]}
    />
  )
)
  .add('mapped button group without titles', () => (
    <TabsHOC openIndex={2} controlStyle='button-group'
      data={[
        {
          content: (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi ultricies, convallis enim iaculis, commodo nisi. Suspendisse commodo arcu nibh, ut pretium felis imperdiet ac. Etiam nec volutpat arcu. Aliquam et congue magna, aliquam luctus quam. Ut vulputate lorem risus, non feugiat magna maximus non. Sed tellus nisl, fermentum id finibus gravida, molestie vel lectus. Cras quam mi, sodales sed scelerisque eget, dignissim et nisi. Suspendisse sodales faucibus tellus ut iaculis.</p>)
        },
        {
          content: (<p>Etiam eros ex, imperdiet non pharetra vel, accumsan ut erat. Phasellus nisl enim, cursus aliquet faucibus a, dignissim vestibulum leo. Aenean ullamcorper sem mauris, in pharetra quam rhoncus at. Phasellus posuere velit commodo venenatis tempus. Quisque vulputate nisi sem, ut maximus elit malesuada a. Duis vitae lectus vel mi pretium luctus non non lacus. Sed vitae est nec sem dictum accumsan quis eleifend tellus. Sed at dignissim velit. Pellentesque nec erat sed massa condimentum semper id id eros. Sed eleifend ex sit amet eros molestie fermentum. Pellentesque quis purus mi.</p>)
        },
        {
          content: (<p>Etiam rutrum lobortis porta. Vivamus justo diam, condimentum ut facilisis vitae, imperdiet ac lacus. Curabitur rutrum ex arcu, et lobortis augue gravida id. Mauris eu neque erat. Ut leo arcu, molestie sed pulvinar efficitur, facilisis id nisl. Etiam luctus ut nibh et eleifend. Cras lorem enim, posuere id vehicula vitae, iaculis at ante. Integer id ligula eu risus tristique commodo. Mauris tincidunt convallis erat ac faucibus. Fusce vehicula malesuada dui at fringilla. Phasellus efficitur, est vel tincidunt faucibus, arcu libero dignissim elit, non varius est ante nec urna. Sed in metus fermentum libero sodales vulputate. Nunc vel placerat ante. Mauris nec efficitur ante, eget ultricies magna. Morbi elementum interdum nunc ut suscipit. Donec in orci vel lectus mattis finibus sit amet in metus.</p>)
        },
        {
          content: (<p>Nam sit amet convallis justo. Etiam tristique diam sem, at feugiat felis mattis vitae. Morbi ullamcorper, urna non fermentum mollis, purus lacus eleifend elit, eget sagittis mi arcu et arcu. Integer nec augue aliquet risus viverra ullamcorper. Integer dapibus nunc ut vestibulum accumsan. Aliquam luctus in erat id placerat. Proin eleifend cursus nulla, non rutrum libero efficitur eget. Nam nec purus finibus, cursus augue ac, maximus elit. Aenean at est in turpis lacinia lacinia. Mauris lectus lorem, luctus ac pharetra at, blandit a lectus. Pellentesque vel ex tristique, pulvinar risus sed, elementum lacus. Curabitur sed imperdiet augue, ut malesuada augue.</p>)
        }
      ]}
    />
  )
  )
  ;


storiesOf('Hypercomponents: Accordion', module)
  .add('normal', () => (
    <>
      <AccordionHOC id="test">
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
      </AccordionHOC>
      <br />
      <AccordionHOC fill='flat'>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
        <Collapse title="Don't do it">
          <Hyperlink href='#'>Item 3.1</Hyperlink>
          <Hyperlink href='#'>Item 3.2</Hyperlink>
          <Hyperlink href='#'>Item 3.3</Hyperlink>
        </Collapse>
      </AccordionHOC>
    </>
  )
)
  .add('mapped', () => (
    <>
      <AccordionHOC id="test"
        data={[
          {
            title: 'Don\'t do it',
            content: (
              <>
                <Hyperlink href='#'>Item 3.1</Hyperlink>
                <Hyperlink href='#'>Item 3.2</Hyperlink>
                <Hyperlink href='#'>Item 3.3</Hyperlink>
              </>
            )
          },
          {
            title: 'Don\'t do it',
            content: (
              <>
                <Hyperlink href='#'>Item 3.1</Hyperlink>
                <Hyperlink href='#'>Item 3.2</Hyperlink>
                <Hyperlink href='#'>Item 3.3</Hyperlink>
              </>
            )
          }
        ]}
      />
      <br />
      <AccordionHOC fill='flat'
        data={[
          {
            title: 'Don\'t do it',
            content: (
              <>
                <Hyperlink href='#'>Item 3.1</Hyperlink>
                <Hyperlink href='#'>Item 3.2</Hyperlink>
                <Hyperlink href='#'>Item 3.3</Hyperlink>
              </>
            )
          },
          {
            title: 'Don\'t do it',
            content: (
              <>
                <Hyperlink href='#'>Item 3.1</Hyperlink>
                <Hyperlink href='#'>Item 3.2</Hyperlink>
                <Hyperlink href='#'>Item 3.3</Hyperlink>
              </>
            )
          }
        ]}
      />
    </>
  )
  )
  ;

storiesOf('Hypercomponents: Breadcrumbs', module)
  .add('normal', () => (
    <BreadcrumbsHOC>
      <BreadcrumbItem><a href='#'>Lorem Ipsum</a></BreadcrumbItem>
      <BreadcrumbItem>Dolor sit amet</BreadcrumbItem>
    </BreadcrumbsHOC>
  )
  )
  .add('mapped', () => (
    <BreadcrumbsHOC data={[
      {
        href: '#',
        title: 'Lorem Ipsum'
      },
      'Dolor sit amet'
    ]} />
  )
  )
;

storiesOf('Hypercomponents: Steps', module)
  .add('normal', () => (
    <>
      <StepsHOC>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </StepsHOC>
      <StepsHOC>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem selected>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </StepsHOC>
      <StepsHOC alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem selected>Consectetur</StepItem>
        <StepItem>Adipiscing elit</StepItem>
      </StepsHOC>
      <StepsHOC alignment='vertical'>
        <StepItem>Lorem Ipsum</StepItem>
        <StepItem>Dolor sit amet<small>Some description</small></StepItem>
        <StepItem>Consectetur</StepItem>
        <StepItem selected>Adipiscing elit</StepItem>
      </StepsHOC>
    </>
  )
)
  .add('mapped', () => (
    <>
      <StepsHOC data={[
        'Lorem Ipsum',
        (<>Dolor sit amet<small>Some description</small></>),
        'Consectetur',
        'Adipiscing elit'
      ]} />
      <StepsHOC data={[
        'Lorem Ipsum',
        {
          selected: true,
          content: (<>Dolor sit amet<small>Some description</small></>)
        },
        'Consectetur',
        'Adipiscing elit'
      ]} />
      <StepsHOC data={[
        'Lorem Ipsum',
        (<>Dolor sit amet<small>Some description</small></>),
        {
          selected: true,
          content: 'Consectetur'
        },
        'Adipiscing elit'
      ]} alignment='vertical' />
      <StepsHOC data={[
        'Lorem Ipsum',
        (<>Dolor sit amet<small>Some description</small></>),
        'Consectetur',
        {
          selected: true,
          content: 'Adipiscing elit'
        }
      ]} alignment='vertical' />
    </>
  )
  )
;

storiesOf('Hypercomponents: Menu', module)
  .add('Normal menus', () => (
    <>
      <MenuHOC type='horizontal'>
        <MenuItem>Item 1</MenuItem>
        <MenuItem selected href='#'>Item 2</MenuItem>
        <MenuItem href='#a'>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </MenuHOC>
      <MenuHOC type='vertical' highlight='right'>
        <MenuItem>Item 1</MenuItem>
        <MenuItem selected>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
      </MenuHOC>
    </>
  )
  )
  .add('Mapped menus', () => (
    <>
      <MenuHOC type='horizontal' data={[
        'Item 1',
        {
          selected: true,
          href: '#',
          title: 'Item 2'
        },
        {
          href: '#',
          title: 'Item 3'
        },
        'Item 4'
      ]}/>
      <MenuHOC type='vertical' highlight='right' data ={[
        'Item 1',
        {
          selected: true,
          title: 'Item 2'
        },
        'Item 3',
        'Item 4'
      ]}/>
    </>
  )
  )
;

storiesOf('Hypercomponents: RadioGroup', module)
  .add('normal', () => (
    <RadioGroupHOC name='radios'>
      <Radio>Hello</Radio><br />
      <Radio color='primary'>Hello</Radio><br />
      <Radio color='secondary'>Hello</Radio><br />
      <Radio color='danger'>Hello</Radio><br />
      <Radio color='success'>Hello</Radio><br />
      <Radio color='warning'>Hello</Radio>
    </RadioGroupHOC>
  )
)
  .add('mapped', () => (
    <RadioGroupHOC name='radios' data={[
      'Hello',
      {
        color: 'primary',
        value: 'Hello'
      },
      {
        color: 'secondary',
        title: 'Hello'
      },
      {
        color: 'danger',
        title: 'Hello',
        value: 'Hello'
      },
      {
        color: 'success',
        title: 'Hello',
      },
      {
        color: 'warning',
        value: 'Hello'
      }
    ]}/>
  )
  )
  ;

storiesOf('Hypercomponents: ButtonGroup', module)
  .add('normal', () => (
    <>
      <ButtonGroupHOC>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='primary' fill='solid'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='secondary' fill='outline'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='secondary' fill='solid' size='small' text='uppercase'>
        <Button>a</Button>
        <Button>b</Button>
        <Button>c</Button>
        <Button>d</Button>
      </ButtonGroupHOC>
      <br />
      <ButtonGroupHOC color='success' fill='gradient'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='danger' fill='solid' size='large'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='warning' fill='solid' shape='rounded'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
      <ButtonGroupHOC color='success' fill='outline' shape='rounded'>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroupHOC>
    </>
  )
  )
  .add('mapped', () => (
    <>
      <ButtonGroupHOC data={['A','B','C','D']} />
      <ButtonGroupHOC color='primary' fill='solid' data={['A','B','C','D']} />
      <ButtonGroupHOC color='secondary' fill='outline' data={['A','B','C','D']} />
      <ButtonGroupHOC color='secondary' fill='solid' size='small' text='uppercase' data={['A','B','C','D']} />
      <br />
      <ButtonGroupHOC color='success' fill='gradient' data={['A','B','C','D']} />
      <ButtonGroupHOC color='danger' fill='solid' size='large' data={['A','B','C','D']} />
      <ButtonGroupHOC color='warning' fill='solid' shape='rounded' data={['A','B','C','D']} />
      <ButtonGroupHOC color='success' fill='outline' shape='rounded' data={['A','B','C','D']} />
    </>
  )
  )
;

storiesOf('Hypercomponents: SelectInput', module)
  .add('normal', () => (
    <>
      <SelectInputHOC placeholder='0' onChange={(r) => console.log(r)}>
        <Option>a</Option>
        <Option selected>b</Option>
        <Option>c</Option>
      </SelectInputHOC>
      <SelectInputHOC multiple placeholder='0' onChange={(r) => console.log(r)}>
        <Option>a</Option>
        <Option selected>b</Option>
        <Option selected>c</Option>
      </SelectInputHOC>
    </>
  )
  )
  .add('mapped', () => (
    <>
      <SelectInputHOC placeholder='0' onChange={(r) => console.log(r)} data={[
        'a',
        {
          selected: true,
          value: 'b'
        },
        {
          title: 'c'
        }
      ]} />
      <SelectInputHOC multiple placeholder='0' onChange={(r) => console.log(r)} data={[
        'a',
        {
          selected: true,
          value: 'b'
        },
        {
          selected: true,
          title: 'c'
        }
      ]} />
    </>
  )
  )
  ;

storiesOf('Hypercomponents: ComboboxInput', module)
  .add('normal', () => (
    <>
      <ComboboxInputHOC>
        <Option>Chocolate</Option>
        <Option>Coconut</Option>
        <Option selected>Mint</Option>
        <Option>Strawberry</Option>
        <Option>Vanilla</Option>
      </ComboboxInputHOC>
      <ComboboxInputHOC>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInputHOC>
      <ComboboxInputHOC disabled>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInputHOC>
      <ComboboxInputHOC readOnly>
        <Option>Orange</Option>
        <Option>Lemon</Option>
        <Option>Apple</Option>
        <Option>Strawberry</Option>
        <Option>Watermelon</Option>
      </ComboboxInputHOC>
    </>
  )
  )
  .add('mapped', () => (
    <>
      <ComboboxInputHOC data={[
        'Chocolate',
        'Coconut',
        {
          selected: true,
          value: 'Mint'
        },
        {
          title: 'Strawberry'
        },
        'Vanilla'
      ]} />
      <ComboboxInputHOC data={[
        'Chocolate',
        'Coconut',
        {
          value: 'Mint'
        },
        {
          title: 'Strawberry'
        },
        'Vanilla'
      ]} />
      <ComboboxInputHOC disabled data={[
        'Chocolate',
        'Coconut',
        {
          value: 'Mint'
        },
        {
          title: 'Strawberry'
        },
        'Vanilla'
      ]} />
      <ComboboxInputHOC readOnly data={[
        'Chocolate',
        'Coconut',
        {
          value: 'Mint'
        },
        {
          title: 'Strawberry'
        },
        'Vanilla'
      ]} />
    </>
  )
  )
  ;

storiesOf('Hypercomponents: Input', module)
  .add('simple', () => (
    <>
      <InputHOC placeholder='Text...' type='text' />
      <InputHOC multiline type='text' />
      <InputHOC placeholder='Text...' type='textarea' />
      <InputHOC placeholder='mail@server.com' type='email'/>
      <InputHOC placeholder='https://google.com' type='url'/>
      <InputHOC type='password'/>
      <InputHOC placeholder='0' type='number' />
      <InputHOC type='select' data={['0', '2', '4']} />
      <InputHOC type='combobox' data={['0', '2', '4']} />
      <InputHOC placeholder='0000-0000-0000-0000' type='credit-card'/>
      <InputHOC placeholder='+30 (123) 456-7890' type='telephone'/>
      <InputHOC placeholder='$' type='currency' />
      <InputHOC placeholder='00:00' type='time' />
      <InputHOC placeholder='dd/mm/yyyy' type='date' />
      <InputHOC placeholder='#ffffff' type='color' />
      <InputHOC type='file' />
      <InputHOC type='rating' />
      <InputHOC type='slider' />
      <InputHOC type='checkbox'>I accept the terms of agreement.</InputHOC>
    </>
  )
  )
  .add('labelled', () => (
    <>
      <InputHOC placeholder='Text...' type='text' label='Text' />
      <InputHOC multiline type='text' label='Multiline text' />
      <InputHOC placeholder='Text...' type='textarea' label='Textarea' />
      <InputHOC placeholder='mail@server.com' type='email' label='E-mail'  />
      <InputHOC placeholder='https://google.com' type='url' label='URL' />
      <InputHOC type='password' label='Password' />
      <InputHOC placeholder='0' type='number' label='Number' />
      <InputHOC type='select' data={['0', '2', '4']} label='Select'  />
      <InputHOC type='combobox' data={['0', '2', '4']} label='Combo box' />
      <InputHOC placeholder='0000-0000-0000-0000' type='credit-card' label='Credit card' />
      <InputHOC placeholder='+30 (123) 456-7890' type='telephone' label='Phone' />
      <InputHOC placeholder='$' type='currency' label='Currency' />
      <InputHOC placeholder='00:00' type='time' label='Time' />
      <InputHOC placeholder='dd/mm/yyyy' type='date' label='Date' />
      <InputHOC placeholder='#ffffff' type='color' label='Color' />
      <InputHOC type='file' label='Upload' />
      <InputHOC type='rating' label='Rating' />
      <InputHOC type='slider' label='Sider' />
      <InputHOC type='checkbox' label='Checkbox'>I accept the terms of agreement.</InputHOC>
    </>
  )
  )
  .add('with icons', () => (
    <>
      <InputHOC icon='user' placeholder='Text...' type='text' label='Text' />
      <InputHOC multiline type='text' label='Multiline text' />
      <InputHOC placeholder='Text...' type='textarea' label='Textarea' />
      <InputHOC icon='mail' placeholder='mail@server.com' type='email' label='E-mail'  />
      <InputHOC icon='at-sign' placeholder='https://google.com' type='url' label='URL' />
      <InputHOC icon='key' type='password' label='Password' />
      <InputHOC placeholder='0' type='number' label='Number' />
      <InputHOC icon='cloud' type='select' data={['0', '2', '4']} label='Select'  />
      <InputHOC icon='sun' type='combobox' data={['0', '2', '4']} label='Combo box' />
      <InputHOC icon='credit-card' placeholder='0000-0000-0000-0000' type='credit-card' label='Credit card' />
      <InputHOC icon='phone' placeholder='+30 (123) 456-7890' type='telephone' label='Phone' />
      <InputHOC icon='dollar-sign' placeholder='$' type='currency' label='Currency' />
      <InputHOC icon='clock' placeholder='00:00' type='time' label='Time' />
      <InputHOC icon='calendar' placeholder='dd/mm/yyyy' type='date' label='Date' />
      <InputHOC icon='sliders' placeholder='#ffffff' type='color' label='Color' />
      <InputHOC type='file' label='Upload' />
      <InputHOC type='rating' label='Rating' />
      <InputHOC type='slider' label='Sider' />
    </>
  )
  )
;

storiesOf('Hypercomponents: Form', module)
  .add('normal', () => (
    <FormHOC twoColumn>
      <FormLegend>A Form</FormLegend>
      <FormLabel htmlFor='text-in'>Text</FormLabel>
      <TextInput id='text-in' placeholder='Text...' />
    </FormHOC>
  )
  )
  .add('mapped', () => (
    <FormHOC
      legend='Signup form'
      data={[
        {
          name: 'username',
          label: 'Username'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: '',
          label: 'Password'
        },
        {
          type: 'password',
          name: 'repeat',
          placeholder: '',
          label: 'Repeat password'
        },
        {
          type: 'email',
          name: 'email',
          label: 'E-mail',
          placeholder: 'mail@server.com'
        }
      ]}
    />
  )
)
  .add('two-column', () => (
    <FormHOC
      twoColumn
      legend='Signup form'
      data={[
        {
          name: 'username',
          label: 'Username'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: '',
          label: 'Password'
        },
        {
          type: 'password',
          name: 'repeat',
          placeholder: '',
          label: 'Repeat password'
        },
        {
          type: 'email',
          name: 'email',
          label: 'E-mail',
          placeholder: 'mail@server.com'
        }
      ]}
    />
  )
)
  .add('with sections', () => (
    <FormHOC
      legend='Signup form'
      twoColumn
      data={[
        {
          title: 'Part A',
          data: [
            {
              name: 'username',
              label: 'Username'
            },
            {
              type: 'password',
              name: 'password',
              placeholder: '',
              label: 'Password'
            },
            {
              type: 'password',
              name: 'repeat',
              placeholder: '',
              label: 'Repeat password'
            }
          ]
        },
        {
          title: 'Part B',
          description: 'We will not spam you',
          data: [
            {
              type: 'email',
              name: 'email',
              label: 'E-mail',
              placeholder: 'mail@server.com'
            }
          ]
        }
      ]}
    />
  )
  )
;

storiesOf('Hypercomponent: Card', module)
  .add('normal', () => (
    <>
      <CardHOC width={320} id="acard">
        <CardSection id="acardsection">
          <h5>Hello world<small>Lorem ipsum</small></h5>
          <p>This is some demo content that I want to test the Card with.</p>
        </CardSection>
        <CardSection>
          <p>More stuff here.</p>
        </CardSection>
      </CardHOC>
      <CardHOC width={320}>
        <CardSection>
          <h5>Hello world<small>Lorem ipsum</small></h5>
        </CardSection>
        <CardSection media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' height={200} />
        <CardSection>
          <p>This is some demo content that I want to test the Card with.</p>
        </CardSection>
      </CardHOC>
      <Grid justify='center' align='center'><Row><Col size={[12, 6, 5, 4]}>
      <CardHOC width={320}>
        <CardSection media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' height={200} />
        <CardSection>
          <Grid justify={'between'}>
            <Row>
              <Col size={8}><h5>Hello world<small>Lorem ipsum</small></h5></Col>
              <Col size={3}><Button fill='ghost' size='small'>Next</Button></Col>
            </Row>
          </Grid>
        </CardSection>
        <CardSection>
          <p>This is some demo content that I want to test the Card with.</p>
        </CardSection>
      </CardHOC>
    </Col><Col size={[12, 6, 5, 4]}>
        <CardHOC width={320}>
          <CardSection className='padding-ls-0p'>
            <Grid align='stretch'>
              <Row>
                <Col><h5>Hello world<small>Lorem ipsum</small></h5><p>This is some demo content that I want to test the Card with.</p></Col>
                <Col size={'120px'}><div style={{ height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${encodeURI('https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')})` }} /></Col>
              </Row>
            </Grid>
          </CardSection>
        </CardHOC>
      </Col></Row></Grid>
    </>
  )
  )
  .add('mapped', () => (
    <>
      <CardHOC width={320} id="acard"
        data={[
          (<>
            <h5>Hello world<small>Lorem ipsum</small></h5>
            <p>This is some demo content that I want to test the Card with.</p>
          </>),
          'More stuff here.'
        ]}
      />
      <CardHOC width={320}
        data ={[
          (<h5>Hello world<small>Lorem ipsum</small></h5>),
          {
            media: 'https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            height: 200
          },
          'This is some demo content that I want to test the Card with.'
        ]}
      />
      <Grid justify='center' align='center'><Row><Col size={[12, 6, 5, 4]}>
      <CardHOC width={320}
        data={[
          {
            media: 'https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
            height: 200
          },
          (
            <Grid justify={'between'}>
              <Row>
                <Col size={8}><h5>Hello world<small>Lorem ipsum</small></h5></Col>
                <Col size={3}><Button fill='ghost' size='small'>Next</Button></Col>
              </Row>
            </Grid>
          ),
          'This is some demo content that I want to test the Card with.'
        ]}
      />
    </Col><Col size={[12, 6, 5, 4]}>
        <CardHOC width={320} 
          data={[
            {
              className: 'padding-ls-0p',
              children: (
                <Grid align='stretch'>
                  <Row>
                    <Col><h5>Hello world<small>Lorem ipsum</small></h5><p>This is some demo content that I want to test the Card with.</p></Col>
                    <Col size={'120px'}><div style={{ height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${encodeURI('https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80')})` }} /></Col>
                  </Row>
                </Grid>
              )
            }
          ]}
        />
      </Col></Row></Grid>
    </>
  )
  )
;

storiesOf('Hypercomponents: MediaObject', module)
  .add('all cases', () => (
    <>
      <MediaObjectHOC media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'>
        <Paragraph><Text textStyle='bold'>Joe Henderson</Text><br />Dude, this is awesome. Thanks so much.</Paragraph>
      </MediaObjectHOC>
      <MediaObjectHOC media='https://images.unsplash.com/photo-1552661590-cbe23da9a2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80' data ={
        (
          <>
            <Paragraph><Text textStyle='bold'>Joe Henderson</Text><br/>Dude, this is awesome. Thanks so much.</Paragraph>
          </>
        )
      }/>
    </>
  )
  )
  ;

storiesOf('Hypercomponents: Item', module)
  .add('all variants', () => (
    <>
      <ItemHOC 
        author='Angelos Chalaris'
        media='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4'
        data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed eros nisl. Sed mollis ipsum lacus, a vestibulum augue consequat quis. Phasellus id fermentum erat. Nunc vitae gravida sem. Cras ac maximus tortor. Nulla sit amet tempus arcu. Vivamus finibus mattis porttitor. Quisque lacus lectus, lobortis non mauris vitae, euismod efficitur mi. In eget metus tincidunt, commodo ligula a, feugiat ligula. Pellentesque augue urna, elementum id neque interdum, sagittis maximus odio. Quisque ullamcorper sit amet elit quis sagittis. '
      />
      <ItemHOC 
        author='Angelos Chalaris'
        date={new Date()}
        media='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4'
        data='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed eros nisl. Sed mollis ipsum lacus, a vestibulum augue consequat quis. Phasellus id fermentum erat. Nunc vitae gravida sem. Cras ac maximus tortor. Nulla sit amet tempus arcu. Vivamus finibus mattis porttitor. Quisque lacus lectus, lobortis non mauris vitae, euismod efficitur mi. In eget metus tincidunt, commodo ligula a, feugiat ligula. Pellentesque augue urna, elementum id neque interdum, sagittis maximus odio. Quisque ullamcorper sit amet elit quis sagittis. '
      />
    </>
  )
  )
  ;

storiesOf('Hypercomponents: Pagination', module)
  .add('normal', () => (
    <>
      <PaginationHOC>
        <Button>First</Button>
        <Button>Previous</Button>
        <PaginationItem>1 of 6</PaginationItem>
        <Button>Next</Button>
        <Button>Last</Button>
      </PaginationHOC>
      <PaginationHOC shape='rounded'>
        <Button>{'<<'}</Button>
        <Button>{'<'}</Button>
        <PaginationItem>1 of 15</PaginationItem>
        <Button>{'>'}</Button>
        <Button>{'>>'}</Button>
      </PaginationHOC>
      <PaginationHOC>
        <Button><Icon name='chevrons-left' width={16} height={16} /></Button>
        <Button><Icon name='chevron-left' width={16} height={16} /></Button>
        <PaginationItem>1 / 8</PaginationItem>
        <Button><Icon name='chevron-right' width={16} height={16} /></Button>
        <Button><Icon name='chevrons-right' width={16} height={16} /></Button>
      </PaginationHOC>
      <PaginationHOC size='large'>
        <Button color='primary'><Icon name='chevrons-left' width={16} height={16} /></Button>
        <Button color='secondary'><Icon name='chevron-left' width={16} height={16} /></Button>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>...</PaginationItem>
        <PaginationItem>96</PaginationItem>
        <PaginationItem>97</PaginationItem>
        <Button color='primary'><Icon name='chevron-right' width={16} height={16} /></Button>
        <Button color='secondary'><Icon name='chevrons-right' width={16} height={16} /></Button>
      </PaginationHOC>
    </>
  )
)
  .add('mapped', () => (
    <>
      <PaginationHOC
        currentPage={1} pageCount={6}
        firstText='First'
        previousText='Previous'
        nextText='Next'
        lastText='Last'
      />
      <PaginationHOC shape='rounded'
        currentPage={1} pageCount={15}
        firstText={'<<'}
        previousText={'<'}
        nextText={'>'}
        lastText={'>>'}
      />
      <PaginationHOC
        currentPage={1} pageCount={8}
        firstText={(<Icon name='chevrons-left' width={16} height={16} />)}
        previousText={(<Icon name='chevron-left' width={16} height={16} />)}
        nextText={(<Icon name='chevron-right' width={16} height={16} />)}
        lastText={(<Icon name='chevrons-right' width={16} height={16} />)}
      />
    </>
  )
  )
  ;