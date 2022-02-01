import { execSync } from 'child_process';
console.log('Evaluating emulator');
export const main = async () => {
  console.log('Emulator has started');
  execSync('emulator.exe -avd Pixel_XL_API_30 -netdelay none -netspeed full');
  console.log('Emulator has exited');
};
main()
  .then(() => {
    console.log('Emulator script exited successfully');
  })
  .catch((e) => {
    console.log('Emulator script failed');
    console.log(e);
  });
