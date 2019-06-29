import React from 'react';
import { Calendar } from '../lib';

const CalendarExamples = (props) => (
  <div className="example-wrapper">
    <Calendar date={new Date('01/01/2020')} style={{margin: 'var(--margin-vertical) auto'}}/>
  </div>
);

export default CalendarExamples;