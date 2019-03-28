const castArray = val => (Array.isArray(val) ? val : [val]);

const isUndefined = val => val === undefined;

const normalizeChildren = val => isUndefined(val) ? [] : castArray(val);

export { normalizeChildren };