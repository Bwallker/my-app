import { fileURLToPath } from 'url';
import { dirname } from 'path';
export var goToParentDir = function (path) {
    for (var i = path.length - 1; i >= 0; --i) {
        if (path[i] === '/' || path[i] === '\\') {
            return path.substring(0, i);
        }
    }
    return '';
};
export var getDirName = function (url) {
    var _filename = fileURLToPath(url);
    return dirname(_filename);
};
export var getFileName = function (url) { return fileURLToPath(url); };
