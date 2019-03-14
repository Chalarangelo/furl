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
  .add("default", () => (
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
  .add("gradient", () => (
    <Button fill='gradient'>
      Continue
    </Button>
  )
)
  .add("outline", () => (
    <Button fill='outline'>
      Continue
    </Button>
  )
)
  .add("ghost", () => (
    <Button fill='ghost'>
      Continue
    </Button>
  )
)
  .add("uppercase", () => (
    <Button text='uppercase'>
      Continue
    </Button>
  )
)
  .add("danger", () => (
    <Button color='danger'>
      Continue
    </Button>
  )
)
  .add("danger gradient", () => (
    <Button color='danger' fill='gradient'>
      Continue
    </Button>
  )
)
  .add("danger outline", () => (
    <Button color='danger' fill='outline'>
      Continue
    </Button>
  )
)
  .add("danger ghost", () => (
    <Button color='danger' fill='ghost'>
      Continue
    </Button>
  )
)
  .add("success", () => (
    <Button color='success'>
      Continue
    </Button>
  )
)
  .add("success gradient", () => (
    <Button color='success' fill='gradient'>
      Continue
    </Button>
  )
)
  .add("success outline", () => (
    <Button color='success' fill='outline'>
      Continue
    </Button>
  )
)
  .add("success ghost", () => (
    <Button color='success' fill='ghost'>
      Continue
    </Button>
  )
)
  .add("warning", () => (
    <Button color='warning'>
      Continue
    </Button>
  )
)
  .add("warning gradient", () => (
    <Button color='warning' fill='gradient'>
      Continue
    </Button>
  )
)
  .add("warning outline", () => (
    <Button color='warning' fill='outline'>
      Continue
    </Button>
  )
)
  .add("warning ghost", () => (
    <Button color='warning' fill='ghost'>
      Continue
    </Button>
  )
)
;
storiesOf('Card', module)
  .add("with text", () => (
    <Card>Hello</Card>
  )
);
