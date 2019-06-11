import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Notification, NotificationCenter } from '../src/components';

test('NotificationCenter renders a <div> element of the appropriate classes.', () => {
  const notificationCenterRef = React.createRef();
  const wrapper = mount(
    <NotificationCenter ref={notificationCenterRef}>
    </NotificationCenter>
  );

  expect(wrapper).toContainMatchingElement('div.notification-center');
  expect(wrapper).toContainMatchingElement('div.notification-center.top.right');
});

test('Notification renders a <div> element of the appropriate class.', () => {
  const wrapper = mount(
    <Notification>Notification</Notification>
  );

  expect(wrapper).toContainMatchingElement('div.notification');
});

test('Notification renders a <div> element with the appropriate modifier classes.', () => {
  const wrapper = mount(
    <Notification size='large' color='primary'>Notification</Notification>
  );

  expect(wrapper).toContainMatchingElement('div.notification.large.primary');
});
