import {
  type ArbitraryObject,
  ImproperUsageError,
  isArbitraryObject,
  Logger,
  removeSpecificCharacterFromCertainPosition
} from "@yamato-daiwa/es-extensions";


export default function onDifferentValueAssigned():
  (target: unknown, setterName: string, descriptor: PropertyDescriptor) => void {
    return (target: unknown, setterName: string, descriptor: PropertyDescriptor): void => {

      const privatePropertyKey: string = "_" + removeSpecificCharacterFromCertainPosition({
        targetString: setterName,
        targetCharacter: "$",
        fromFirstPosition: true
      });

      if (!isArbitraryObject(target)) {

        Logger.throwErrorWithFormattedMessage({
          errorInstance: new ImproperUsageError(
            "The decorator has been appended to something that is not an object thus not the ECMAScript class"
          ),
          title: ImproperUsageError.localization.defaultTitle,
          occurrenceLocation: "@ReactiveSetter"
        });

        return;

      }


      /* eslint-disable-next-line @typescript-eslint/unbound-method -- In this case, the bounding of "this" must not be. */
      const originalSetter: ((value: unknown) => void) | undefined = descriptor.set;

      /* eslint-disable-next-line func-names --
       * Need to use `function` keyword for the accessing to correct `this` but not sure that the function name requires
       *   even when assigning to setter. */
      descriptor.set = function (this: ArbitraryObject, newValue: unknown): void {

        const comparableNewValue: string = JSON.stringify(newValue);
        const comparableOutdatedValue: string = JSON.stringify(this[privatePropertyKey]);

        if (comparableNewValue === comparableOutdatedValue) {
          return;
        }


        this[privatePropertyKey] = newValue;

        if (this.mustSuspendReactivity === true) {
          return;
        }


        originalSetter?.call(this, newValue);

      };

    };

  }
