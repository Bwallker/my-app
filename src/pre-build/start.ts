import root from '#src/root';
import Await from '#src/util/await';
import { readdirSync } from 'fs';
import { join } from 'path';
import { Worker } from 'worker_threads';

export const Start = async () => {
  console.log('Entering main');
  const preBuild = join(root, 'pre-build');
  const filenames = readdirSync(preBuild);
  for (const filename of filenames) {
    console.log(filename);
    if (filename === 'start.js' || !filename.endsWith('.js')) {
      continue;
    }
    const fullPath = join(preBuild, filename);
    console.log(fullPath);
    new Worker(fullPath);
  }
};
Await(Start);
