import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Icon } from '../src/components';

test('Icon renders a <span> element with the icon class.', () => {
  const wrapper = shallow(
    <Icon name='alert-triangle' width={48} height={48} />
  );

  expect(wrapper).toContainMatchingElement('span.icon');
});
