import { readFileSync, writeFileSync } from 'fs';
import root from '#src/root';
import { goToParentDir } from '#src/util/fs';
import { join } from 'path';
import { execSync } from 'child_process';
export const main = async () => {
  const superRoot = goToParentDir(root);
  console.log(superRoot);
  const pathToConfig = join(superRoot, 'compiler-options.json');

  const contents = readFileSync(pathToConfig, { encoding: 'utf-8' });
  const jsonData = JSON.parse(contents);
  jsonData['extends'] = 'expo/tsconfig.base';
  const asString = JSON.stringify(jsonData, undefined, 2);
  const pathToOtherConfig = join(superRoot, 'tsconfig.json');

  writeFileSync(pathToOtherConfig, asString, { encoding: 'utf-8' });

  execSync(
    `prettier --config ${join(
      superRoot,
      '.prettierrc.json'
    )} --write ${pathToOtherConfig}`
  );
};
main()
  .then(() => {
    console.log('Config generator script exited successfully');
  })
  .catch(() => {
    console.log('Config generator script failed');
  });
