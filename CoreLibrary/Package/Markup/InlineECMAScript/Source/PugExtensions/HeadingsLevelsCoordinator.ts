export default class HeadingsLevelsCoordinator__YDF {

  static #currentLevel: number = 1;

  public static incrementLevel(): void {
    HeadingsLevelsCoordinator__YDF.#currentLevel++;
  }

  public static decrementLevel(): void {
    HeadingsLevelsCoordinator__YDF.#currentLevel--;
  }

  public static getHeadingTagOfCurrentLevel(): string {
    return `h${ HeadingsLevelsCoordinator__YDF.#currentLevel }`;
  }

  public static incrementLevelAndGetHeadingTag(): string {
    HeadingsLevelsCoordinator__YDF.incrementLevel();
    return HeadingsLevelsCoordinator__YDF.getHeadingTagOfCurrentLevel();
  }

  public static get currentLevel(): number {
    return HeadingsLevelsCoordinator__YDF.#currentLevel;
  }

}
