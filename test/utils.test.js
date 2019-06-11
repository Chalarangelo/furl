const expect = require('expect');

import { normalizeChildren, generateUniqueId, combineClassNames, omitProps, combineStyles } from '../src/utilities/utils';

test('parseVariablesFromProps returns a valid object with the correct list of properties.', () => {
  let returnValue = combineStyles({
    fontFamily: 'A',
    fontSize: '200p',
    fontWeight: 600,
    boxShadow: 100,
    borderRadius: '200p',
    margin: '200p',
    marginRight: '200p',
    marginLeft: '200p',
    padding: '200p',
    paddingRight: '200p',
    paddingLeft: '200p',
    color: 'interface-gray-900',
    backgroundColor: 'interface-gray-100'
  });

  expect(typeof returnValue['--font-family']).toBe('string');
  expect(typeof returnValue['--font-size']).toBe('string');
  expect(typeof returnValue['--font-weight']).toBe('string');
  expect(typeof returnValue['--box-shadow']).toBe('string');
  expect(typeof returnValue['--border-radius']).toBe('string');
  expect(typeof returnValue['--margin']).toBe('string');
  expect(typeof returnValue['--margin-right']).toBe('string');
  expect(typeof returnValue['--margin-left']).toBe('string');
  expect(typeof returnValue['--padding']).toBe('string');
  expect(typeof returnValue['--padding-right']).toBe('string');
  expect(typeof returnValue['--padding-left']).toBe('string');
  expect(typeof returnValue['--color']).toBe('string');
  expect(typeof returnValue['--background-color']).toBe('string');
});

test('parseVariablesFromProps returns a valid value for variable-based font family.', () => {
  let returnValue = combineStyles({
    fontFamily: 'A'
  });

  expect(returnValue['--font-family']).toBe('var(--font-a)');
});

test('parseVariablesFromProps returns a valid value for non-variable-based font family.', () => {
  let returnValue = combineStyles({
    fontFamily: 'Comic Sans'
  });

  expect(returnValue['--font-family']).toBe('Comic Sans');
});

test('parseVariablesFromProps returns a valid value for variable-based font size.', () => {
  let returnValue = combineStyles({
    fontSize: '200p'
  });

  expect(returnValue['--font-size']).toBe('var(--ts-200p)');
});

test('parseVariablesFromProps returns a valid value for non-variable-based font size.', () => {
  let returnValue = combineStyles({
    fontSize: '200px'
  });

  expect(returnValue['--font-size']).toBe('200px');
});

test('parseVariablesFromProps returns a valid value for font weight.', () => {
  let returnValue = combineStyles({
    fontWeight: 200
  });

  expect(returnValue['--font-weight']).toBe('200');
});

test('parseVariablesFromProps returns a valid value for variable-based box shadow.', () => {
  let returnValue = combineStyles({
    boxShadow: '200'
  });

  expect(returnValue['--box-shadow']).toBe('var(--shadow-200)');
});

test('parseVariablesFromProps returns a valid value for non-variable-based box shadow.', () => {
  let returnValue = combineStyles({
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
  });

  expect(returnValue['--box-shadow']).toBe('10px 10px 5px 0px rgba(0,0,0,0.75)');
});

test('parseVariablesFromProps returns a valid value for variable-based margin.', () => {
  let returnValue = combineStyles({
    margin: '200p'
  });

  expect(returnValue['--margin']).toBe('var(--ls-200p)');
});

test('parseVariablesFromProps returns a valid value for non-variable-based margin.', () => {
  let returnValue = combineStyles({
    margin: '200px'
  });

  expect(returnValue['--margin']).toBe('200px');
});

test('parseVariablesFromProps returns a valid value for variable-based color.', () => {
  let returnValue = combineStyles({
    color: 'interface-gray-200'
  });

  expect(returnValue['--color']).toBe('var(--interface-gray-200)');
});

test('parseVariablesFromProps returns a valid value for non-variable-based color.', () => {
  let returnValue = combineStyles({
    color: 'red'
  });

  expect(returnValue['--color']).toBe('red');
});

test('generateUniqueId returns a valid id.', () => {
  let returnValue = generateUniqueId();

  expect(returnValue).toBe('element-0');
});

test('generateUniqueId returns a valid id when using a custom element.', () => {
  let returnValue = generateUniqueId('el');

  expect(returnValue).toBe('el-1');
});