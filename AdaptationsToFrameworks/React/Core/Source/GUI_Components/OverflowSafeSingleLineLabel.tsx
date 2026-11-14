import React from "react";


function OverflowSafeSingleLineLabel(
  properties: OverflowSafeSingleLineLabel.Properties
): React.ReactElement {

  const RootElementTag: keyof React.JSX.IntrinsicElements = properties.rootElementTag ?? "div";

  return (
    <RootElementTag className="OverflowSafeSingleLineLabel">
      <span className="OverflowSafeSingleLineLabel-TextWithIncreasedLineHeight">
        { properties.children }
      </span>
    </RootElementTag>
  );

}


namespace OverflowSafeSingleLineLabel {
  export type Properties = Readonly<{
    rootElementTag?: keyof React.JSX.IntrinsicElements;
    children: React.ReactNode;
    className?: string | Array<string>;
  }>;
}


export default OverflowSafeSingleLineLabel;
