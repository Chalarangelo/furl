import React from 'react';
import { Input } from '../lib';

const InputExamples = (props) => (
  <div className="example-wrapper">
    <Input icon='user' placeholder='Text' type='text' label='Text' />
    <Input size='small' icon='user' placeholder='Text' type='text' label='Small' />
    <Input size='large' icon='user' placeholder='Text' type='text' label='Large' />
    <Input shape='rounded' icon='user' placeholder='Text' type='text' label='Rounded' />
    <Input multiline type='text' label='Multiline text' placeholder='Multiline text' rows={2}/>
    <Input icon='mail' placeholder='mail@server.com' type='email' label='E-mail' />
    <Input icon='at-sign' placeholder='https://google.com' type='url' label='URL' />
    <Input icon='key' type='password' label='Password' />
    <Input icon='key' type='password' label='Password (with revealer)' withRevealer/>
    <Input placeholder='0' type='number' label='Number' />
    <Input icon='cloud' type='select' data={['Cloudy', { title: 'Cloudier', selected: true }, 'Cloudiest']} label='Select' />
    <Input type='select' multiple data={['Cloudy', 'Cloudier', 'Cloudiest']} label='Multiple select' />
    <Input icon='sun' type='combobox' data={['Sunny', 'Sunnier', 'Sunniest']} label='Combo box' />
    <Input icon='credit-card' placeholder='0000-0000-0000-0000' type='credit-card' label='Credit card' />
    <Input icon='phone' placeholder='+30 (123) 456-7890' type='telephone' label='Phone' />
    <Input icon='dollar-sign' placeholder='$' type='currency' label='Currency' />
    <Input icon='clock' label='Time' placeholder='HH:MM' type='time' displaySeconds={false}/>
    <Input icon='calendar' placeholder='dd/mm/yyyy' type='date' label='Date' />
    <Input icon='sliders' placeholder='#ffffff' type='color' label='Color' />
    <Input type='file' label='Upload' placeholder='Drag and drop or click to upload files' />
    <Input type='rating' label='Rating' />
    <Input type='rating' iconName='heart' iconFillColor='var(--danger-red-500)' iconStyle='fill' label='Rating (custom)' />
    <Input type='slider' label='Slider' min={10} max={25} />
    <Input type='slider' label='Range slider' range min={10} max={25} />
    <Input type='checkbox' label='Checkbox'>I accept the terms of agreement.</Input>
    <Input type='checkbox' color='primary' label='Checkbox (primary)'>I accept the terms of agreement.</Input>
    <Input type='checkbox' color='secondary' label='Checkbox (secondary)'>I accept the terms of agreement.</Input>
    <Input type='checkbox' color='success' label='Checkbox (success)'>I accept the terms of agreement.</Input>
    <Input type='checkbox' color='warning' label='Checkbox (warning)'>I accept the terms of agreement.</Input>
    <Input type='checkbox' color='danger' label='Checkbox (danger)'>I accept the terms of agreement.</Input>
    <Input type='radiogroup' name='radios' label='Radio group' data={[
      'Normal',
      {
        color: 'primary',
        value: 'Primary'
      },
      {
        color: 'secondary',
        title: 'Secondary'
      },
      {
        color: 'success',
        title: 'Success',
      },
      {
        color: 'warning',
        value: 'Warning'
      },
      {
        color: 'danger',
        title: 'Danger'
      }
    ]} />
  </div>
);

export default InputExamples;