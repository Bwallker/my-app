import { readFileSync, writeFileSync } from 'fs';
import root from '#src/root';
import { goToParentDir } from '#src/util/fs';
import { join } from 'path';
import { execSync } from 'child_process';
import Await from '#src/util/await';
export const GenerateConfig = async () => {
  const rootOfRoot = goToParentDir(root);
  console.log(rootOfRoot);
  const pathToConfig = join(rootOfRoot, 'compiler-options.json');

  const contents = readFileSync(pathToConfig, { encoding: 'utf-8' });

  const jsonData = { extends: 'expo/tsconfig.base', ...JSON.parse(contents) };
  const asString = JSON.stringify(jsonData, undefined, 2);
  const pathToOtherConfig = join(rootOfRoot, 'tsconfig.json');

  writeFileSync(pathToOtherConfig, asString, { encoding: 'utf-8' });

  execSync(
    `prettier --config ${join(
      rootOfRoot,
      '.prettierrc.json'
    )} --write ${pathToOtherConfig}`
  );
};
Await(GenerateConfig);
