import React from 'react';

import "../../dist/styles/index.css";

import { storiesOf } from '@storybook/react';

import {Hyperlink,Button,Card} from "../../dist/components";

storiesOf('Hyperlink', module)
  .add("internal", () => (
    <Hyperlink href="#">
      Open in same tab.
    </Hyperlink>
  )
)
  .add("new tab", () => (
    <Hyperlink href="https://google.com" openIn="_blank">
      Open in new tab.
    </Hyperlink>
  )
)
  .add("external", () => (
    <Hyperlink href="https://google.com" openIn="external">
      Open in new tab with noopener noreferrer.
    </Hyperlink>
  )
);

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
