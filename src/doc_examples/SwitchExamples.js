import React from 'react';
import { Switch } from '../lib';

const SwitchExamples = (props) => (
  <div className="example-wrapper">
    <Switch>Switch</Switch><br />
    <Switch color='primary'>Primary</Switch><br />
    <Switch color='secondary'>Secondary</Switch><br />
    <Switch color='success'>Success</Switch><br />
    <Switch color='danger'>Danger</Switch><br />
    <Switch color='warning'>Warning</Switch>
  </div>
);

export default SwitchExamples;