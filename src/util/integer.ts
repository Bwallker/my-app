export type Integer = number & {};
export const roundToInteger = (num: number): Integer =>
  Math.round(num) as Integer;
export const isInteger = (x: unknown): x is Integer => Number.isInteger(x);
