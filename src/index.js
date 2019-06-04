import React from 'react';
import ReactDOM from 'react-dom';

import Type from './docs/Type';
import ButtonDocs from './docs/Button';
import CardDocs from './docs/Card';
import DropdownDocs from './docs/Dropdown';
import HyperlinkDocs from './docs/Hyperlink';
import TableDocs from './docs/Table';
import ImageDocs from './docs/Image';
import ListDocs from './docs/List';
import GridDocs from './docs/Grid';
import MenuDocs from './docs/Menu';
import LayoutSysDocs from './docs/LayoutSystem';
import LayoutDocs from './docs/Layout';
import TypographyDocs from './docs/Typography';

import Image from './components/Image';
import { Layout, Header, Sidebar, Content } from './components/Layout';
import { Grid, Row, Column as Col } from './components/Grid';
import { Menu, MenuItem } from './components/Menu';
import Dropdown from './components/Dropdown';
import {Form, FormLegend, FormLabel} from './components/Form'
import { TextInput, NumberInput, EmailInput, PasswordInput, UrlInput, SelectInput, Option, ComboboxInput, CreditCardInput, PhoneInput, CurrencyInput, TimeInput, SliderInput, DateInput, ColorInput, FileInput, RatingInput} from './components/Input'

import './styles/index.scss';
import './index.scss';
import 'prismjs/themes/prism.css';

ReactDOM.render(<>
  <TextInput placeholder='Text...' />
  <TextInput size='small' placeholder='Small' />
  <TextInput size='large' placeholder='Large' />
  <TextInput shape='rounded' placeholder='Rounded' />
  <TextInput shape='rounded' size='small' placeholder='Small rounded' defaultValue='test' />
  <TextInput shape='rounded' size='large' placeholder='Large rounded' defaultValue='test' />
  <TextInput value='disabled' disabled />
  <TextInput value='readonly' readOnly />
  <TextInput multiline placeholder='Text...' />
  <TextInput multiline value='disabled' disabled />
  <TextInput multiline value='readonly' readOnly />
  <EmailInput placeholder='mail@server.com' />
  <EmailInput value='disabled' disabled />
  <EmailInput value='readonly' readOnly />
  <UrlInput placeholder='https://example.com' />
  <UrlInput value='disabled' disabled />
  <UrlInput value='readonly' readOnly />
  <PasswordInput placeholder='Password' />
  <PasswordInput withRevealer placeholder='Password' />
  <PasswordInput disabled withRevealer placeholder='Password' />
  <PasswordInput readOnly withRevealer placeholder='Password' />
  <NumberInput placeholder='0' onChange={(r) => console.log(r)} />
  <NumberInput placeholder='0' step={3} min={0} max={15} />
  <NumberInput disabled placeholder='0' step={3} min={0} max={15} />
  <NumberInput readOnly placeholder='0' step={3} min={0} max={15} />
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
  <SelectInput multiple placeholder='0' onChange={(r) => console.log(r)}>
    <Option>a</Option>
    <Option selected>b</Option>
    <Option selected>c</Option>
  </SelectInput>
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
  <CreditCardInput onChange={e => console.log(e.target)} />
  <CreditCardInput disabled onChange={e => console.log(e.target)} />
  <CreditCardInput readOnly onChange={e => console.log(e.target)} />
  <PhoneInput placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
  <PhoneInput disabled placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
  <PhoneInput readOnly placeholder='+30 (123) 456-7890' onChange={e => console.log(e.target)} />
  <CurrencyInput placeholder='$' />
  <CurrencyInput currencySymbol='€' placeholder='€' />
  <CurrencyInput currencySymbol='£' placeholder='£' />
  <CurrencyInput disabled currencySymbol='£' />
  <CurrencyInput readOnly currencySymbol='£' />
  <TimeInput />
  <TimeInput displayHours={false} />
  <TimeInput displaySeconds={false} />
  <TimeInput displayHours={false} displaySeconds={false} />
  <TimeInput disabled displayHours={false} displaySeconds={false} />
  <TimeInput readOnly displayHours={false} displaySeconds={false} />
  <DateInput placeholder='dd/mm/yyyy' />
  <DateInput monthBeforeDay placeholder='mm/dd/yyyy' />
  <DateInput minYear={2000} separator='-' placeholder='mm-dd-yyyy' />
  <DateInput minYear={2000} maxYear={2019} monthBeforeDay placeholder='mm/dd/yyyy' />
  <DateInput minYear={2000} disabled separator='-' placeholder='mm-dd-yyyy' />
  <DateInput minYear={2000} readOnly separator='-' placeholder='mm-dd-yyyy' />
  <ColorInput placeholder='#fafafa' onChange={e => console.log(e.target)} />
  <ColorInput disabled placeholder='#fafafa' onChange={e => console.log(e.target)} />
  <ColorInput readOnly placeholder='#fafafa' onChange={e => console.log(e.target)} />
  <FileInput placeholder='Drop files here' onChange={e => console.log(e.target)} />
  <FileInput multiple placeholder='Drop multiple files here' onFilesChanged={e => console.log(e)} />
  <FileInput placeholder='Drop files here' shape='rounded' onFilesChanged={e => console.log(e)} />
  <FileInput placeholder='Drop files here' size='small' onFilesChanged={e => console.log(e)} />
  <FileInput placeholder='Drop files here' size='large' onFilesChanged={e => console.log(e)} />
  <FileInput disabled placeholder='Drop files here' onChange={e => console.log(e.target)} />
  <FileInput readOnly placeholder='Drop files here' onChange={e => console.log(e.target)} />
  <RatingInput onChange={(e) => console.log(e)} />
  <RatingInput iconStyle='fill' onChange={(e) => console.log(e)} />
  <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)' onChange={(e) => console.log(e)} />
  <RatingInput iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' onChange={(e) => console.log(e)} />
  <RatingInput disabled iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' defaultValue={3} onChange={(e) => console.log(e)} />
  <RatingInput readOnly iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' defaultValue={3} onChange={(e) => console.log(e)} />
  <SliderInput />
  <SliderInput range />
  <SliderInput min={10} max={25} />
  <SliderInput disabled min={10} max={25} />
  <SliderInput readOnly min={10} max={25} />
  <SliderInput range min={10} max={27} />
  <SliderInput disabled range min={10} max={27} />
  <SliderInput readOnly range min={10} max={27} />
  </>, 
  document.getElementById('root'));
