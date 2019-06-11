import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button, ButtonGroup } from '../src/components';

test('ButtonGroup renders a <div> element with the appropriate class and the given children.', () => {
  const wrapper = mount(
    <ButtonGroup>
      <Button>A</Button>
      <Button>B</Button>
      <Button>C</Button>
      <Button>D</Button>
    </ButtonGroup>
  );

  expect(wrapper).toContainMatchingElement('div.button-group');
  expect(wrapper).toContainMatchingElements(4, 'button');
});

test('ButtonGroup renders a <div> element with the appropriate class and the given children, passing down the appropriate modifiers.', () => {
  const wrapper = mount(
    <ButtonGroup color='primary' size='large' fill='solid' shape='rounded' text='upperacase'>
      <Button>A</Button>
      <Button>B</Button>
      <Button>C</Button>
      <Button>D</Button>
    </ButtonGroup>
  );

  expect(wrapper).toContainMatchingElement('div.button-group.primary.large.solid.rounded.upperacase');
  expect(wrapper).toContainMatchingElements(4, 'button.primary.large.solid.rounded.upperacase');
});
