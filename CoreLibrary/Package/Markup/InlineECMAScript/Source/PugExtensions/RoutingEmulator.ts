import type { ArbitraryObject } from "@yamato-daiwa/es-extensions";


export class RoutingEmulator {

  static #routing: ArbitraryObject | null = null;
  static #currentRoute: string | null = null;


  public static get routing(): ArbitraryObject | null {
    return RoutingEmulator.#routing;
  }

  public static get currentRoute(): string | null {
    return RoutingEmulator.#currentRoute;
  }


  public static initialize(routing: ArbitraryObject): typeof RoutingEmulator {
    RoutingEmulator.#routing = routing;
    return RoutingEmulator;
  }

  public static setCurrentRoute(route: string): typeof RoutingEmulator {
    RoutingEmulator.#currentRoute = route;
    return RoutingEmulator;
  }

}
