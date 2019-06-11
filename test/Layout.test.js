import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Layout, Header, Sidebar, Content } from '../src/components';

test('Layout renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Layout>
    </Layout>
  );

  expect(wrapper).toContainMatchingElement('div.layout-container');
});

test('Layout renders the correct children.', () => {
  const wrapper = mount(
    <Layout header='top' sidebar='top' contentSize={1.0}>
      <Header></Header>
      <Header></Header>
      <Sidebar></Sidebar>
      <Sidebar></Sidebar>
      <Content></Content>
      <Content></Content>
    </Layout>
  );

  expect(wrapper).toContainMatchingElements(1, 'header');
  expect(wrapper).toContainMatchingElements(1, 'aside');
  expect(wrapper).toContainMatchingElements(1, 'main');
});