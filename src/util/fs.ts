import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';
export const goToParentDir = (path: string): string => {
  for (let i = path.length - 1; i >= 0; --i) {
    if (path[i] === '/' || path[i] === '\\') {
      return path.substring(0, i);
    }
  }
  return '';
};
export const getDirName = (url: string | URL): string => {
  const _filename = fileURLToPath(url);
  return dirname(_filename);
};
export const getFileName = (url: string | URL): string => fileURLToPath(url);
