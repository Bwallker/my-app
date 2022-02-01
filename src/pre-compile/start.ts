import root from '#src/root';
import { readdirSync } from 'fs';
import { join } from 'path';
import * as worker from 'worker_threads';

export const main = async () => {
  console.log('Entering main');
  const preCompile = join(root, 'pre-compile');
  const filenames = readdirSync(preCompile);
  for (const filename of filenames) {
    console.log(filename);
    if (filename === 'start.js' || !filename.endsWith('.js')) {
      continue;
    }
    const fullPath = join(preCompile, filename);
    new worker.Worker(fullPath);
  }
};
main()
  .then(() => {
    console.log('Start script exited successfully');
  })
  .catch((e) => {
    console.log('Start script failed');
    console.log(e);
  });
