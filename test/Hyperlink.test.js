import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Hyperlink } from '../src/components';

test('Hyperlink renders an <a> element.', () => {
  const wrapper = shallow(
    <Hyperlink href='#'>
      Open in same tab.
    </Hyperlink>
  );

  expect(wrapper).toContainMatchingElement('a');
});

test('Hyperlink has target="_blank".', () => {
  const wrapperA = shallow(
    <Hyperlink href='#' openIn='_blank'>
      Open in new tab.
    </Hyperlink>
  );
  const wrapperB = shallow(
    <Hyperlink href='#' openIn='blank'>
      Open in new tab.
    </Hyperlink>
  );

  expect(wrapperA).toContainMatchingElement('a[target="_blank"]');
  expect(wrapperB).toContainMatchingElement('a[target="_blank"]');
});

test('Hyperlink has rel="noopener noreferrer".', () => {
  const wrapperA = shallow(
    <Hyperlink href='#' openIn='external'>
      Open in new tab with noopener noreferrer.
    </Hyperlink>
  );
  const wrapperB = shallow(
    <Hyperlink href='#' openIn='external'>
      Open in new tab with noopener noreferrer.
    </Hyperlink>
  );

  expect(wrapperA).toContainMatchingElement('a[rel="noopener noreferrer"]');
  expect(wrapperB).toContainMatchingElement('a[rel="noopener noreferrer"]');
});
