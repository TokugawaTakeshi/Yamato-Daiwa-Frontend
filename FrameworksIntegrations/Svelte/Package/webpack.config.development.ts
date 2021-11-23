import Webpack from "webpack";
import Path from "path";
import preprocessSvelteSingleFileComponent from "svelte-preprocess";


const webpackConfig: Webpack.Configuration = {

  context: Path.resolve(process.cwd(), "Tests"),
  entry: {
    "OverflowSafeSingleLineLabel": "./OverflowSafeSingleLineLabel/OverflowSafeSingleLineLabel.test.ts"
  },
  output: {
    filename: "[name].build.js",
    path: Path.resolve(process.cwd(), "Tests/OverflowSafeSingleLineLabel")
  },
  mode: "development",
  watch: true,

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.(html|svelte)$/,
        loader: "svelte-loader",
        options: {
          preprocess: preprocessSvelteSingleFileComponent()
        }
      },
      {
        /* [ Theory ] Required to prevent errors from Svelte on Webpack 5+ */
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.pug$/u,
        oneOf: [
          {
            resourceQuery: /^\?svelte/u,
            use: [ "pug-plain-loader" ]
          },
          {
            use: [
              {
                loader: "html-loader",
                options: {
                  minimize: { caseSensitive: true }
                }
              },
              "pug-html-loader"
            ]
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [ ".mjs", ".js", ".ts" ],
    alias: {
      svelte: Path.resolve("node_modules", "svelte")
    }
  }
};


export default webpackConfig;
