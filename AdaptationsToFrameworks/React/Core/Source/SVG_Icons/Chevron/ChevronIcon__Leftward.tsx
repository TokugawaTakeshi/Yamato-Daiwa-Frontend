import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const ChevronIcon__Leftward: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11.8 20"
        className={ className }
      >
        <path d="m3.5 10 8.3-8.2L10 0 0 10l10 10 1.8-1.8L3.5 10z" />
      </svg>
      
    );


export default ChevronIcon__Leftward;
