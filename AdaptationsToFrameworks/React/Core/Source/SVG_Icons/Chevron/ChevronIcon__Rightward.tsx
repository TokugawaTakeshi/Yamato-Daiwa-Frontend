import React from "react";
import type SVG_IconComponent from "../SVG_IconComponent";


const ChevronIcon__Rightward: SVG_IconComponent = ({ className }: SVG_IconComponent.Properties): React.ReactElement =>

    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11.8 20"
        className={ className }
      >
        <path d="M0 18.2 1.8 20l10-10-10-10L0 1.8 8.2 10 0 18.2z" />
      </svg>
      
    );


export default ChevronIcon__Rightward;
