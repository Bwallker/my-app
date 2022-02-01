export const sleep = (ms: number) =>
  new Promise<void>((resolve) => void setTimeout(resolve, ms));
