import { createDecorator } from "vue-facing-decorator";
import type { ComponentOptions } from "vue";
import { Logger, isUndefined } from "@yamato-daiwa/es-extensions";
import ForbiddenNullValueOfOptionalVuePropertyError from
    "../_Errors/ForbiddenNullValueOfOptionalVueProperty/ForbiddenNullValueOfOptionalVuePropertyError";


const preventNullForOptionalVueProperty: (_arguments: unknown, decoratorContext: (string | DecoratorContext)) => void =
    createDecorator(
      (componentOptions: ComponentOptions, key: string): void => {

        /* eslint-disable no-underscore-dangle -- [ CONVENTION ]
         * Vue uses the `_` prefix to define its own private properties.  */
        if (isUndefined(componentOptions._nonNullOptionalProperties__YDF)) {
          componentOptions._nonNullOptionalProperties__YDF = [];
        }

        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
        * The componentOptions` allows to add custom properties (do not be confused with ones called "props").
        * Maybe they can be specified via generic parameter, but `ComponentOptions` have many generic parameters which
        *   can not be specified selectively. */
        ((componentOptions._nonNullOptionalProperties__YDF as Array<string>)).push(key);

        patchLifecycleHook("beforeCreate", componentOptions);
        patchLifecycleHook("beforeUpdate", componentOptions);

      }
    );


function patchLifecycleHook(
  targetHookName: "beforeCreate" | "beforeUpdate",
  componentOptions: ComponentOptions
): void {

  const originalLifecycleHook: (() => unknown) | undefined = componentOptions[targetHookName];

  componentOptions[targetHookName] = function lifecycleHookWrapper(): void {

    const nonNullOptionalProperties: ReadonlyArray<string> = componentOptions._nonNullOptionalProperties__YDF;
    /* eslint-enable no-underscore-dangle */

    for (const nonNullOptionalProperty of nonNullOptionalProperties) {
      if (this[nonNullOptionalProperty] === null) {
        Logger.throwErrorAndLog({
          errorInstance: new ForbiddenNullValueOfOptionalVuePropertyError({
            targetComponentName: componentOptions.name,
            targetPropertyName: nonNullOptionalProperty
          }),
          title: ForbiddenNullValueOfOptionalVuePropertyError.localization.defaultTitle,
          occurrenceLocation:
              `${ componentOptions.name ?? "(Anonymous Component)" }.[prop]${ nonNullOptionalProperty }` +
              "@OptionalButNotNullableVueProperty"
        });
      }
    }

    originalLifecycleHook?.call(this);

  };
}


export default preventNullForOptionalVueProperty;
