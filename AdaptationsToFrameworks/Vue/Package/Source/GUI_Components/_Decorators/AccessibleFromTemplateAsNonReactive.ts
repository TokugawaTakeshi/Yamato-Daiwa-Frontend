/* eslint no-underscore-dangle: [ "warn", { "allow": [ "_nonReactiveStaticFields__YDF"] } ] --
 *  According Vue guidelines, the private properties should be underscored. */

import { type ArbitraryObject } from "@yamato-daiwa/es-extensions";


type Constructor = {
  prototype: Prototype;
  _nonReactiveStaticFields__YDF?: Array<string>;
  [newProperties: string]: unknown;
};

type Prototype = {
  created?: () => unknown;
};


const AccessibleFromTemplateAsNonReactive: PropertyDecorator = (target: object, propertyKey: string | symbol): void => {

  if (typeof target !== "function") {
    throw new Error("@exposeForTemplateAsNonReactive can only be applied to static fields.");
  }


  if (typeof propertyKey === "symbol") {
    throw new Error("@exposeForTemplateAsNonReactive does not support symbol-type properties.");
  }


  /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- ※
  * Although the `target` is a function, no need to call in here. Cast it to an empty indexable type for accessing to
  *   static properties. */
  const constructor: Constructor = target as unknown as Constructor;

  let hasCreatedLifecycleHookBeenPatched: boolean;

  if (Array.isArray(constructor._nonReactiveStaticFields__YDF)) {
    hasCreatedLifecycleHookBeenPatched = true;
    constructor._nonReactiveStaticFields__YDF.push(propertyKey);
  } else {
    constructor._nonReactiveStaticFields__YDF = [ propertyKey ];
    hasCreatedLifecycleHookBeenPatched = false;
  }

  if (!hasCreatedLifecycleHookBeenPatched) {

    const prototype: Prototype = constructor.prototype;
    const originalCreatedMethod: (() => unknown) | undefined = prototype.created;

    prototype.created = function patchCheatedHook(): void {

      originalCreatedMethod?.call(this);

      for (const key of constructor._nonReactiveStaticFields__YDF ?? []) {
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions --
         * It is possible to assign the new properties to prototype. */
        (this as ArbitraryObject)[key] = constructor[key];
      }

    };

  }

};


export default AccessibleFromTemplateAsNonReactive;
