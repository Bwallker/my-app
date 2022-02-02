import { rmSync, mkdirSync } from 'fs';
rmSync('./pre-compile-target', { force: true, recursive: true });
mkdirSync('pre-compile-target');
