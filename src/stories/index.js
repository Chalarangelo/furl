import React from 'react';

import "../../dist/styles/index.css";

import { storiesOf } from '@storybook/react';

import {Button,Card} from "../../dist/components";

storiesOf('Button', module)
  .add("with text", () => (
    <Button label={`Continue`} />
  )
);
storiesOf('Card', module)
  .add("with text", () => (
    <Card>Hello</Card>
  )
);
