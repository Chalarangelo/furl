import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Layout } from '../src/components';

test('Layout renders a <div> element of the appropriate class.', () => {
  const wrapper = shallow(
    <Layout>
    </Layout>
  );

  expect(wrapper).toContainMatchingElement('div.layout-container');
});
