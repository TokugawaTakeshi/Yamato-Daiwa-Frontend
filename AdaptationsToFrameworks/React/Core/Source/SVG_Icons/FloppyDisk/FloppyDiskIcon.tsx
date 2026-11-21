import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const FloppyDiskIcon: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className={ className }
      >
        <path d="M15.77 0H0v20h20V4.23L15.77 0ZM2.28 1.32H14.6v3.16H2.28V1.32Zm15.44 16.75H2.28V8.71h15.44v9.36Z" />
        <circle
          cx="10"
          cy="13.24"
          r="3"
        />
      </svg>
      
    );


export default FloppyDiskIcon;
