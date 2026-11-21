import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const ChevronIcon__Downward: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 11.8"
        className={ className }
      >
        <path d="M10 8.2 1.8 0 0 1.8l10 10 10-10L18.2 0 10 8.2z" />
      </svg>
      
    );


export default ChevronIcon__Downward;
