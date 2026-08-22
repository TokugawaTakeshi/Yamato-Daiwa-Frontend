export class HeadingsLevelsCoordinator {

  static #currentLevel: number = 1;

  public static incrementLevel(): void {
    HeadingsLevelsCoordinator.#currentLevel++;
  }

  public static decrementLevel(): void {
    HeadingsLevelsCoordinator.#currentLevel--;
  }

  public static getHeadingTagOfCurrentLevel(): string {
    return `h${ HeadingsLevelsCoordinator.#currentLevel }`;
  }

  public static incrementLevelAndGetHeadingTag(): string {
    HeadingsLevelsCoordinator.incrementLevel();
    return HeadingsLevelsCoordinator.getHeadingTagOfCurrentLevel();
  }

  public static get currentLevel(): number {
    return HeadingsLevelsCoordinator.#currentLevel;
  }

}
