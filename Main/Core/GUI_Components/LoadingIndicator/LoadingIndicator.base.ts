/* eslint-disable-next-line @typescript-eslint/no-extraneous-class --
* Keep class + namespace combination for the unifying with other GUI components. */
export class LoadingIndicator {}


export namespace LoadingIndicator {

  export enum Types {
    variableWidthArcSpinner = "VARIABLE_WIDTH_ARC_SPINNER",
    twoConstantWidthArcsSpinner = "TWO_CONSTANT_WIDTH_ARCS_SPINNER"
  }

}


export default LoadingIndicator;
