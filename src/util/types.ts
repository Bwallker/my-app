export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isArray = <T>(x: unknown): x is Array<T> => Array.isArray(x);
export const isObject = (x: unknown): x is object => typeof x === 'object';
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
