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
  .add("blank", () => (
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
)
;

storiesOf('Button', module)
  .add("normal", () => (
    <Button>
      Continue
    </Button>
  )
)
  .add("large", () => (
    <Button size='large'>
      Continue
    </Button>
  )
)
  .add("small", () => (
    <Button size='small'>
      Continue
    </Button>
  )
)
  .add("rounded", () => (
    <Button shape='rounded'>
      Continue
    </Button>
  )
)
  .add("circle", () => (
    <Button shape='circle'>
      >.
    </Button>
  )
)
  .add("uppercase", () => (
    <Button text='uppercase'>
      Continue
    </Button>
  )
)
  .add("default", () => (
    <React.Fragment>
      <Button >Continue</Button>
      <Button fill='gradient'>Continue</Button>
      <Button fill='outline'>Continue</Button>
      <Button fill='ghost'>Continue</Button>
      <Button disabled>Continue</Button>
      <Button fill='gradient' disabled>Continue</Button>
      <Button fill='outline' disabled>Continue</Button>
      <Button fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("danger", () => (
    <React.Fragment>
      <Button color='danger'>Continue</Button>
      <Button color='danger' fill='gradient'>Continue</Button>
      <Button color='danger' fill='outline'>Continue</Button>
      <Button color='danger' fill='ghost'>Continue</Button>
      <Button color='danger' disabled>Continue</Button>
      <Button color='danger' fill='gradient' disabled>Continue</Button>
      <Button color='danger' fill='outline' disabled>Continue</Button>
      <Button color='danger' fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("success", () => (
    <React.Fragment>
      <Button color='success'>Continue</Button>
      <Button color='success' fill='gradient'>Continue</Button>
      <Button color='success' fill='outline'>Continue</Button>
      <Button color='success' fill='ghost'>Continue</Button>
      <Button color='success' disabled>Continue</Button>
      <Button color='success' fill='gradient' disabled>Continue</Button>
      <Button color='success' fill='outline' disabled>Continue</Button>
      <Button color='success' fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("warning", () => (
    <React.Fragment>
      <Button color='warning'>Continue</Button>
      <Button color='warning' fill='gradient'>Continue</Button>
      <Button color='warning' fill='outline'>Continue</Button>
      <Button color='warning' fill='ghost'>Continue</Button>
      <Button color='warning' disabled>Continue</Button>
      <Button color='warning' fill='gradient' disabled>Continue</Button>
      <Button color='warning' fill='outline' disabled>Continue</Button>
      <Button color='warning' fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
)
  .add("link", () => (
    <React.Fragment>
      <Button type="link" href="https://google.com">Continue</Button>
      <Button type="link" href="https://google.com" fill='gradient'>Continue</Button>
      <Button type="link" href="https://google.com" fill='outline'>Continue</Button>
      <Button type="link" href="https://google.com" fill='ghost'>Continue</Button>
      <Button type="link" href="https://google.com" disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='gradient' disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='outline' disabled>Continue</Button>
      <Button type="link" href="https://google.com" fill='ghost' disabled>Continue</Button>
    </React.Fragment>
  )
  )

;
storiesOf('Card', module)
  .add("with text", () => (
    <Card>Hello</Card>
  )
);
