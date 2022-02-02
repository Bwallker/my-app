import { readFileSync, writeFileSync } from 'fs';
import root from '#src/root';
import { goToParentDir } from '#src/util/fs';
import { join } from 'path';
import { execSync } from 'child_process';
export const main = async () => {
    const rootOfRoot = goToParentDir(root);
    console.log(rootOfRoot);
    const pathToConfig = join(rootOfRoot, 'compiler-options.json');
    const contents = readFileSync(pathToConfig, { encoding: 'utf-8' });
    const jsonData = { extends: 'expo/tsconfig.base', ...JSON.parse(contents) };
    const asString = JSON.stringify(jsonData, undefined, 2);
    const pathToOtherConfig = join(rootOfRoot, 'tsconfig.json');
    writeFileSync(pathToOtherConfig, asString, { encoding: 'utf-8' });
    execSync(`prettier --config ${join(rootOfRoot, '.prettierrc.json')} --write ${pathToOtherConfig}`);
};
main()
    .then(() => {
    console.log('Config generator script exited successfully');
    process.exit(0);
})
    .catch((e) => {
    console.log('Config generator script failed');
    console.log(e);
    process.exit(1);
});
