import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from "../../src/components/button/Button";
import Card from "../../src/components/card/Card";

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
