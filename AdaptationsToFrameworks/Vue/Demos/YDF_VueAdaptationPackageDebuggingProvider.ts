/* global NodeJS */

import Path from "path";
import FileSystem from "fs";
import PackageJSON from "@npmcli/package-json";
import FilesWatcher from "chokidar";
import { isUndefined, millisecondsToSeconds, Logger, UnexpectedEventError} from "@yamato-daiwa/es-extensions";
import { ConsoleApplicationLogger } from "@yamato-daiwa/es-extensions-nodejs";


export default class YDF_VueAdaptationPackageDebuggingProvider {

  static {

    Logger.setImplementation(ConsoleApplicationLogger);
    YDF_VueAdaptationPackageDebuggingProvider.provideDebugging().catch(Logger.logPromiseError);

  }


  private static async provideDebugging(): Promise<void> {

    const packageJSON: PackageJSON = await PackageJSON.load(process.cwd());
    const yamatoDaiwaFrontendVuePackagePath: string | undefined =
        packageJSON.content.dependencies?.["@yamato-daiwa/frontend-vue"];

    if (isUndefined(yamatoDaiwaFrontendVuePackagePath)) {
      Logger.throwErrorWithFormattedMessage({
        errorInstance:
            new UnexpectedEventError(
              "The required package \"@yamato-daiwa/frontend-vue\" has not been mentioned among dependencies in \"package.json\""
            ),
        title: UnexpectedEventError.localization.defaultTitle,
        occurrenceLocation: "PackageDebuggingProvider.provideDebugging()"
      });
    }

    if (!yamatoDaiwaFrontendVuePackagePath.includes("../")) {
      return;
    }


    const installedYamatoDaiwaFrontendVuePackageAbsolutePath: string =
        Path.join(process.cwd(), "node_modules", "@yamato-daiwa", "frontend-vue");

    const yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath: string =
        Path.join(process.cwd(), "..", "Package");

    if (FileSystem.existsSync(installedYamatoDaiwaFrontendVuePackageAbsolutePath)) {
      FileSystem.rmSync(installedYamatoDaiwaFrontendVuePackageAbsolutePath, { recursive: true });
    }

    FileSystem.mkdirSync(installedYamatoDaiwaFrontendVuePackageAbsolutePath);

    YDF_VueAdaptationPackageDebuggingProvider.copyDistributable(
      yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath,
      installedYamatoDaiwaFrontendVuePackageAbsolutePath
    );

    FileSystem.copyFileSync(
      Path.join(yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath, "package.json"),
      Path.join(installedYamatoDaiwaFrontendVuePackageAbsolutePath, "package.json")
    );

    Logger.logSuccess({
      title: "[ YDF Vue Adaptation Package Debugging Provider ]",
      description: "package.json of \"@yamato-daiwa/es-extensions-nodejs\" has been replaced to the local one",
      compactLayout: true
    });

    if (process.argv.includes("--incremental")) {

      Logger.logInfo({
        title: "[ YDF Vue Adaptation Package Debugging Provider ]",
        description: "Watching for the \"Distributable\" directory of \"@yamato-daiwa/es-extensions-nodejs\" for changes...",
        compactLayout: true
      });

      let refreshingTimer: NodeJS.Timeout;

      FilesWatcher.

          watch(`${ installedYamatoDaiwaFrontendVuePackageAbsolutePath }/Distributable/**.*`).

          on(
            "all",
            (): void => {

              clearTimeout(refreshingTimer);

              refreshingTimer =
                  setTimeout(
                    (): void => {
                      YDF_VueAdaptationPackageDebuggingProvider.copyDistributable(
                        yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath,
                        installedYamatoDaiwaFrontendVuePackageAbsolutePath
                      );
                    },
                    millisecondsToSeconds(2)
                  );

            }
          );

    }

  }

  private static copyDistributable(
    yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath: string,
    installedYamatoDaiwaFrontendVuePackageAbsolutePath: string
  ): void {

    FileSystem.cpSync(
      Path.join(yamatoDaiwaFrontendVuePackageSourceCodeAbsolutePath, "Distributable"),
      Path.join(installedYamatoDaiwaFrontendVuePackageAbsolutePath, "Distributable"),
      { recursive: true }
    );

    Logger.logSuccess({
      title: "[ YDF Vue Adaptation Package Debugging Provider ]",
      description: "\"Distributable\" directory of \"@yamato-daiwa/es-extensions-nodejs\" has been replaced to the local one",
      compactLayout: true
    });

  }

}
