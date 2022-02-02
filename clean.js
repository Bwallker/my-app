import { rmSync, mkdirSync } from 'fs';
console.log('Running clean script');
console.log('Removing old pre pre-build-target');
rmSync('./pre-build-target', { force: true, recursive: true });
console.log('Creating new pre-build-target');
mkdirSync('pre-build-target');
console.log('clean script finished.');
