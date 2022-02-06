type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;
type AsyncFunction<T> = Function & ((...x: any[]) => Promise<T>);

type Args = {
  <T extends AsyncFunction<unknown>>(
    func: T,
    x: ArgumentTypes<typeof func>
  ): void;
  <T extends AsyncFunction<unknown>>(
    func: ArgumentTypes<T> extends [] ? T : never,
    x?: []
  ): void;
};
const Await: Args = (func: any, x: any) => {
  func(x)
    .then(() => {
      console.log(func.name + ' function exited successfully');
    })
    .catch((e: unknown) => {
      console.log(func.name + ' function failed');
      console.log(e);
    });
};
export default Await;
