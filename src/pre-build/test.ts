import Await from '#src/util/await';

const Test = async () => {
  const myObject = {x: 1, y: 2, z: 3};
  myObject = Object.freeze(myObject);
  myObject.x = 5;
}
Await(Test);
