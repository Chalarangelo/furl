import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Avatar } from '../src/components';

test('Avatar renders a <div> element with the appropriate class.', () => {
  const wrapper = shallow(
    <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' />
  );

  expect(wrapper).toContainMatchingElement('div.avatar');
});

test('Avatar renders a <div> element with the appropriate shape modifier.', () => {
  const wrapper = mount(
    <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' shape='rounded'/>
  );

  expect(wrapper).toContainMatchingElement('div.avatar.rounded');
});


test('Avatar renders a <div> element with the appropriate size modifier.', () => {
  const wrapper = mount(
    <Avatar src='https://avatars0.githubusercontent.com/u/8281875?s=460&v=4' size='large'/>
  );

  expect(wrapper).toContainMatchingElement('div.avatar.large');
});
