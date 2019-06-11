const expect = require('expect');

import LayoutStyle from '../src/utilities/LayoutStyle';

test('LayoutStyle returns a string.', () => {
  let returnValue = LayoutStyle(
    'test-layout',
    ['top', 'top', 'top', 'top'],
    ['left', 'left', 'left', 'left'],
    [1.0, 1.0, 0.75, 0.8]
  );

  expect(typeof returnValue).toBe('string');
});