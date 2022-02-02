import { getDirName } from '#src/util/fs';
const root = getDirName(import.meta.url);
export default root;
