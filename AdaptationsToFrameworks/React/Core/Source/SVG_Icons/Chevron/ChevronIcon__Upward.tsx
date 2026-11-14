import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const ChevronIcon__Upward: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 11.8"
        className={ className }
      >
        <path d="M18.2 11.8 20 10 10 0 0 10l1.8 1.8L10 3.5l8.2 8.3z" />
      </svg>
      
    );


export default ChevronIcon__Upward;
