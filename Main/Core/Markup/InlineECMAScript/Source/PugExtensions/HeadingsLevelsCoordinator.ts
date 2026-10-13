import { ImproperUsageError, Logger } from "@yamato-daiwa/es-extensions";

export abstract class HeadingsLevelsCoordinator {

  static readonly #MAXIMAL_DEPTH_LEVEL: number = 6;
  static #currentLevel: number = 1;


  /* ━━━ Getters ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static get currentLevel(): number {
    return HeadingsLevelsCoordinator.#currentLevel;
  }

  public static get headingTagOfCurrentLevel(): string {
    return `h${ HeadingsLevelsCoordinator.#currentLevel }`;
  }


  /* ━━━ Methods ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  public static incrementLevel(): void {

    if (HeadingsLevelsCoordinator.#currentLevel === HeadingsLevelsCoordinator.#MAXIMAL_DEPTH_LEVEL) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new ImproperUsageError("Unable to increment the level because current level is maximal."),
        errorType: ImproperUsageError.NAME,
        title: ImproperUsageError.localization.defaultTitle,
        occurrenceLocation: "HeadingsLevelsCoordinator.incrementLevel()"
      });
    }


    HeadingsLevelsCoordinator.#currentLevel++;

  }

  public static decrementLevel(): void {

    if (HeadingsLevelsCoordinator.#currentLevel === 1) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance: new ImproperUsageError("Unable to decrement the level because current level is minimal."),
        errorType: ImproperUsageError.NAME,
        title: ImproperUsageError.localization.defaultTitle,
        occurrenceLocation: "HeadingsLevelsCoordinator.decrementLevel()"
      });
    }


    HeadingsLevelsCoordinator.#currentLevel--;

  }

  public static incrementLevelAndGetHeadingTag(): string {
    HeadingsLevelsCoordinator.incrementLevel();
    return HeadingsLevelsCoordinator.headingTagOfCurrentLevel;
  }

  public static decrementLevelAndGetHeadingTag(): string {
    HeadingsLevelsCoordinator.decrementLevel();
    return HeadingsLevelsCoordinator.headingTagOfCurrentLevel;
  }

}
