import React from 'react';
import {Form, FormLegend, FormLabel, TextInput } from '../lib';

const FormExamples = (props) => (
  <div className="example-wrapper">
    <Form>
      <FormLegend>Single-Column Form</FormLegend>
      <FormLabel htmlFor='text-in'>Full Name</FormLabel>
      <TextInput id='text-in' placeholder='John Smith' />
    </Form>
    <Form twoColumn>
      <FormLegend>Two-Column Form</FormLegend>
      <FormLabel htmlFor='text-in'>Full Name</FormLabel>
      <TextInput id='text-in' placeholder='John Smith' />
    </Form>
  </div>
);

export default FormExamples;