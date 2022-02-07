export const isNumber = (x: unknown): x is number => typeof x === 'number';

export const isString = (x: unknown): x is string => typeof x === 'string';

export const isArray = (x: unknown): x is unknown[] => Array.isArray(x);
export const isArrayOfType = <T>(
  x: unknown,
  isT: (y: unknown) => y is T
): x is T[] => isArray(x) && x.every((y) => isT(y));

export const isObject = (x: unknown): x is object => typeof x === 'object';

export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';

export const isUndefined = (x: unknown): x is undefined => x === undefined;

export const isNull = (x: unknown): x is null => x === null;

export type Nullish = null | undefined;
export const isNullish = (x: unknown): x is Nullish =>
  x === null || x === undefined;
