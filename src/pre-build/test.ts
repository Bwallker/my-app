import Await from '#src/util/await';
import { isArrayOfType, isNumber } from '#src/util/types';

const Test = async () => {
  const x = [1, 2, '3'];
  console.log(isArrayOfType(x, isNumber));
};
Await(Test);
