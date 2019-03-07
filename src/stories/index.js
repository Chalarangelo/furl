import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from "../../src/components/button/Button";

storiesOf('Button', module)
  .add("with text", () => (
    <Button label={`Continue`} />
  )
);
