const castArray = val => (Array.isArray(val) ? val : [val]);

const isUndefined = val => val === undefined;

const normalizeChildren = val => isUndefined(val) ? [] : castArray(val);

let idCounter = 0;
const generateUniqueId = (prefix = 'element') => `${prefix}-${idCounter++}`;

const combineClassNames = (classNames) => classNames.join(' ').trim();

export { normalizeChildren, generateUniqueId, combineClassNames };
