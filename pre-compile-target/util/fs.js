import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const goToParentDir = (path) => {
    for (let i = path.length - 1; i >= 0; --i) {
        if (path[i] === '/' || path[i] === '\\') {
            return path.substring(0, i);
        }
    }
    return '';
};
export const getDirName = (url) => {
    const _filename = getFileName(url);
    return dirname(_filename);
};
export const getFileName = (url) => fileURLToPath(url);
