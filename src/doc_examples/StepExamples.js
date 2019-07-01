import React from 'react';
import { Steps, Step, Text } from '../lib';

const StepExamples = (props) => (
  <div className="example-wrapper">
    <Steps>
      <Step>Pricing<Text textStyle='small'>Choose the plan that's best for you.</Text></Step>
      <Step>Account<Text textStyle='small'>Add your personal and contact information.</Text></Step>
      <Step selected>Billing<Text textStyle='small'>Add a payment method to your account.</Text></Step>
      <Step>Checkout<Text textStyle='small'>Review your choices and<br/> pay for your plan.</Text></Step>
    </Steps>
    <Steps alignment='vertical'>
      <Step>Pricing Plan<Text textStyle='small'>Choose the plan that's best for you.</Text></Step>
      <Step>Personal Informtion<Text textStyle='small'>Add your personal and contact information.</Text></Step>
      <Step selected>Billing Information<Text textStyle='small'>Add a payment method to your account.</Text></Step>
      <Step>Checkout<Text textStyle='small'>Review your choices and pay for your plan.</Text></Step>
    </Steps>
    
  </div>
);

export default StepExamples;