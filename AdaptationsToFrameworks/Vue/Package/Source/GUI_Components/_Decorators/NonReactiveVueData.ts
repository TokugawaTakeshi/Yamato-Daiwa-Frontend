import { createDecorator } from "vue-facing-decorator";
import type { ComponentOptions } from "vue";


export default function NonReactiveVueData(
  value: unknown
): (_arguments: unknown, decoratorContext: string | DecoratorContext) => void {
  return createDecorator(
    (componentOptions: ComponentOptions, key: string): void => {

      /* eslint-disable-next-line @typescript-eslint/unbound-method --
       * The binding of the correct context will be executed inside the `patchCheatedHook` function. */
      const originalCreatedHook: (() => unknown) | undefined = componentOptions.created;

      componentOptions.created = function patchCheatedHook(): void {

        originalCreatedHook?.call(this);

        this[key] = value;

      };

    },
    { preserve: true }
  );
}
